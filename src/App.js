import React from "react";
import './styles/App.css';
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import PostItem from "./components/PostItem";

function App() {
  return (
    <div className="App">
      {/* <Counter/>
      <ClassCounter/> */}
      <PostItem/>
      <PostItem/>
      <PostItem/>
    </div>
  );
}

export default App;
