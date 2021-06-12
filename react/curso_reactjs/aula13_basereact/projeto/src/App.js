import P from 'prop-types';
import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect, useCallback, useMemo } from 'react';

const eventFn = () => {
  console.log('h1 clicado');
};

const Button = ({ handleIncrement }) => {
  return (
    <button type="button" onClick={handleIncrement}>
      +
    </button>
  );
};

Button.propTypes = {
  handleIncrement: P.func,
};

function App() {
  const [reverse, setReverse] = useState(false);
  const [counter, setCounter] = useState(0);
  const reverseClass = reverse ? 'App-logo-reverse' : '';

  //componentDidUpdate - excecuta toda vez q o componente atualiza
  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //componentDidmount - excecuta 1x
  useEffect(() => {
    console.log('componentDidmount');
  }, []);

  //com dependencia - excecuta toda vez q a depedencia mudar
  useEffect(() => {
    console.log('contador mudou para ', counter);
  }, [counter]);

  //componentDidmount
  useEffect(() => {
    document.querySelector('h1')?.addEventListener('click', eventFn);

    //componentWillAmount
    return () => {
      console.log('componentWillAmount');
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, [counter]);

  const handleReverse = () => {
    setReverse((reverseA) => !reverseA);
  };
  const handleIncrement = useCallback(() => {
    setCounter((counterA) => counterA + 1);
  }, []);
  const btn = useMemo(() => {
    return <Button handleIncrement={handleIncrement} />;
  }, [handleIncrement]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <h1>Contador : {counter}</h1>
        <p>
          <button type="button" onClick={handleReverse}>
            Reverse {reverseClass}
          </button>
        </p>
        <p>{btn}</p>
      </header>
    </div>
  );
}

export default App;
