import Postcard from "./Postcard";
import Createpost from "./Createpost";
import { PostList } from "../store/PostList";
import { useContext } from "react";

const Content = ({ selectedTab }) => {
  const { postlist, addMorePosts } = useContext(PostList);

  const getPosts = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addMorePosts(data.posts);
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
            <div
              onClick={getPosts}
              className="btn shadow bg-body-tertiary rounded mb-2 getPosts"
            >
              More Posts
            </div>
          </>
        )}
        {selectedTab === "Create Post" && (
          <div className="createPost shadow bg-body-tertiary rounded p-4">
            <Createpost />
          </div>
        )}
      </div>

      <div className="suggestions">
        <div className="suggest shadow bg-body-tertiary rounded p-3">
          <h5 className="suggest-for-u">Suggestion For You</h5>
          <div className="suggestion-list">
            <div class="sugg-people d-flex flex-row">
              <div class="s-left">
                <img
                  src="/Social-Media-App-Frontend/static/media/img-1.1c6d468b21e2e7823da2.jpg"
                  alt=""
                />
                <h6>Elon Musk</h6>
              </div>
              <div class="s-right">
                <button className="follow">Follow</button>
              </div>
            </div>
            <div class="sugg-people d-flex flex-row">
              <div class="s-left">
                <img
                  src="/Social-Media-App-Frontend/static/media/img-1.1c6d468b21e2e7823da2.jpg"
                  alt=""
                />
                <h6>Jeff Bezos</h6>
              </div>
              <div class="s-right">
                <button className="follow">Follow</button>
              </div>
            </div>
            <div class="sugg-people d-flex flex-row">
              <div class="s-left">
                <img
                  src="/Social-Media-App-Frontend/static/media/img-1.1c6d468b21e2e7823da2.jpg"
                  alt=""
                />
                <h6>Mukesh Ambani</h6>
              </div>
              <div class="s-right">
                <button className="follow">Follow</button>
              </div>
            </div>
          </div>
        </div>
        <div className="online shadow bg-body-tertiary rounded"></div>
      </div>
    </div>
  );
};

export default Content;
