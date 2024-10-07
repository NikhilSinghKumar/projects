import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);

  // posts load from server DummyJSON when Get POST button clicked

  function handleGetPostsClick() {
    return fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        console.log({ data });
      });
  }

  return (
    <>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostsClick={handleGetPostsClick} />
      )}
      {postList.map((getPost) => (
        <Post key={getPost.id} post={getPost} />
      ))}
    </>
  );
}

export default PostList;
