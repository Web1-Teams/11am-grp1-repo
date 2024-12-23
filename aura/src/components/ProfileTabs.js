import React, { useState, useEffect } from 'react';
import '../pages/styles/ProfileTabs.css';

import PostModal from './PostModal';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('show');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPaintings, setShowPaintings] = useState([]);
  const [salePaintings, setSalePaintings] = useState([]);

  useEffect(() => {
    // Fetch data from the JSON file
    const fetchPaintings = async () => {
      try {
        const response = await fetch('/profile.json'); // Replace with the correct path to your JSON file
        const data = await response.json();
        setShowPaintings(data.showPaintings);
        setSalePaintings(data.salePaintings);
      } catch (error) {
        console.error('Error fetching the paintings data:', error);
      }
    };

    fetchPaintings();
  }, []);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const openModal = (post) => {
    console.log('Opening Modal with post:', post);
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    console.log('Closing Modal');
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className="tabs-container">
      <div className="tabs1">
        <button
          className={`tab1 ${activeTab === 'show' ? 'active' : ''}`}
          onClick={() => handleTabClick('show')}
        >
          Posts for Show
        </button>
        <button
          className={`tab1 ${activeTab === 'sale' ? 'active' : ''}`}
          onClick={() => handleTabClick('sale')}
        >
          Posts for Sale
        </button>
      </div>
      {isModalOpen && selectedPost && (
        <div className={`modals ${isModalOpen ? 'open' : ''}`}>
          <PostModal post={selectedPost} onClose={closeModal} />
        </div>
      )}

      {activeTab === 'show' && (
        <div id="show-posts" className="middle-bottom">
          {showPaintings.map((painting, index) => (
            <div
              className="cards"
              style={{ width: '18rem' }}
              key={index}
              onClick={() => openModal(painting)}
            >
              <img
                className="card-img-top"
                src={painting.img}
                alt={`Oil Painting - ${painting.title}`}
              />
              <div className="card-body">
                <h5 className="card-title">{painting.title}</h5>
                <p className="card-text">{painting.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'sale' && (
        <div id="sale-posts" className="middle-bottom">
          {salePaintings.map((painting, index) => (
            <div
              className="cards"
              style={{ width: '18rem' }}
              key={index}
              onClick={() => openModal(painting)}
            >
              <img
                className="card-img-top"
                src={painting.img}
                alt={`Oil Painting - ${painting.title}`}
              />
              <div className="card-body">
                <h5 className="card-title">{painting.title}</h5>
                <p className="card-sale">Price: {painting.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProfileTabs;
