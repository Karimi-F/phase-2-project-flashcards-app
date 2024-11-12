import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import CreateCards from './pages/CreateCards';
import ViewCards from './pages/ViewCards';

function App() {
  return (
    <Router>
      <div className='navbar-routes'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/create-cards" element={<CreateCards />}/>
          <Route path="/view-cards" element={<ViewCards />}/>
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
