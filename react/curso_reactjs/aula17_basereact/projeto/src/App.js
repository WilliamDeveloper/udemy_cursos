import './App.css';
import React from 'react';
import { Div } from './components/Div';
import { AppContext } from './contexts/App';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
