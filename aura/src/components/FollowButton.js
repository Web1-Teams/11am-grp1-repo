import React, { useState } from 'react';
import '../pages/styles/ProfileHeader.css'; // External CSS file for styles

const FollowButton = () => {
  const [isFollowed, setIsFollowed] = useState(false);

  const toggleFollow = () => {
    setIsFollowed((prevState) => !prevState); 
  };

  return (
    <button
      className={`Follow-btn ${isFollowed ? 'followed' : ''}`}
      onClick={toggleFollow}
    >
      {isFollowed ? 'Following' : 'Follow'}
    </button>
  );
};

export default FollowButton;
