import React, { useState } from 'react';
import UserListCommunity from '../components/UserListCommunity';
import ChatBoxCommunity from '../components/ChatBoxCommunity';
import WriteBoxCommunity from '../components/WriteBoxCommunity';
import '../pages/styles/Community.css';

const Community = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'Maggie Smith', avatar: 'https://www.palestineremembered.com/Jerusalem/GeoPoint/Dome_Of_The_Rock-10150.jpg', messages: ['Hey, I’m interested in your work'] },
    { id: 2, name: 'Emma Watson', avatar: 'https://image.made-in-china.com/2f0j00QWagThVImqzc/Birthday-Wedding-Party-Club-Promotion-Gift-Flower-Red-Fresh-Cut-Flower-Rose.jpg', messages: ['I’m a big fan of your art...'] },
    { id: 3, name: 'Alex Johnson', avatar: 'https://img.kooora.com/?i=afp%2F20230829%2F20230829-afp_33tz3kl_afp.jpg', messages: ['i’d like to commission a piece from you'] },
    { id: 4, name: 'Sophia Williams', avatar: 'https://example.com/avatar2.jpg', messages: ['Your art is amazing,keep up the great work!'] },
    { id: 5, name: 'Daniel Miller', avatar: 'https://example.com/avatar2.jpg', messages: ['i’m a collector and i’d like to discuss purchasing your'] },

  ]);

  const [activeUserId, setActiveUserId] = useState(null);

  const handleUserClick = (userId) => {
    setActiveUserId(userId);
  };

  const handleSendMessage = (message) => {
    if (activeUserId !== null) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === activeUserId
            ? { 
                ...user, 
                messages: [...user.messages, { text: message, isUserMessage: true }] 
              }
            : user
        )
      );
    }
  };

  const activeUser = users.find((user) => user.id === activeUserId);
  const activeMessages = activeUser ? activeUser.messages : [];

  return (
<div className="community">
<div className="CommBody">
      <UserListCommunity users={users} onUserClick={handleUserClick} />
      <div className="main-content">
        <ChatBoxCommunity activeUser={activeUser} messages={activeMessages} />
        <WriteBoxCommunity activeUser={activeUser} onSendMessage={handleSendMessage} />
      </div>
    </div>
</div>

  );
};

export default Community;
