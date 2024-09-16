import React, { useState, useEffect } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/Modal/MyModal";
import PostForm from "./components/PostForm";
import MyButton from "./components/UI/Button/MyButton";
import { useSearchedAndSortedPosts } from "./components/hooks/usePosts";
import PostService from "./API/PostService";
import MyLoader from "./components/UI/Loader/MyLoader";
import { useFetching } from "./components/hooks/useFetching";


function App() {
  const [posts, setPosts] = useState([]);

  // КЛЮЧ ПО КОТОРОМУ БУДЕМ СОРТИРОВАТЬ ПОСТЫ (ПО НАЗВАНИЮ, ПО ОПИСАНИЮ) И ЗНАЧЕНИЕ ПОЛЯ ИНПУТ ПО КОТОРОМУ БУДЕТ ПРОИСХОДИТЬ ФИЛЬТРАЦИЯ ПОСТОВ 
  const [filter, setFilter] = useState({sort: "", searchQuery: ""});

  const [visibleModal, setVisibleModal] = useState(false);
  
  // СОСТОЯНИЕ ЗАГРУЗКИ ПОСТОВ 
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async() => {
    const posts = await PostService.getAll();
    setPosts(posts);
 })

  // КАСТОМНЫЙ ХУК useSearchedAndSortedPosts
  const searchedAndSortedPosts = useSearchedAndSortedPosts(posts, filter.sort, filter.searchQuery);


  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setVisibleModal(false);
  }

  const deletePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  useEffect(() => {
    fetchPosts();
  }, [])
 
  return (
    <div className="App">
      <MyButton style={{marginTop: '15px'}} onClick={() => setVisibleModal(true)}>Создать новый пост</MyButton>
      <MyModal visible={visibleModal} setVisible={setVisibleModal}>
        <PostForm create={createPost}/>
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postsError &&
        <h1>Произошла ошибка ${postsError} </h1>
      }
      { isPostsLoading 
      ? <MyLoader/>
      : <PostList posts={searchedAndSortedPosts} title="Посты для JavaScript" deletePost={deletePost}/>
      }
    </div>
  );
}

export default App;
