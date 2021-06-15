// import P from 'prop-types';
import './styles.css';
import React, { useState, useEffect, useRef } from 'react';

const useFetch = (url, options) => {
  console.log('funcionou ', url, options);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const urlRef = useRef(url);
  const optionsRef = useRef(options);
  console.log(setResult, setLoading, result, loading, urlRef, optionsRef);

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
    console.log('fetchData ', fetchData);
  }, []);

  return [result, loading];
};

export const App = () => {
  // console.log('setdelay ', setDelay, incrementor, setIncrementor);
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts', {
    headers: {
      abc: 1234,
    },
  });
  console.log(useFetch, result, loading);

  if (loading) {
    return <p>LOADING ....</p>;
  }

  if (!loading && result) {
    console.log(result);
    return (
      <div>
        {result &&
          result.map((p) => {
            return (
              <div key={`post-{p.id}`}>
                <p>{p.title}</p>
              </div>
            );
          })}
      </div>
    );
  }

  return <h1>oi</h1>;
};
