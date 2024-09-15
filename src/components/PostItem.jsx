import React from "react";
import MyButton from "./UI/Button/MyButton";

const PostItem = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className="post">
      <div className="post__content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton
          className="postRemoveBtn"
          onClick={() => props.deletePost(props.post)}
        >
          Удалить
        </MyButton>
      </div>
    </div>
  );
});

export default PostItem;
