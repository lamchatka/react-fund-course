import React from "react";
import PostItem from "./PostItem";

function PostList({posts, title}) {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((p, index) => (
        <PostItem number={index + 1} post={p} key={p.id} />
      ))}
    </div>
  );
}

export default PostList;
