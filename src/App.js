import React from 'react';
import './App.css';
import MainForm from './components/Spotlight'
import SecondForm from './components/Secondlight';
import MiddleHeader from './components/Secondlight/middleHeader';
import Navbar from './components/Navbar';
import TopHeader from './components/Navbar/TopHeader';
import Footer from './components/Otherstuff';

function App() {
  return (
    <div className="app">
      <Navbar/>
      <TopHeader/>
      <MainForm/>
      <MiddleHeader/>
      <SecondForm/>
      <Footer/>
    </div>
  );
}

export default App;
