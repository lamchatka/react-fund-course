import React from "react";
import PostItem from "./PostItem";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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
      <TransitionGroup className="posts">
        {posts.map((p, index) => (
          <CSSTransition
            key={p.id}
            timeout={500}
            classNames="post"
        >
            <PostItem number={index + 1} post={p} key={p.id} deletePost={deletePost}/>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}

export default PostList;
