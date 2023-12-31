import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import NavBar from './Components/NavBar';

function App() {
  return (
     <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
      </Router>
     </>
  );
}

export default App;
