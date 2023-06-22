import React, { useState } from 'react';
import Comment from '../Comment/CommentList';
// import './CommentList.scss';

const CommentBox = () => {
  const [commentList, setCommentList] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentSubmit = e => {
    // 1. 어떤 feed인지 알아야 함 (인자로 받는다)
    // 2. 해당 feed의 commentsList 배열에 해당 리뷰를 추가한 형태로 setFeeds
    e.preventDefault();
    if (newComment.trim() === '') {
      return;
    }

    setCommentList([...commentList, newComment]);
    setNewComment('');
  };

  const newCommentInput = event => setNewComment(event.target.value);

  return (
    <>
      <div className="commentsBox">
        <ul>
          {commentList.map((newComment, index) => (
            <Comment newComment={newComment} key={index} />
          ))}
        </ul>
      </div>

      <form className="commentPost" onSubmit={handleCommentSubmit}>
        <input
          required
          type="text"
          placeholder="댓글 달기..."
          className="inputText"
          value={newComment}
          onChange={newCommentInput}
        />
        <button type="submit" className="submitBtn">
          게시
        </button>
      </form>
    </>
  );
};

export default CommentBox;
