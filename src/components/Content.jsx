import Postcard from "./Postcard";
import Createpost from "./Createpost";
import { PostList } from "../store/PostList";
import { useContext, useState } from "react";
import Suggestions from "./Suggestions";
import Online from "./Online";
import Loader from "./Loader";

const Content = ({ selectedTab }) => {
  const { postlist, addMorePosts } = useContext(PostList);
  const [fetching, setFetching] = useState(false);

  const getPosts = () => {
    setFetching(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addMorePosts(data.posts);
        setFetching(false);
      });
  };

  return (
    <div className="content">
      <div className="post">
        {selectedTab === "Home" && (
          <>
            {postlist.map((post) => (
              <Postcard key={post.id} post={post} />
            ))}
            {fetching && <Loader />}
            {!fetching && (
              <div
                onClick={getPosts}
                className="btn shadow bg-body-tertiary rounded mb-2 getPosts"
              >
                More Posts
              </div>
            )}
          </>
        )}
        {selectedTab === "Create Post" && (
          <div className="createPost shadow bg-body-tertiary rounded p-4">
            <Createpost />
          </div>
        )}
      </div>

      <div className="suggestions">
        <Suggestions />
        <Online />
      </div>
    </div>
  );
};

export default Content;
