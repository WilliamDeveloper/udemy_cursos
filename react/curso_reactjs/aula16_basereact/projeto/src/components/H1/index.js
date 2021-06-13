import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/App';
// eslint-disable-next-line
export const H1 = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const { contextState } = theContext;
  return (
    <h1>
      {contextState.title} {contextState.counter}
    </h1>
  );
};
