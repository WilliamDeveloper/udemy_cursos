import logo from './logo.svg';
import './App.css';
// import { Component } from 'react';
import { useState } from 'react';

function App() {
  const [reverse, setReverse] = useState(false);
  const reverseClass = reverse ? 'App-logo-reverse' : '';

  const handleReverse = () => {
    setReverse(!reverse);
  };

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
        <button type="button" onClick={handleReverse}>
          Reverse {reverseClass}
        </button>
      </header>
    </div>
  );
}

// class App extends Component {
//   // constructor(props) {
//   //   super(props);
//   //
//   //   this.handleReverse = this.handleReverse.bind(this);
//   //
//   //   this.state = {
//   //     reverse: true,
//   //   };
//   // }
//
//   state = {
//     reverse: true,
//   };
//
//   handleReverse =()=> {
//     const { reverse } = this.state;
//     this.setState({ reverse: !reverse });
//   };
//
//   render() {
//     const { reverse } = this.state;
//     const reverseClass = reverse ? 'App-logo-reverse' : '';
//
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className={`App-logo ${reverseClass}`} alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
//             Learn React
//           </a>
//           <button type="button" onClick={this.handleReverse}>
//             Reverse {reverseClass}
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
