import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([]);
  console.log('pai renderizou!');

  //component did mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.json())
      .then((r) => setPosts(r));
  }, []);

  return (
    <div className="App">
      <h1>Oi</h1>
      {posts.map((post) => {
        div.
      })}
    </div>
  );
}

export default App;
