import logo from './logo.svg';
import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Header from '../src/Components/Header';
import RoutesComponent from '../src/Routes';

function App() {

  const[cards,setCards] = React.useState([]);
  const[loading,setLoading] = React.useState(true);
  const[error,setError] = React.useState(null);

  useEffect(() => {
    setLoading(true);

 fetch("http://localhost:5000/words")   
 .then((response)=>{
    if (!response.ok){
        throw new Error ("Failed to fetch data");
    } return response.json()
 })
 .then(data => {
    setCards(data);
    setLoading(false);
 })
 .catch(error => {
    setError(error.message);
    setLoading(false);
 });
},[]);

  function createCard(newCard){
    setCards([...cards,newCard]);
  }

  return (
    <Router>
      <div className='navbar-routes'>
        <NavBar />
        <Header />
        <RoutesComponent 
        createCard={createCard} 
        cards={cards}
        loading={loading}
        error={error}
        />
      </div>
    </Router>
   
  );
}

export default App;
