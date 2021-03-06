import './App.css';
import React, { useReducer } from 'react';

const globalState = {
  title: 'o titulo do contexto',
  body: 'o body do contexto',
  counter: 0,
};

const reducer = (state, action) => {
  console.log(action);
  const { title } = state;
  const reverse = title.split('').reverse().join('');
  switch (action.type) {
    case 'muda':
      return { ...state, title: 'mudou' + action.payload };
    case 'inverter':
      return { ...state, title: reverse };
  }
  return { ...state };
};

function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  console.log(dispatch);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <p>{body}</p>
      <button onClick={() => dispatch({ type: 'muda', payload: new Date() })}>muda</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>inverter</button>
    </div>
  );
}

export default App;
