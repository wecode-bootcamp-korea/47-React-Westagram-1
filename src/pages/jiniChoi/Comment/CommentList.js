import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Comment = ({ newComment }) => {
  return (
    <li className="commentBox">
      <div className="left">
        <div className="commentId">genie</div>
        <div className="comment">{newComment}</div>
      </div>

      <div className="right">
        <button className="commentRemoveBtn">X</button>
        <button className="commentlikeBtn">
          <FontAwesomeIcon icon={faHeart} className="commentlike" />
        </button>
      </div>
    </li>
  );
};
export default Comment;
