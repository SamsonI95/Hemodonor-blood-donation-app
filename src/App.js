import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';

function App() {
  return (
     <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact Component={Home} />
        </Routes>
        <Footer />
      </Router>
     </>
  );
}

export default App;
