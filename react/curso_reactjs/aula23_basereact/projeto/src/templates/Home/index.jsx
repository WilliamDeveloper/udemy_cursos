import { useState, useEffect, useCallback } from 'react';

const useAsync = (asyncFunction, shouldRun) => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  const run = useCallback(() => {
    console.log('pending ', new Date().toLocaleString());
    setResult(null);
    setError(null);
    setStatus('pending');

    asyncFunction()
      .then((response) => {
        setStatus('settled');
        setResult(response);
      })
      .catch((error) => {
        setStatus('error');
        setError(error);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (shouldRun) {
      run();
    }
  }, [run, shouldRun]);
  return [run, result, error, status];
};

const fetchData = async () => {
  await new Promise((r) => setTimeout(r, 2 * 1000));
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  // setPosts(json);
  return json;
};

export const Home = () => {
  // const [posts, setPosts] = useState(null);
  // console.log(setPosts);
  const [reFetchData, result, error, status] = useAsync(fetchData, true);
  console.log(reFetchData, result, error, status);

  useEffect(() => {
    // const url = 'https://jsonplaceholder.typicode.com/posts';
    reFetchData();
  }, [reFetchData]);
  // return <pre>oi {JSON.stringify(result, null, 2)}</pre>;
  if (status === 'idle') {
    return <pre>nada executando</pre>;
  }
  if (status === 'pending') {
    return <pre>loading ...</pre>;
  }
  if (status === 'error') {
    return <pre>oi {JSON.stringify(result, null, 2)}</pre>;
  }
  if (status === 'settled') {
    return <pre>oi {JSON.stringify(result, null, 2)}</pre>;
  }

  return <pre>ixi</pre>;
};
