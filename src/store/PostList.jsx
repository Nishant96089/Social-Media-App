import { createContext, useReducer } from "react";

export const PostList = createContext({
  postlist: [],
  addPost: () => {},
  addMorePosts: () => {},
});

const postlistReducer = (currList, action) => {
  let newPostList = currList;
  if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currList];
  } else if (action.type === "ADD_MORE_POSTS") {
    newPostList = [...currList, ...action.payload.posts];
  }
  return newPostList;
};

const PostlistProvider = ({ children }) => {
  const [postlist, dispatchpostList] = useReducer(
    postlistReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (postBody, tags, img) => {
    dispatchpostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        body: postBody,
        userId: "nishant.dev",
        tags: tags,
        image: img,
      },
    });
  };
  const addMorePosts = (posts) => {
    dispatchpostList({
      type: "ADD_MORE_POSTS",
      payload: {
        posts,
      },
    });
  };

  return (
    <PostList.Provider value={{ postlist, addPost, addMorePosts }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    body: "GitHub contributions are a networking goldmine. Engaging with like-minded developers, participating in discussions, and sharing insights within the community can lead to valuable connections, mentorship opportunities, and even job offers.",
    userId: "user-1",
    tags: ["github", "contributing", "networking"],
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1706942339340/8309462d-71a9-41f8-bb4c-07bd7abd1a1e.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: "2",
    body: "In this dynamic era of web design, these trends are not just about aesthetics; they are about crafting experiences that resonate with users, making the digital journey both visually stunning and functionally seamless. As we ride the waves of innovation, these trends are shaping the web into a more engaging and user-centric space.",
    userId: "user-2",
    tags: ["design", "UI/UX", "front-end"],
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1706945695211/653a5e89-197b-406f-b328-f23593858ee2.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
];

export default PostlistProvider;
