import React, { useState } from 'react';
import '../pages/styles/ProfileTabs.css';

import show1 from '../images/show1.jpg';
import show2 from '../images/show2.jpg';
import show3 from '../images/show3.jpg';
import show4 from '../images/show4.jpg';
import show5 from '../images/show5.jpg';
import show6 from '../images/show6.jpg';

import sales1 from '../images/sales1.jpg';
import sales2 from '../images/sales2.jpg';
import sales3 from '../images/sales3.jpg';
import sales4 from '../images/sales4.jpg';
import sales5 from '../images/sales5.jpg';
import PostModal2 from '../components/PostModal2';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('show');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

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

  const showPaintings = [
    { img: show1, title: 'Girl2 Painting', description: 'The background is subtle, allowing her face to shine as the focal point, capturing her inner grace and the sheer beauty of her features.' },
    { img: show2, title: 'Music2 Painting', description: 'A classic artistic style.' },
    { img: show3, title: 'Music1 Painting', description: 'The serene and timeless beauty of music, rendered with rich textures and vibrant colors.' },
    { img: show4, title: 'Girl1 Painting', description: 'The timeless beauty of a young woman with remarkable attention to detail.' },
    { img: show5, title: 'Tree Painting', description: 'The oil painting portrays a tree.' },
    { img: show6, title: 'Dreaming Painting', description: 'This stunning oil painting captures the majestic presence of a dreaming feeling.' },
 
  ];

  const salePaintings = [
    { img: sales1, title: 'Girl4 Painting', price: '220$' },
    { img: sales2, title: 'Nature1 Painting', price: '220$' },
    { img: sales3, title: 'Girl3 Painting', price: '220$' },
    { img: sales4, title: 'Girl2 Painting', price: '220$' },
    { img: sales5, title: 'Girl1 Painting', price: '220$' },
  ];

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
    <PostModal2 post={selectedPost} onClose={closeModal} />
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
              <img className="card-img-top" src={painting.img} alt={`Oil Painting - ${painting.title}`} />
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
              <img className="card-img-top" src={painting.img} alt={`Oil Painting - ${painting.title}`} />
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
