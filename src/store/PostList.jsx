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
    id: "3",
    body: "In today's dynamic digital landscape, the role of a Fullstack Web Developer is more crucial than ever. These tech wizards possess a versatile skill set that allows them to handle both front-end and back-end development, making them indispensable in the creation of seamless and responsive web applications.",
    userId: "user-3",
    tags: ["fullstack", "mern", "back-end"],
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1706798000853/04636ca6-6f89-49f1-8233-4aefebcd68de.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: "4",
    body: "Nature is my happy place, and I am never happier than exploring it. You can always explore new in every walk with nature. The world is beautiful, and there's no better way to discover it than through nature. The best adventures are the ones that take you off the beaten path.",
    userId: "user-4",
    tags: ["nature", "mountains", "lifestyle"],
    image:
      "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1380&t=st=1710566331~exp=1710566931~hmac=71c7cd38769acc1dcddb952944830bd80a494c8d559823ab12e3de3982a8d739",
  },
  {
    id: "5",
    body: "Choose healthy habits and let them become your everyday routine.Invest in your health today for a brighter and stronger tomorrow.",
    userId: "user-5",
    tags: ["health", "lifestyle", "stayfit"],
    image:
      "https://img.freepik.com/free-photo/attractive-young-woman-her-trainer-running-treadmill-gym_496169-2730.jpg?t=st=1710566545~exp=1710570145~hmac=14b6eb01ebac23739eb490d3f303b1bb79319def15f6e47f596e31647faf7adf&w=1060",
  },
  {
    id: "1",
    body: "In this dynamic era of web design, these trends are not just about aesthetics; they are about crafting experiences that resonate with users, making the digital journey both visually stunning and functionally seamless. As we ride the waves of innovation, these trends are shaping the web into a more engaging and user-centric space.",
    userId: "user-1",
    tags: ["github", "contributing", "networking"],
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1706942339340/8309462d-71a9-41f8-bb4c-07bd7abd1a1e.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
  {
    id: "2",
    body: "GitHub contributions are a networking goldmine. Engaging with like-minded developers, participating in discussions, and sharing insights within the community can lead to valuable connections, mentorship opportunities, and even job offers.",
    userId: "user-2",
    tags: ["design", "UI/UX", "front-end"],
    image:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1706945695211/653a5e89-197b-406f-b328-f23593858ee2.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  },
];

export default PostlistProvider;
