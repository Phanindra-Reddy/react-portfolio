import React from 'react';
import './App.css';

import Home from './Components/Home/Home';
import About from './Components/About/About';
import NavBar from './Components/NavBar/NavBar';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">

      <Home />
      <NavBar />
      <About />
      <Contact />
      <Footer/>

    </div>
  );
}

export default App;
