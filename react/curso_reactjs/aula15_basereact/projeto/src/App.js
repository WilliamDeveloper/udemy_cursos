// import P from 'prop-types';
import './App.css';
import React, { useContext, useState } from 'react';
// import { useState, useEffect, useMemo, useRef } from 'react';

const globalState = {
  title: 'o titulo do contexto',
  body: 'o body do contexto',
  counter: 0,
};

const GlobalContext = React.createContext();

// eslint-disable-next-line
const Div = ({childen}) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

// eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const { contextState } = theContext;
  return <h1>{contextState.title}</h1>;
};
// eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  console.log(theContext);
  const { contextState } = theContext;
  return <p>{contextState.body}</p>;
};

function App() {
  const [contextState, setContextState] = useState(globalState);

  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}

export default App;
