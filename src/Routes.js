import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import CreateCards from './pages/CreateCards';
import ViewCards from './pages/ViewCards';

function RoutesComponent ({createCard}){
    return(
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/create-cards" element={<CreateCards createCard={createCard}/>}/>
        <Route path="/view-cards" element={<ViewCards />}/>
      </Routes>
    );
}

export default RoutesComponent;