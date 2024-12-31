import React, { useState } from 'react';
import '../pages/styles/upload-style.css'


const Upload = () => {
  const [isForSale, setIsForSale] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const togglePriceInput = (value) => {
    setIsForSale(value);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imgLink = URL.createObjectURL(file);
      setImagePreview(imgLink);
    }
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      const imgLink = URL.createObjectURL(file);
      setImagePreview(imgLink);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className='upload-container'>
    <div className="container-upload">
      <h1>Create a New Post</h1>

      <div className="imageUpload">
        <label 
          htmlFor="input-file" 
          id="drop-area" 
          onDragOver={handleDragOver} 
          onDrop={handleDrop}
        >
          <input 
            type="file" 
            accept="image/*" 
            id="input-file" 
            hidden 
            onChange={handleImageUpload} 
          />
          <div 
            id="img-view" 
            style={{
              backgroundImage: imagePreview ? `url(${imagePreview})` : 'none',
              border: imagePreview ? 'none' : '2px dashed',
            }}
          >
            {!imagePreview && (
              <>
                <img src="../images/icon-image-upload.jpg" alt="Upload Icon" />
                <p>Drag and drop or click here<br />to upload image</p>
                <span>Upload any image from desktop</span>
              </>
            )}
          </div>
        </label>
      </div>

      <div className="toggle-buttons-price">
        <button 
          className={isForSale ? 'sale' : ''} 
          onClick={() => togglePriceInput(true)}
        >
          For Sale
        </button>
        <button 
          className={!isForSale ? 'show' : ''} 
          onClick={() => togglePriceInput(false)}
        >
          For Show
        </button>
      </div>

      {isForSale && (
        <div className="form-group" id="priceGroup">
          <label htmlFor="price">Price</label>
          <input type="text" id="price" placeholder="Enter price" />
        </div>
      )}

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" placeholder="Enter title" />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea id="description" placeholder="Enter description"></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select id="category">
          <option>-- Select a Category --</option>
          <option>Painting</option>
          <option>Sculpture</option>
          <option>Photography</option>
          <option>Digital Art</option>
          <option>Other</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="tags">Tags</label>
        <select id="tags">
          <option>-- Select Tags --</option>
          <option>Modern</option>
          <option>Colorful</option>
          <option>Nature</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="originalOrPrint">Original or Print?</label>
        <select id="originalOrPrint">
          <option>-- Select an Option --</option>
          <option>Original</option>
          <option>Print</option>
        </select>
      </div>

      <div className="post-buttons">
        <button className="preview">Preview</button>
        <button className="post">Post</button>
      </div>
    </div>
    </div>
  );
};

export default Upload;
