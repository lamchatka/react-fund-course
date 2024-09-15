import React from "react";
import MyButton from "./UI/Button/MyButton";
import classes from "./PostItem.module.css";

function PostItem(props) {


  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton 
          className={classes.postRemoveBtn}
          onClick={ () => props.deletePost(props.post)}>Удалить</MyButton>
      </div>
    </div>
  );
}

export default PostItem;
