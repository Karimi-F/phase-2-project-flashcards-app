import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Header from '../src/Components/Header';
import RoutesComponent from '../src/Routes';

function App() {

  const [cards,setCards] = React.useState([]);

  function createCard(newCard){
    setCards([...cards,newCard]);
  }

  return (
    <Router>
      <div className='navbar-routes'>
        <NavBar />
        <Header />
        <RoutesComponent createCard={createCard}/>
      </div>
    </Router>
   
  );
}

export default App;
