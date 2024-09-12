import React, { useState, useMemo } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";
import MyInput from "./components/UI/Input/MyInput";


function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "JavaScript", body: "JavaScript - язык программирования" },
    { id: 2, title: "React", body: " AReact - библиотека" },
    { id: 3, title: "HTML", body: "HTML - язык разметки" },
  ]);

  const [posts2, setPosts2] = useState([
    { id: 1, title: "Python", body: "Python - язык программирования" },
    { id: 2, title: "Django", body: "React - framework" },
    { id: 3, title: "SQL", body: "SQL - Язык структурированных запросов" },
  ]);

  // КЛЮЧ ПО КОТОРОМУ БУДЕМ СОРТИРОВАТЬ ПОСТЫ (ПО НАЗВАНИЮ, ПО ОПИСАНИЮ)
  const [selectedSort, setSelectedSort] = useState('');

  // ЗНАЧЕНИЕ ПОЛЯ ИНПУТ ПО КОТОРОМУ БУДЕТ ПРОИСХОДИТЬ ФИЛЬТРАЦИЯ ПОСТОВ 
  const [filteredValue, setFilteredValue] = useState('');

  // СПИСОК ОТСОРТИРОВАННЫХ ПОСТОВ
  const sortedPosts = useMemo(() => {
    console.log("ФУНКЦИЯ СОРТИРУЕТ ПОСТЫ");
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
    }
    return posts
   
  }, [selectedSort, posts]);

  // СПИСОК ОТСОРТИРОВАННЫХ И НАЙДЕННЫХ ПО КЛЮЧЕВОМУ СЛОВУ filteredValue ПОСТЫ
  const searchedAndSortedPosts = useMemo(() => {
    console.log("ФУНКЦИЯ НАХОДИТ ПОСТЫ ПО СЛОВУ");
    return sortedPosts.filter(p =>  p.title.toLowerCase().includes(filteredValue));
  }, [filteredValue, sortedPosts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }

  return (
    <div className="App">
      <PostForm create={createPost}/>
      <hr style={{margin: "15px 0"}}/>
      <MyInput
        type="text"
        placeholder="Поиск"
        value={filteredValue}
        onChange={e => setFilteredValue(e.target.value)}
      />
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
        ? <PostList posts={searchedAndSortedPosts} title="Посты для JS" deletePost={deletePost}/> 
        : <h1 style={{textAlign: "center"}}>Посты не найдены</h1>
      }
     
      <PostList posts={posts2} title="Посты для Python"/>
    </div>
  );
}

export default App;
