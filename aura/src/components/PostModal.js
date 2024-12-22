import React, { useState } from 'react';
import '../pages/styles/PostModal.css';

const PostModal = ({ post, onClose }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([
    { user: 'User1', text: 'Beautiful painting!' },
    { user: 'User2', text: 'Love the colors. Amazing work!' }
  ]);
  const [newComment, setNewComment] = useState('');
  const [liked, setLiked] = useState(false); 

  const handleLike = () => {
    if (liked) {
      setLikeCount(0); 
    } else {
      setLikeCount(1); 
    }
    setLiked(!liked); 
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handlePostComment = () => {
    if (newComment.trim()) {
      setComments([...comments, { user: 'Current User', text: newComment }]);
      setNewComment('');
    }
  };

  if (!post) {
    return null; 
  }

  return (
    <div className="modal-content-wrappers">

      <div className="modal-image1">
        <img src={post.img} alt={`Painting - ${post.title}`} />
      </div>

      <div className="modal-comments">
        <div id="modalTitle">{post.title}</div>
        <div id="modalCaption">{post.description}</div>

        <div className="like-section">
          <button 
            id="likeButton" 
            className="like-button"
            onClick={handleLike}
          >
            <i 
              className={`fa fa-heart ${liked ? 'liked' : ''}`} 
              id="likeIcon"
            ></i>
          </button>
          <span id="likeCount">{likeCount}</span> Likes
        </div>

        <div id="commentsContainer">
          {comments.map((comment, index) => (
            <p key={index}><strong>{comment.user}:</strong> {comment.text}</p>
          ))}
        </div>

        <textarea
          id="commentInput"
          value={newComment}
          placeholder="Add a comment..."
          onChange={handleCommentChange}
        />
        <button id="postComment" onClick={handlePostComment}>
          Post Comment
        </button>
      </div>

      <span className="close" onClick={onClose}>&times;</span>
    </div>
  );
};

export default PostModal;
