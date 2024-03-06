import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  deletePost: () => {},
});

const postlistReducer = (currList, action) => {
  return currList;
};

const PostlistProvider = ({ children }) => {
  const [postlist, dispatchpostList] = useReducer(
    postlistReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {};

  return (
    <PostList.Provider value={{ postlist, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "The Power of Contributing on GitHub",
    body: "GitHub contributions are a networking goldmine. Engaging with like-minded developers, participating in discussions, and sharing insights within the community can lead to valuable connections, mentorship opportunities, and even job offers.",
    reactions: "6",
    userId: "user-1",
    tags: ["github", "contributing", "networking"],
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1706942339340/8309462d-71a9-41f8-bb4c-07bd7abd1a1e.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: "2",
    title: "2024 Web Design Trends",
    body: "In this dynamic era of web design, these trends are not just about aesthetics; they are about crafting experiences that resonate with users, making the digital journey both visually stunning and functionally seamless. As we ride the waves of innovation, these trends are shaping the web into a more engaging and user-centric space.",
    reactions: "10",
    userId: "user-2",
    tags: ["design", "UI/UX", "front-end"],
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1706945695211/653a5e89-197b-406f-b328-f23593858ee2.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
];

export default PostlistProvider;
