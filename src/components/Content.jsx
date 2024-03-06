import Postcard from "./Postcard";
import { PostList } from "../store/PostList";
import { useContext } from "react";

const Content = ({ selectedTab }) => {
  const { postlist } = useContext(PostList);
  return (
    <div className="content">
      <div className="post">
        {selectedTab === "Home" && (
          <>
            {postlist.map((post) => (
              <Postcard key={post.id} post={post} />
            ))}
          </>
        )}
        {selectedTab === "Create Post" && (
          <div className="createPost">Create Post</div>
        )}
      </div>

      <div className="suggestions shadow p-3 bg-body-tertiary rounded"></div>
    </div>
  );
};

export default Content;
