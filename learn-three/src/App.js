import React from 'react';
import logo from './logo.svg';
import './style.css';
import Header from './component/header';
import Content from './component/content';
import Footer from './component/footer';

const App = () => {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
