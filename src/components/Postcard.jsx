import React, { useState } from "react";
import { FcComments } from "react-icons/fc";
import { BsFillShareFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

const Postcard = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const handleInputChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div
      className="post-card card shadow bg-body-tertiary rounded mb-4"
      style={{ width: "80%" }}
    >
      <img src={post.image} className="card-img-top" alt="..." />
      <div className="position-relative">
        <img
          width="27"
          height="27"
          src="https://img.icons8.com/color/30/like--v3.png"
          alt="like--v3"
          className="like-btn"
        />
        <FcComments
          className="comment-btn"
          onClick={toggleComments}
          style={{ cursor: "pointer" }}
        />
        <BsFillShareFill className="share-btn"></BsFillShareFill>
      </div>
      <div className="card-body">
        <p className="card-text">{post.body}</p>
        <img
          src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
          alt=""
          width="32"
          height="32"
          className="rounded-circle me-4 user-dp"
        />
        {post.tags.map((item) => (
          <span className="badge shadow p-3 bg-body-tertiary rounded tags">
            #{item}
          </span>
        ))}

        {showComments && (
          <div className="card-footer bg-body-tertiary p-0">
            <div className="input-group mb-3 comment-input">
              <input
                type="text"
                className="form-control"
                placeholder="Add a comment..."
                value={newComment}
                onChange={handleInputChange}
              />
              <button
                className="btn btn-outline-primary comment-button"
                type="button"
                onClick={handleAddComment}
              >
                <FaArrowRight className="add-comment" />
              </button>
            </div>
            <ul className="list-group">
              {comments.map((comment, index) => (
                <li key={index} className="list-group-item">
                  {comment}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Postcard;
