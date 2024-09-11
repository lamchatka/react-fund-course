import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/Button/MyButton";
import MyInput from "./components/UI/Input/MyInput";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript - язык программирования" },
    { id: 2, title: "React", body: "React - библиотека" },
    { id: 3, title: "HTML", body: "HTML - язык разметки" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python", body: "Python - язык программирования" },
    { id: 2, title: "Django", body: "React - framework" },
    { id: 3, title: "SQL", body: "SQL - Язык структурированных запросов" },
  ]);

  const [post, setPost] = useState({title: '', body: ''});


  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}] );
    setPost({title: '', body: ''});
  }
   
  return (
    <div className="App">
      <form>
        {/* {Управляемый компонент } */}
        <MyInput 
          type="text" 
          placeholder="Название поста" 
          value={ post.title } 
          onChange={e => setPost({...post, title: e.target.value})}
        />
        {/* Неуправляемый/неконтролируемый компонент (была раньше) */}
        <MyInput 
          type="text" 
          placeholder="Описание поста"
          value={ post.body } 
          onChange={e => setPost({...post, body: e.target.value})}

        />
        <MyButton onClick={ addNewPost }>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты для JS"/>
      <PostList posts={posts2} title="Посты для Python"/>
    </div>
  );
}

export default App;
