import { useMemo } from "react";

// КАСТОМНЫЕ ХУКИ

export function useSortedPosts(posts, sort) {
  // СПИСОК ОТСОРТИРОВАННЫХ ПОСТОВ
  const sortedPosts = useMemo(() => {
    console.log("ФУНКЦИЯ СОРТИРУЕТ ПОСТЫ");
    if (sort) {
      return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
  
  return sortedPosts;
}

export function useSearchedAndSortedPosts(posts, sort, searchQuery) {
  // СПИСОК ОТСОРТИРОВАННЫХ И НАЙДЕННЫХ ПО КЛЮЧЕВОМУ СЛОВУ searchQuery ПОСТЫ
  const sortedPosts = useSortedPosts(posts, sort);
  const searchedAndSortedPosts = useMemo(() => {
    console.log("ФУНКЦИЯ НАХОДИТ ПОСТЫ ПО СЛОВУ");
    return sortedPosts.filter(p =>
      p.title.toLowerCase().includes(searchQuery)
    );
  }, [searchQuery, sortedPosts]);

  return searchedAndSortedPosts;
}
