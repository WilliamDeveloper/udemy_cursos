import P from 'prop-types';
import './App.css';
import React, { useReducer, createContext, useContext } from 'react';

//data.js
export const globalState = {
  title: 'o titulo do contexto',
  body: 'o body do contexto',
  counter: 0,
};

//reducer.js
export const reducer = (state, action) => {
  console.log(action);
  return { ...state };
};

//appcontext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  console.log(state, dispatch);
  return <Context.Provider value={{ state }}>{children}</Context.Provider>;
};
AppContext.propTypes = {
  children: P.node,
};

//h1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  return <h1>{context.state.title}</h1>;
};

//app.jsx
function App() {
  // const [state, dispatch] = useReducer(reducer, globalState);
  // console.log(dispatch);
  // const { counter, title, body } = state;

  return (
    <AppContext>
      <div>
        <h1>oi</h1>
      </div>
    </AppContext>
  );
}

export default App;
