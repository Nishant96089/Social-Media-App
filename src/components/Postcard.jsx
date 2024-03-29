import React, { useState } from "react";
import { FcComments } from "react-icons/fc";
import { BsFillShareFill } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";

const Postcard = ({ post }) => {
  const [showComments, setShowComments] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([]);
  const [showSharePopup, setShowSharePopup] = useState(false);

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

  const toggleSharePopup = () => {
    setShowSharePopup(!showSharePopup);
  };

  return (
    <div
      className="post-card card shadow bg-body-tertiary rounded mb-4 p-3"
      style={{ width: "95%" }}
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
          aria-label="Toggle comments"
        />
        <BsFillShareFill
          className="share-btn"
          onClick={toggleSharePopup}
          aria-label="Share post"
        />
        {showSharePopup && (
          <div className="social-buttons p-2 d-flex flex-row justify-evenly">
            <a
              href="http://www.facebook.com"
              target="_blank"
              className="social-margin me-4 social"
            >
              <div className="social-icon facebook">
                <FaFacebook />
              </div>
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="social-margin me-4"
            >
              <div className="social-icon instagram">
                <FaInstagramSquare />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              className="social-margin me-4"
            >
              <div className="social-icon linkedin">
                <IoLogoLinkedin />
              </div>
            </a>
            <a
              href="https://twitter.com/?lang=en"
              target="_blank"
              className="social-margin me-2"
            >
              <div className="social-icon twitter">
                <BsTwitterX />
              </div>
            </a>
          </div>
        )}
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
        {post.tags.map((item, index) => (
          <span
            key={index}
            className="badge shadow p-3 bg-body-tertiary rounded tags"
          >
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
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleAddComment();
                  }
                }}
                aria-label="Add a comment"
              />
              <button
                className="btn btn-outline-primary comment-button"
                type="button"
                onClick={handleAddComment}
                aria-label="Add comment"
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
