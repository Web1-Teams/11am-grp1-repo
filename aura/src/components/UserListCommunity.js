import React, { useState } from 'react';

const users = [
  {
    id: 1,
    name: 'Maggie Smith',
    message: 'Hey, I’m interested in your work',
    time: '1m',
    avatar: 'https://png.pngtree.com/thumb_back/fh260/background/20240403/pngtree-al-aqsa-mosque-jerusalem-image_15647428.jpg'
  },
  {
    id: 2,
    name: 'Emma Watson',
    message: 'I’m a big fan of your art...',
    time: '3m',
    avatar: 'profile.jpg'
  },
  {
    id : 3,
    name:'Alex Johnson',
    message: 'i’d like to commission a piece from you',
    time: '4d',
    avatar: 'profile.jpg'
  },
  {
    id : 4,
    name:'Sophia Williams',
    message: 'Your art is amazing,keep up the great work!',
    time: '1w',
    avatar: 'profile.jpg'
  },
  {
    id : 5,
    name :'Daniel Miller',
    message: 'i’m a collector and i’d like to discuss purchasing your',
    time : '2w',
    avatar: 'profile.jpg'
  },
];

const UserListCommunity = ({ users, onUserClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="sidebar">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search artists"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
      </div>
      <ul className="user-list">
        {filteredUsers.map(user => (
          <li key={user.id} className="user-item" onClick={() => onUserClick(user.id)}>
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <div className="user-details">
              <p className="user-name">{user.name}</p>
              <p className="user-message">{user.message}</p>
              <p className="message-time">{user.time}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserListCommunity;
