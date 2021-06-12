import P from 'prop-types';
import { useState, useEffect } from 'react';
import './App.css';

const Post = (post) => {
  return (
    <div key={post.id} className="post">
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};
Post.propTypes = {
  post: P.shape({
    id: P.number,
    title: P.string,
    body: P.string,
  }),
};

function App() {
  const [posts, setPosts] = useState([]);
  console.log('pai renderizou!');

  //component did mount
  useEffect(() => {
    setTimeout(function () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 5000);
  }, []);

  return (
    <div className="App">
      <h1>Oi</h1>
      {posts.length > 0 &&
        posts.map((post) => {
          <Post key={post.id} post={post} />;
        })}

      {posts.length <= 0 && <p>Ainda nao existem posts. </p>}
    </div>
  );
}

export default App;
