import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/styles/upload-style.css'
import Navbar from '../components/navbar';


const Upload = () => {
  const shopItems = JSON.parse(localStorage.getItem('shopItems')) || [];
  const [postDetails, setPostDetails] = useState(() => {
    const savedDetails = localStorage.getItem('postDetails');
    return savedDetails
      ? JSON.parse(savedDetails)
      : {
        imagePreview: null,
        title: '',
        description: '',
        category: '',
        isForSale: false,
        price: '',
      };
  });

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('postDetails', JSON.stringify(postDetails));
  }, [postDetails]);

  useEffect(() => {
    return () => {
      if (postDetails.imagePreview) {
        URL.revokeObjectURL(postDetails.imagePreview);
      }
    };
  }, [postDetails.imagePreview]);

  useEffect(() => {
    if (!localStorage.getItem('shopItems')) {
      localStorage.setItem('shopItems', JSON.stringify(shopItems));
    }
    localStorage.setItem('postDetails', JSON.stringify(postDetails));
  }, [postDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPostDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleForSale = (value) => {
    setPostDetails((prev) => ({
      ...prev,
      isForSale: value,
      price: value ? prev.price : '',
    }));
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const newImage = e.target.result;
        setPostDetails((prev) => ({
          ...prev,
          imagePreview: newImage,
        }));
      };
      reader.readAsDataURL(file);

    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const newImage = e.target.result;
        setPostDetails((prev) => ({
          ...prev,
          imagePreview: newImage,
        }));
      };
      reader.readAsDataURL(file);

    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handlePost = () => {
    const { title, description, category, isForSale, price } = postDetails;

    if (!title || !description || !category) {
      alert('Please fill out all required fields.');
      return;
    }

    if (isForSale && !price) {
      alert('Please enter a price for the post.');
      return;
    }

    const maxId = shopItems.reduce((max, item) => (item.id > max ? item.id : max), 0);
    const newId = maxId + 1;
    const user = JSON.parse(localStorage.getItem('currentUser'));

    const newPost = {
      id: newId,
      title: postDetails.title,
      subtitle: `By ${user.firstName} ${user.lastName}`,
      description: postDetails.description,
      price: parseFloat(postDetails.price || 0),
      image: postDetails.imagePreview,
      category: postDetails.category,
      isForSale: postDetails.isForSale,
    };

    const updatedShopItems = [...shopItems, newPost];
    localStorage.setItem('shopItems', JSON.stringify(updatedShopItems));
    localStorage.removeItem('postDetails');
    alert('Post details saved successfully!');
    navigate('/Profile');
  };

  return (
    <div className="upload-container">
      <div className="shop-styling"><Navbar IsWithSearch={false} /></div>
      <div className="container-upload">
        <h1>Create a New Post</h1>

        <div className="imageUpload">
          <label
            htmlFor="input-file" id="drop-area-upload"
            onDragOver={handleDragOver}
            onDrop={handleDrop}>
            <input type="file" accept="image/*" id="input-file" hidden
              onChange={handleImageUpload} />
            <div
              id="img-view-upload"
              style={{
                backgroundImage: postDetails.imagePreview
                  ? `url(${postDetails.imagePreview})`
                  : 'none',
                border: postDetails.imagePreview ? 'none' : '2px dashed',
              }}>
              {!postDetails.imagePreview && (
                <>
                  <img src="https://img.icons8.com/?size=160&id=hAsRCSg99jYz&format=png" alt="Upload Icon" />
                  <p>
                    Drag and drop or click here <br />
                    to upload image
                  </p>
                  <span>Upload any image from desktop</span>
                </>
              )}
            </div>
          </label>
        </div>

        <div className="toggle-buttons-price">
          <button
            className={postDetails.isForSale ? 'sale' : ''}
            onClick={() => toggleForSale(true)}>
            For Sale
          </button>
          <button
            className={!postDetails.isForSale ? 'show' : ''}
            onClick={() => toggleForSale(false)}>
            For Show
          </button>
        </div>

        {postDetails.isForSale && (
          <div className="form-group1" id="priceGroup">
            <label htmlFor="price">Price</label>
            <input type="number" id="price" name="price"
              value={postDetails.price}
              placeholder="Enter price"
              onChange={handleInputChange} />
          </div>
        )}

        <div className="form-group1">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title"
            value={postDetails.title}
            placeholder="Enter title"
            onChange={handleInputChange} />
        </div>

        <div className="form-group1">
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description"
            value={postDetails.description}
            placeholder="Enter description"
            onChange={handleInputChange}
          ></textarea>
        </div>

        <div className="form-group1">
          <label htmlFor="category">Category</label>
          <select id="category" name="category"
            value={postDetails.category}
            onChange={handleInputChange}>
            <option value="">-- Select a Category --</option>
            <option value="Painting">Painting</option>
            <option value="Sculpture">Sculpture</option>
            <option value="Photography">Photography</option>
            <option value="Digital Art">Digital Art</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="post-buttons">
          <button className="post" onClick={handlePost}>
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
