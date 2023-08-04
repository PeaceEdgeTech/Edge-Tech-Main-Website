import React from 'react'
import Main from './components/Main'
import About from './components/About'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import Services from './components/Services'
import VM from './components/VM'
import Contact from './components/Contact'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <div className="App">
      <Main />
      <About />
      <Skills />
      <VM/>
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <div className='border border-lg w-full border-blue-600'></div>
      <Footer />
    </div>
  );
}

export default App;
