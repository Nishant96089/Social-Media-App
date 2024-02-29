import Postcard from "./Postcard";

const Content = ({ selectedTab }) => {
  return (
    <div className="content">
      <div className="post">
        {selectedTab === "Home" ? (
          <>
            <Postcard></Postcard>
            <Postcard></Postcard>
            <Postcard></Postcard>
            <Postcard></Postcard>
            <Postcard></Postcard>
            <Postcard></Postcard>
            <Postcard></Postcard>
          </>
        ) : (
          <div className="createPost">Create Post</div>
        )}
      </div>

      <div className="suggestions shadow p-3 bg-body-tertiary rounded"></div>
    </div>
  );
};

export default Content;
