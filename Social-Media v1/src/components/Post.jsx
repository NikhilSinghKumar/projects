/* eslint-disable react/prop-types */
import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import { IoEye } from "react-icons/io5";
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";

function Post({ post }) {
  const { deletePost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <MdDelete />
          <span className="visually-hidden">Delete Post</span>
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span className="badge text-bg-primary hashtag" key={tag}>
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          <span className="reactions-icons">
            <BiSolidLike /> {post.reactions.likes}{" "}
          </span>{" "}
          <span className="reactions-icons">
            <BiSolidDislike /> {post.reactions.dislikes}
          </span>{" "}
          <span className="reactions-icons">
            <IoEye /> {post.views}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
