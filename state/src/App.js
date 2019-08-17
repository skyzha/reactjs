import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       name: "Sally",
//       age: 13
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//         <h1>{this.state.age} years old</h1>
//       </div>
//     )
//   }
// }

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false
    }
  }

  render() {
    let wordDisplay
    if (this.state.isLoggedIn) {
      wordDisplay = 'in'
    } else {
      wordDisplay = 'out'
    }

    return (
      <div>
        <h1>You are currently logged {wordDisplay}</h1>
      </div>
    )
  }
}

export default App;
