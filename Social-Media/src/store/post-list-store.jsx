/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

function postListReducer(currentPostList, action) {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  }
  return newPostList;
}

export default function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  function addPost(userId, postTitle, postBody, reactions, tags) {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  }

  function deletePost(postId) {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId: postId,
      },
    });
  }

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
}

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going Mumbai",
    body: "Friends I am going Mumbai for vacation.",
    reactions: 20,
    userId: "ankit1",
    tags: ["Trip", "Mumbai", "Vacations"],
  },
  {
    id: "2",
    title: "Meeting PM Tomorrow",
    body: "Friends my meeting scheduled with PM Modi tomorrow.",
    reactions: 123420,
    userId: "nikhil",
    tags: ["Modi", "meet"],
  },
  {
    id: "3",
    title: "1 crore subscribers",
    body: "Hi with your support and god's grace, I crossed the benchmark.",
    reactions: 210,
    userId: "rohit1",
    tags: ["Subscribers", "YouTube", "1 Crore"],
  },
];
