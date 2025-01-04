import React, { useState, useEffect } from 'react';
import '../pages/styles/upload-style.css'


const CreateNewPost = () => {
  const [postDetails, setPostDetails] = useState(() => {
    const savedDetails = localStorage.getItem('postDetails');
    return savedDetails
      ? JSON.parse(savedDetails)
      : {
          imagePreview: null,
          title: '',
          description: '',
          category: '',
          tags: '',
          originalOrPrint: '',
          isForSale: false,
          price: '',
        };
  });

  useEffect(() => {
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
      const imgLink = URL.createObjectURL(file);
      setPostDetails((prev) => ({
        ...prev,
        imagePreview: imgLink,
      }));
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const imgLink = URL.createObjectURL(file);
      setPostDetails((prev) => ({
        ...prev,
        imagePreview: imgLink,
      }));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handlePost = () => {
    const { title, description, category, originalOrPrint, isForSale, price } = postDetails;

    if (!title || !description || !category || !originalOrPrint) {
      alert('Please fill out all required fields.');
      return;
    }

    if (isForSale && !price) {
      alert('Please enter a price for the post.');
      return;
    }

    localStorage.setItem('postDetails', JSON.stringify(postDetails));
    alert('Post details saved successfully!');
  };

  return (
    <div className='upload-container'>
    <div className="container-upload">
      <h1>Create a New Post</h1>

      <div className="imageUpload">
        <label htmlFor="input-file" id="drop-area" onDragOver={handleDragOver} onDrop={handleDrop}>
          <input type="file" accept="image/*" id="input-file" hidden onChange={handleImageUpload}/>
          <div id="img-view"
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
          <input type="number" id="price" name="price" value={postDetails.price} placeholder="Enter price" onChange={handleInputChange}/>
        </div>
      )}

      <div className="form-group1">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" value={postDetails.title} placeholder="Enter title"
          onChange={handleInputChange}/>
      </div>

      <div className="form-group1">
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" value={postDetails.description} placeholder="Enter description"
          onChange={handleInputChange}></textarea>
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

      <div className="form-group1">
        <label htmlFor="tags">Tags</label>
        <select id="tags">
          <option>-- Select Tags --</option>
          <option>Modern</option>
          <option>Colorful</option>
          <option>Nature</option>
        </select>
      </div>

      <div className="form-group1">
        <label htmlFor="originalOrPrint">Original or Print?</label>
        <select id="originalOrPrint" name="originalOrPrint"
          value={postDetails.originalOrPrint}
          onChange={handleInputChange}>
          <option value="">-- Select an Option --</option>
          <option value="Original">Original</option>
          <option value="Print">Print</option>
        </select>
      </div>

      <div className="post-buttons">
        <button className="preview">Preview</button>
        <button className="post" onClick={handlePost}>
          Post
        </button>
      </div>
    </div>
    </div>
  );
};

export default CreateNewPost;
