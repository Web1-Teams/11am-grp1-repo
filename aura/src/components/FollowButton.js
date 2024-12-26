import React, { useState } from 'react';
import '../pages/styles/ProfileHeader.css'; // Importing external CSS for styling

const FollowButton = () => {
  // State to track whether the user is followed or not
  const [isFollowed, setIsFollowed] = useState(false);

  // Toggles the follow state between followed and not followed
  const toggleFollow = () => {
    setIsFollowed((prevState) => !prevState); 
  };

  return (
    <button
      // Dynamically sets the class based on the follow state
      className={`Follow-btn ${isFollowed ? 'followed' : ''}`}
      onClick={toggleFollow} // Changes follow state on button click
    >
      {/* Button text changes depending on the follow state */}
      {isFollowed ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;
