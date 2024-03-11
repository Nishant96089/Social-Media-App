import { useContext, useRef, useState } from "react";
import { FaShareFromSquare } from "react-icons/fa6";
import { MdOutlinePermMedia } from "react-icons/md";
import { PostList } from "../store/PostList";

const Createpost = () => {
  const { addPost } = useContext(PostList);

  const userId = useRef();
  const bodyData = useRef();
  const tagsData = useRef();
  const fileInputRef = useRef();

  const [selectedImage, setSelectedImage] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    const postBody = bodyData.current.value;
    const tags = tagsData.current.value.split(" ");
    const img = selectedImage;

    addPost(postBody, tags, img);

    // Reset form fields
    bodyData.current.value = "";
    tagsData.current.value = "";
    fileInputRef.current.value = "";
    setSelectedImage(null);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <form className="create-post-form" onSubmit={handleSubmit}>
      <h3 className="form-heading mb-4">Create Post 🪶</h3>
      <div className="mb-3">
        <label htmlFor="input-body" className="form-label"></label>
        <textarea
          className="input-body"
          id="input-body"
          placeholder="What do you want to talk about ?"
          ref={bodyData}
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
          ref={tagsData}
        ></textarea>
      </div>

      <div className="add-media">
        <label htmlFor="file-upload" className="custom-file-input">
          <MdOutlinePermMedia className="media-img" />
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleImageChange}
        />
      </div>

      {selectedImage && (
        <img src={selectedImage} alt="Selected" className="selected-image" />
      )}

      <button className="post-btn" type="submit">
        Share <FaShareFromSquare className="share-icon" />
      </button>
    </form>
  );
};

export default Createpost;
