import { PostList } from "../store/PostList";
import { useContext, useState } from "react";
import Postcard from "./Postcard";
import Loader from "./Loader";

const PostListdata = () => {
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
  );
};

export default PostListdata;
