// import P from 'prop-types';
import './styles.css';
import React, { useState, useEffect, useRef } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  console.log('funcionou ', url, options);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);
  // console.log(setResult, setLoading, result, loading, urlRef, optionsRef, setShouldLoad);

  useEffect(() => {
    let changed = false;
    if (!isObjectEqual(url, urlRef.current)) {
      //if (url !== urlRef.current) {
      console.log('urlRef.current ', url);
      urlRef.current = url;
    }
    if (!isObjectEqual(options, optionsRef.current)) {
      //if (url !== urlRef.current) {
      console.log('\noptionsRef.current ', url);
      optionsRef.current = options;
    }
    if (changed) {
      setShouldLoad((s) => !s);
    }
  }, [url, options]);

  useEffect(() => {
    // let wait = false;

    console.log('effect', new Date().toLocaleString());
    console.log(optionsRef.current.headers);
    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      try {
        const response = await fetch(urlRef.current, optionsRef.current);
        const jsonResult = await response.json();
        setResult(jsonResult);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        throw e;
      }
    };
    fetchData();
    // console.log('fetchData ', fetchData);
  }, [shouldLoad]);

  return [result, loading];
};

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
