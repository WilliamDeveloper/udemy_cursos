import { useState } from 'react';
export const Home2 = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4]);
  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };
  return (
    <p>
      <button onClick={handleClick}>{counted.slice(-1)}</button>
      <div style={{ height: '100px', width: '100px', overflowY: 'scroll' }}>
        {counted.map((c) => {
          return <p key={`c-${c}`}>{c}</p>;
        })}
      </div>
    </p>
  );
};
