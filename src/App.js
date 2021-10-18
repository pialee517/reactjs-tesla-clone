import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { cars } from './features/car/carSlice'

function App() {
  return (
    <div className='app'>
      <Header />
      <Home />
    </div>
  );
}

export default App;
