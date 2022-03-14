import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
// import Card from './pages/cards';
// import About from './pages/about';
// import Discover from './pages/discover';
// import Contact from './pages/contact';
// import SignUp from './pages/signup';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        
        {/* <Route path='/' exact element={<Card/>} /> */}
        {/* <Route path='/about' element={<About/>} /> */}
        {/* <Route path='/discover' element={<Discover/>} />
        <Route path='/contact-us' element={<Contact/>} /> */}
        {/* <Route path='/sign-up' element={<SignUp/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
