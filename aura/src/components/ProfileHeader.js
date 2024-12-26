import React from 'react';
import prof from '../images/prof.jpg'; 
import back from '../images/back.jpg'; 
import '../pages/styles/ProfileHeader.css';

const ProfileHeader = () => {
  return (
    <div className="middle-top"> {/* Wrapper for the top section of the profile */}
      
      {/* Container for profile and background images */}
      <div className="profile-container">
        <img src={prof} alt="Profile" className="profiles" /> {/* Profile picture */}
        <img src={back} alt="Background" className="back" /> {/* Background image */}
      </div>

      {/* Section for displaying user details and bio */}
      <div className="profile-details">
        <p className="status"> {/* Status section containing name, posts, followers, and actions */}
          <span><b>Sara Qadi</b></span> {/* User's name */}
          <br />
          <br />
          <span><strong>15</strong> Posts</span> {/* Number of posts */}
          {" | "}
          <span><strong>350</strong> Followers</span> {/* Number of followers */}
          <button 
            id="editProfileButton" 
            className="edit-profile-btn"
          >
            Edit Profile {/* Button for editing profile */}
          </button>
          <i className="fa fa-gear"></i> {/* Settings icon */}
        </p>

        {/* Textarea for editing or displaying the user's bio */}
        <textarea
          className="bio"
          rows="7"
          cols="65"
          defaultValue={
            `Hi, I’m Sara Qadi, a passionate painter with a love for capturing the beauty of the world through color and texture. 
            My journey with art began in childhood, where I found joy in sketching the simplest moments around me. 
            Over the years, I’ve honed my skills in oil paintings, blending traditional techniques with my unique vision. ✨`
          }
        ></textarea>
      </div>
    </div>
  );
};

export default ProfileHeader;
