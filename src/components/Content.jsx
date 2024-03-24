import Createpost from "./Createpost";
import Suggestions from "./Suggestions";
import Online from "./Online";
import PostListdata from "./PostListdata";
import { Outlet } from "react-router-dom";

const Content = ({ selectedTab }) => {
  return (
    <div className="content">
      <div className="post">
        {/* {selectedTab === "Home" && <PostListdata />}
        {selectedTab === "Create Post" && <Createpost />} */}
        <Outlet />
      </div>

      <div className="suggestions">
        <Suggestions />
        <Online />
      </div>
    </div>
  );
};

export default Content;
