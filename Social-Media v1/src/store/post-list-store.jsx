/* eslint-disable react/prop-types */
import {
  createContext,
  useCallback,
  useReducer,
  useEffect,
  useState,
} from "react";

export const PostList = createContext({
  postList: [],
  fetching: false,
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
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
}

export default function PostListProvider({ children }) {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  function addPost(post) {
    console.log("post adding");
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
    console.log("post added");
  }

  function addInitialPosts(posts) {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: { posts: posts },
    });
  }

  const postDelete = useCallback(
    function deletePost(postId) {
      dispatchPostList({
        type: "DELETE_POST",
        payload: {
          postId: postId,
        },
      });
    },
    [dispatchPostList]
  );

  useEffect(() => {
    setFetching(true);
    // useEffect optimization
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <PostList.Provider
      value={{
        postList: postList,
        fetching: fetching,
        addPost: addPost,
        deletePost: postDelete,
      }}
    >
      {children}
    </PostList.Provider>
  );
}
