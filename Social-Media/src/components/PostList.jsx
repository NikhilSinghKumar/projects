import { useContext } from "react";
import { PostList as PostListData } from "../store/post-list-store";
import Post from "./Post";

function PostList() {
  const { postList } = useContext(PostListData);
  return (
    <>
      {postList.map((getPost) => (
        <Post key={getPost.id} post={getPost} />
      ))}
    </>
  );
}

export default PostList;
