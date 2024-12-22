import React from 'react';
import '../pages/styles/LeftSection.css';
import AURA from '../images/AURA.png';

const LeftSection = () => {
  return (
    <div className="split left">
      <img className="logos" src={AURA} alt="logo" />
      <div className="NavContainers">
        <nav>
          <ul id="nav_lists">
            <li id="gal-icons">
              <a href="#">
                <i className="fa-regular fa-images"></i>
                <span className="menus">Gallery</span>
              </a>
            </li>
            <li id="store-icons">
              <a href="#">
                <i className="fa-solid fa-store"></i>
                <span className="menus">Store</span>
              </a>
            </li>
            <li id="mas-icons">
              <a href="#">
                <i className="fa-regular fa-comments"></i>
                <span className="menus">Messages</span>
              </a>
            </li>
            <li id="dark-icons">
              <button className="darkButtons">
                <i className="fas fa-moon" style={{ color: 'white' }}></i>
                <span> Dark Mode</span>
              </button>
            </li>
            <li id="about-icons">
              <a href="#">
                <i className="fa-solid fa-question"></i>
                <span className="menus">About</span>
              </a>
            </li>
            <li id="add-icons">
              <a href="#">
                <i className="fa fa-plus-square" style={{ fontSize: '24px' }}></i>
                <span className="adds">Create</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
   
      <div className="logout-container">
        <button className="Btn">
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>
          <div className="text"> Logout</div>
        </button>
      </div>
    </div>
  );
};

export default LeftSection;
