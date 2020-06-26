import React from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import LandingPage from './Components/LandingPage';
import { About } from './Components/About';
import Skills from './Components/Skills';
import Certificate from './Components/Certificate';
import Work from './Components/Work';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="bg-light">
      <Navbar />
      <LandingPage />
      <About />
      <Skills />
      <Certificate />
      <Work />
      <Footer />
    </div>
  );
}

export default App;
