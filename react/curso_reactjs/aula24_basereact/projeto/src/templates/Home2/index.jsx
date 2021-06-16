import { useState, useRef, useEffect } from 'react';
export const Home2 = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const divRef = useRef();
  useEffect(() => {
    console.log(divRef.current);
    divRef.current.scrollTop = divRef.current.scrollHeight;
  });
  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };
  return (
    <p>
      <button onClick={handleClick}>{counted.slice(-1)}</button>
      <div ref={divRef} style={{ height: '100px', width: '100px', overflowY: 'scroll' }}>
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>;
        })}
      </div>
    </p>
  );
};
