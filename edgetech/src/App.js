import React from 'react'
import Nav from './components/nav/Nav'
import Main from './components/main/Main'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'


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
