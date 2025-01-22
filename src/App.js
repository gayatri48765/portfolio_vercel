// App.js
import React from 'react';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home/>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
