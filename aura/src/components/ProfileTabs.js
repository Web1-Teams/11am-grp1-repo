import React, { useState } from 'react';
import '../pages/styles/ProfileTabs.css';

import post1 from '../images/post1.jpg';
import post2 from '../images/post2.jpg';
import post3 from '../images/post3.jpg';
import post4 from '../images/post4.jpg';
import post5 from '../images/post5.jpg';
import post6 from '../images/post6.jpg';
import post7 from '../images/post7.jpg';
import post8 from '../images/post8.jpg';
import post9 from '../images/post9.jpg';
import post10 from '../images/post10.jpg';
import sale1 from '../images/sale1.jpg';
import sale2 from '../images/sale2.jpg';
import sale3 from '../images/sale3.jpg';
import sale4 from '../images/sale4.jpg';
import sale5 from '../images/sale5.jpg';
import PostModal from './PostModal';


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
    { img: post1, title: 'Girl1 Painting', description: 'The background is subtle, allowing her face to shine as the focal point, capturing her inner grace and the sheer beauty of her features.' },
    { img: post2, title: 'Marilyn Monroe Painting', description: 'A classic portrayal of Marilyn Monroe in a colorful, artistic style.' },
    { img: post3, title: 'Nature2 Painting', description: 'The serene and timeless beauty of nature, rendered with rich textures and vibrant colors.' },
    { img: post4, title: 'Girl2 Painting', description: 'The timeless beauty of a young woman with remarkable attention to detail.' },
    { img: post5, title: 'Girl3 Painting', description: 'The oil painting portrays a young woman whose beauty is captured with delicate precision.' },
    { img: post6, title: 'Elephant Painting', description: 'This stunning oil painting captures the majestic presence of an elephant in its natural habitat.' },
    { img: post7, title: 'Nature1 Painting', description: 'The raw beauty of nature in its most serene form.' },
    { img: post8, title: 'Horse Painting', description: 'Horse Painting - Horse Art - Original Oil Painting - Rainbow horse.' },
    { img: post9, title: 'Bird Painting', description: 'The bird’s calm expression is accentuated by the fine detailing around its eyes and beak, which seem to gaze thoughtfully into the distance.' },
    { img: post10, title: 'Girl4 Painting', description: 'Her eyes, large and expressive, draw the viewer in, with a gaze that seems both thoughtful and full of life.' },
  ];

  const salePaintings = [
    { img: sale1, title: 'Nature2 Painting', price: '220$' },
    { img: sale2, title: 'Nature1 Painting', price: '220$' },
    { img: sale3, title: 'Girl2 Painting', price: '220$' },
    { img: sale4, title: 'Village Painting', price: '220$' },
    { img: sale5, title: 'Girl1 Painting', price: '220$' },
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
