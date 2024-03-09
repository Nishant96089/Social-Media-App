import { FaShareFromSquare } from "react-icons/fa6";

const Createpost = () => {
  return (
    <form className="create-post-form">
      <h3 className="form-heading mb-4">Create Post 🪶 </h3>
      <div className="mb-3">
        <label htmlFor="input-body" className="form-label"></label>
        <textarea
          className="input-body"
          id="input-body"
          placeholder="What do you want to talk about ?"
        ></textarea>
      </div>

      <div className="mb-3">
        <label
          htmlFor="input-tag"
          for="input-tag"
          className="placeholder"
        ></label>
        <textarea
          className="input-tag"
          id="input-tag"
          placeholder="Enter tags here with a space"
        ></textarea>
      </div>

      <div className="add-media">
        <input type="file" />
        <button className="post-btn">
          <FaShareFromSquare className="share-icon"/>
        </button>
      </div>
    </form>
  );
};

export default Createpost;
