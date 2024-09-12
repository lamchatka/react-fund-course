import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";


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

  const [selectedSort, setSelectedSort] = useState('');

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          {value: "title", name: "По названию"},
          {value: "body", name: "По описанию"}
        ]}
        
      />
      {/* Условная отрисовка */}
      {posts.length 
        ? <PostList posts={posts} title="Посты для JS" deletePost={deletePost}/> 
        : <h1 style={{textAlign: "center"}}>Посты не найдены</h1>
      }
     
      <PostList posts={posts2} title="Посты для Python"/>
    </div>
  );
}

export default App;
