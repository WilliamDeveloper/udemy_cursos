// import P from 'prop-types';
import './App.css';
import React, { useEffect, useState, useRef } from 'react';

const useMyHook = (cb, delay = 1000) => {
  const saveCb = useRef();
  useEffect(() => {
    saveCb.current = cb;
  }, [cb]);
  useEffect(() => {
    const interval = setInterval(() => {
      saveCb.current();
    }, delay);
    // console.log('interval ', interval);
    return () => clearInterval(interval);
  }, []);
};

function App() {
  const [counter, setCounter] = useState(0);

  useMyHook(() => {
    setCounter((c) => c + 1);
  });

  return (
    <div>
      <h1>oi {counter}</h1>
    </div>
  );
}

export default App;
