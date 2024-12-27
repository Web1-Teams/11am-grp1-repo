import React from 'react';
import prof from '../images/prof.jpg'; 
import back from '../images/back.jpg';
import '../pages/styles/ProfileHeader2.css'; 
import FollowButton from '../components/FollowButton'; 

const ProfileHeader = () => {
  return (
    <div className="middle-top"> {/* Wrapper for the top section of the profile */}
      
      {/* Container for profile and background images */}
      <div className="profile-container">
        <img src={prof} alt="Profile" className="profiles" /> {/* Profile picture */}
        <img src={back} alt="Background" className="back" /> {/* Background image */}
      </div>

      {/* Section for displaying user details like name, posts, followers, and interactions */}
      <div className="profile-details">
        <p className="status"> {/* Status section containing name, posts, followers, and action buttons */}
          <span><b>Sara Qadi</b></span> {/* Displaying the user's name */}
          <br />
          <br />
          <span><strong>11</strong> Posts</span> {/* Number of posts */}
          {" | "}
          <span><strong>1050</strong> Followers</span> {/* Number of followers */}
          
          <FollowButton /> {/* Follow button that handles follow/unfollow functionality */}
          
          <i className="fa fa-commenting"></i> {/* Icon for commenting */}
        </p>

        {/* Textarea to display or edit the user's bio */}
        <textarea
          className="bio"
          rows="7" // Number of visible rows for the textarea
          cols="65" // Number of visible columns for the textarea
          defaultValue={ // Default value for the bio text
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
