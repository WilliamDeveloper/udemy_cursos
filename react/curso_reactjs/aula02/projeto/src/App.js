import logo from './logo.svg';
import './App.css';
import  {Component} from 'react'

class App extends Component{


  state = {
    name: 'William',
    count : 0
  }

  // constructor(props){
  //   super(props);
  //
  //   this.state = {
  //     name: 'William',
  //     count : 0
  //   }
  //
  //
  //   this.handlePClick = this.handlePClick.bind(this)
  //
  // }

  handlePClick =(event)=>{
    console.log("<p> clicado ")

    this.setState({name : 'will_IAM'})
  }

  // handlePClick(){
  //   console.log("<p> clicado ")
  //
  //   this.setState({name : 'will_IAM'})
  // }

  handleAClick = (event) =>{
    event.preventDefault()
    let {count} = this.state
    this.setState({count : count + 1})
  }

  render() {
    const {name, count} = this.state
    return (
        <>
                 <div className="App">
                   <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                     <p onClick={this.handlePClick}>
                       {1+2} <br/>
                       {'1+2'} <br/>
                       Edit <code>src/App.js</code> and save to reload.
                       <br/>{name} {count}
                     </p>
                     <a
                       className="App-link"
                       href="https://reactjs.org"
                       target="_blank"
                       rel="noopener noreferrer"
                       onClick={this.handleAClick}
                     >
                       <br/>
                       Learn React
                     </a>
                   </header>
                 </div>
                 <p>irmao do app usando o fragment</p>
        </>
    )
  }


}


// function App() {
//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {1+2} <br/>
//             {'1+2'} <br/>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//       <p>irmao do app usando o fragment</p>
//     </>
//   );
// }

export default App;
