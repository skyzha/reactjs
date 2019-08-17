import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './component/Header'
import MainContent from './component/MainContent'
import Footer from './component/Footer'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  )
}
export default App;