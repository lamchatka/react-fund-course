import React, { useState, useMemo } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import PostForm from "./components/PostForm";
import MyButton from "./components/UI/Button/MyButton";


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

  // КЛЮЧ ПО КОТОРОМУ БУДЕМ СОРТИРОВАТЬ ПОСТЫ (ПО НАЗВАНИЮ, ПО ОПИСАНИЮ) И ЗНАЧЕНИЕ ПОЛЯ ИНПУТ ПО КОТОРОМУ БУДЕТ ПРОИСХОДИТЬ ФИЛЬТРАЦИЯ ПОСТОВ 
  const [filter, setFilter] = useState({sort: "", searchQuery: ""});

  // СПИСОК ОТСОРТИРОВАННЫХ ПОСТОВ
  const sortedPosts = useMemo(() => {
    console.log("ФУНКЦИЯ СОРТИРУЕТ ПОСТЫ");
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    }
    return posts
   
  }, [filter.sort, posts]);

  // СПИСОК ОТСОРТИРОВАННЫХ И НАЙДЕННЫХ ПО КЛЮЧЕВОМУ СЛОВУ filteredValue ПОСТЫ
  const searchedAndSortedPosts = useMemo(() => {
    console.log("ФУНКЦИЯ НАХОДИТ ПОСТЫ ПО СЛОВУ");
    return sortedPosts.filter(p =>  p.title.toLowerCase().includes(filter.searchQuery));
  }, [filter.searchQuery, sortedPosts]);

  const [visibleModal, setVisibleModal] = useState(false);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisibleModal(false);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyButton style={{marginTop: '15px'}} onClick={() => setVisibleModal(true)}>Создать новый пост</MyButton>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      <PostList posts={searchedAndSortedPosts} title="Посты для JavaScript" deletePost={deletePost}/>
      <PostList posts={posts2} title="Посты для Python"/>
    </div>
  );
}

export default App;
