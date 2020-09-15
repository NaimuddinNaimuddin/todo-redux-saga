import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './component/Header'
import Todos from './pages/Todos'


function App() {

  return (
    <div className="App">
      <Header />
      <Todos />
    </div>
  )
}

export default App;
