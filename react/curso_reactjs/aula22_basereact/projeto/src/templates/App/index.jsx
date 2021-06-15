// import P from 'prop-types';
import './styles.css';
import React, { useState, useEffect } from 'react';
import { useFetch } from './use-fetch';

export const App = () => {
  // console.log('setdelay ', setDelay, incrementor, setIncrementor);
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts' + `/${postId}`, {
    headers: {
      abc: 1234,
    },
  });
  // console.log(useFetch, result, loading, setPostId);

  useEffect(() => {
    console.log('handleClick ', postId);
  }, [postId]);

  if (loading) {
    return <p>LOADING ....</p>;
  }

  const handleClick = (id) => {
    setPostId(id);
  };

  if (!loading && result) {
    //454545454545
    // console.log(result);
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => {
            return (
              <div key={`post-${p.id}`} onClick={() => handleClick(p.id)}>
                <p>{p.title}</p>
              </div>
            );
          })
        ) : (
          <div onClick={() => handleClick('')}>
            <p>{result.title}</p>
          </div>
        )}
      </div>
    );
  }

  return <h1>oi</h1>;
};
