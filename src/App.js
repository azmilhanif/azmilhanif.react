// Created by azmilhanif(hazel)


import React from 'react'
import Navbar from './misc/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';


function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Route path='/' exact />
      </Router>

    </>

  );
}

export default App;

