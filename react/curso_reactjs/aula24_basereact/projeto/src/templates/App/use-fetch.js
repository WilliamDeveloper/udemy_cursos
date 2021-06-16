import { useEffect, useRef, useState } from 'react';

const isObjectEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

export const useFetch = (url, options) => {
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
    let wait = false;
    const controller = new AbortController();
    const signal = controller.signal;

    console.log('effect', new Date().toLocaleString());
    console.log(optionsRef.current.headers);
    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 3000));

      try {
        const response = await fetch(urlRef.current, { ...optionsRef.current, signal });
        const jsonResult = await response.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (e) {
        if (!wait) {
          setLoading(false);
        }
        // throw e;
        console.warn(e);
      }
    };
    fetchData();

    return () => {
      wait = true;
      controller.abort();
    };
    // console.log('fetchData ', fetchData);
  }, [shouldLoad]);

  return [result, loading];
};
