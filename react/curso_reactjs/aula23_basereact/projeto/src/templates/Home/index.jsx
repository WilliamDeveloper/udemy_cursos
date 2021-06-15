import { useState, useEffect } from 'react';
export const Home = () => {
  const [posts, setPosts] = useState(null);
  console.log(setPosts);

  useEffect(() => {
    const fetchData = async (url) => {
      const data = await fetch(url);
      const json = await data.json();
      setPosts(json);
      return json;
    };
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetchData(url);
  }, []);
  return <p>oi {JSON.stringify(posts)}</p>;
};
