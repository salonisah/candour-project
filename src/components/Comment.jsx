// components/Comment.js
import React from "react";
const Comment = ({ avatar, author, date, text }) => {
  return (
    <div className="comment">
      <div className="avatar">
        <img src={avatar} alt={author} />
      </div>
      <div className="comment-body">
        <p className="comment-author">{author}</p>
        <p className="comment-date">{date}</p>
        <p className="comment-text content-item-description">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
