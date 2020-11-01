import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import MainForm from './components/Spotlight'
import SecondForm from './components/Secondlight';
import MiddleHeader from './components/Secondlight/middleHeader';
import Navbar from './components/Navbar';
import TopHeader from './components/Navbar/TopHeader';
import Gameboard from './components/Gameboard';
import Footer from './components/Otherstuff';
import HomePage from './components/Home';

function App() {
  return (
    <Router> 
      <div className="app">
        <Navbar/>
        <TopHeader/>
        <Switch>
          <Route path="/" exact component={HomePage}/>
          <Route path="/nivaer" component={MainForm}/>
          <Route path="/personas" component={SecondForm}/>
          <Route path="/poangtavlan" component={Gameboard}/>
        </Switch>
        <MiddleHeader/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
