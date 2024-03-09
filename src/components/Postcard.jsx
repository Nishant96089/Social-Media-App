import { FcComments } from "react-icons/fc";
import { BsFillShareFill } from "react-icons/bs";

const Postcard = ({ post }) => {
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
        <FcComments className="comment-btn" />
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
          <span class="badge shadow p-3 bg-body-tertiary rounded tags">
            #{item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Postcard;
