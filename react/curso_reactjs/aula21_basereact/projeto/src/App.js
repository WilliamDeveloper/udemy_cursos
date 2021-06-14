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
  }, [delay]);
};

function App() {
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(1000);
  const [incrementor, setIncrementor] = useState(100);
  console.log('setdelay ', setDelay, incrementor, setIncrementor);

  useMyHook(() => {
    setCounter((c) => c + 1);
  }, delay);

  return (
    <div>
      <h1>oi {counter}</h1>
      <button>delay {delay} </button>
      <button
        onClick={() => {
          setDelay((d) => d + incrementor);
        }}
      >
        + {incrementor}{' '}
      </button>
      <button
        onClick={() => {
          setDelay((d) => d - incrementor);
        }}
      >
        - {incrementor}{' '}
      </button>
      <input
        type="number"
        value={incrementor}
        onChange={(e) => {
          setIncrementor(Number(e.target.value));
        }}
      />
    </div>
  );
}

export default App;
