import React from 'react'
import './portfolio.css'
import audi from '../../img/Audi.jpg'

const Portfolio = () => {
  return (
    <div id="section section__height">
      <div className="portfolio__container">
        <header>
          <h3>PORTFOLIO</h3>
        </header>

        <div className="projects">


          <div className="projects-container">
            
            <div className="project-container">
              {/* ====CHANGE THIS ALT OOHH===== */}
                <img src= {audi} alt="one of my old cars" className="project__img"/>
                <div className="project-tools">
                  <p>Tools:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
                </div>
            </div>

              <div className="project-container">
                <img src= {audi} alt="one of my old cars" className="project__img"/>
                <div className="project-tools">
                  <p>Tools:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>

              <div className="project-container">
                <img src= {audi} alt="one of my old cars" className="project__img"/>
                <div className="project-tools">
                  <p>Tools:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>

              <div className="project-container">
                <img src= {audi} alt="one of my old cars" className="project__img"/>
                <div className="project-tools">
                  <p>Tools:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>
              
              <div className="project-container">
                <img src= {audi} alt="one of my old cars" className="project__img"/>
                <div className="project-tools">
                  <p>Tools:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>

              <div className="project-container">
                <img src= {audi} alt="one of my old cars" className="project__img"/>
                <div className="project-tools">
                  <p>Tools:</p>
                  <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Bootstrap</li>
                    <li>PHP</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>
            </div>


        </div>
      </div>
    </div>
  )
}

export default Portfolio
