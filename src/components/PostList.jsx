import React from "react";
import PostItem from "./PostItem";

function PostList({posts, title, deletePost}) {
   
  {/* Условная отрисовка */}
  if (!posts.length) {
    return (
      <h1 style={{textAlign: "center"}}>
        Посты не найдены
      </h1>
    );
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      {posts.map((p, index) => (
        <PostItem number={index + 1} post={p} key={p.id} deletePost={deletePost}/>
      ))}
    </div>
  );
}

export default PostList;
