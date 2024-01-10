import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import PrivacyStatement from './Pages/PrivacyStatementPage';
import TermsPage from './Pages/TermsPage';

function App() {
  return (
     <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/home" exact Component={Home} />
          <Route path="/terms" Component={TermsPage} />
          <Route path="/privacy" Component={PrivacyStatement} />
        </Routes>
        <Footer />
      </Router>
     </>
  );
}

export default App;
