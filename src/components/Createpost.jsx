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
          placeholder="Enter your tags here."
        ></textarea>
      </div>
    </form>
  );
};

export default Createpost;
