import { useContext, useState } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";
import WelcomeMessage from "./WelcomeMessage";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);

  // Automatic posts load from server DummyJSON when visit Home
  const [dataFetched, setDataFetched] = useState(false);

  if (!dataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetched(true);
  }

  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((getPost) => (
        <Post key={getPost.id} post={getPost} />
      ))}
    </>
  );
}

export default PostList;
