import React from 'react';
import './Main.scss';

const Comment = ({ comment, onDelete }) => {
  return (
    <li key={comment.id} className="commentItem">
      <span className="commentText">{comment.text}</span>
      <button className="commentDelteBtn" onClick={() => onDelete(comment.id)}>
        x
      </button>
    </li>
  );
};

export default Comment;
