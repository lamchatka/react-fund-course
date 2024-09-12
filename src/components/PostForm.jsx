import React, { useState } from "react";
import MyButton from "./UI/Button/MyButton";
import MyInput from "./UI/Input/MyInput";

const PostForm = ({create}) => {
  const [post, setPost] = useState({ title: "", body: "" });
  
  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {...post, id: Date.now()};

    // КАК ДОБАВИТЬ newPost В СПИСОК ВСЕХ ПОСТОВ, КОТОРЫЙ НАХОДИТСЯ В РОДИТЕЛЬСКОМ КОМПОНЕНТЕ?
    create(newPost);
 
    setPost({title: '', body: ''});
  }

  return (
      <form>
        {/* {Управляемый компонент } */}
        <MyInput
          type="text"
          placeholder="Название поста"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        {/* Неуправляемый/неконтролируемый компонент (была раньше) */}
        <MyInput
          type="text"
          placeholder="Описание поста"
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
  );
};

export default PostForm;
