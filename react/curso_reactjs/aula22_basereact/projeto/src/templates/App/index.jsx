// import P from 'prop-types';
import './styles.css';
import React, { useState, useEffect } from 'react';

const useFetch = (url, options) => {
  console.log('funcionou ', url, options);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  console.log(setResult, setLoading, result, loading);

  useEffect(() => {
    // let wait = false;
    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      try {
        const response = await fetch(url, options);
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
  }, [url, options]);

  return [result, loading];
};

export const App = () => {
  // console.log('setdelay ', setDelay, incrementor, setIncrementor);
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts');
  console.log(useFetch, result, loading);

  if (loading) {
    return <p>LOADING ....</p>;
  }

  if (!loading && result) {
    console.log(result);
  }

  return <h1>oi</h1>;
};
