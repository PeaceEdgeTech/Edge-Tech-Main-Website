import React from 'react'
import Nav from './components/Nav'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
      <About />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
