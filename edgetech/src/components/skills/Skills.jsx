import React from 'react'
import './skills.css'
import { FaDotCircle } from 'react-icons/fa'


const Skills = () => {
  return (
    <div id="section">
      
      <header>
        <h3>SKILLS</h3>
      </header>
      
      <div className="container__skills">
 
        <div className="skills ">
          <div className="skills__border marquee">
            <article className="front__skill">
              <FaDotCircle className="circle" /> 
              <div className="skill">HTML</div>
            </article>

            <article className="front__skill"> 
              <FaDotCircle className="circle" /> 
              <div className="skill">CSS</div>
            </article>
            
            <article className="front__skill">
              <FaDotCircle className="circle" />
              <div className="skill">BOOTSRAP</div>
            </article>

            <article className="front__skill">
              <FaDotCircle className="circle" />
              <div className="skill"> SASS</div>
            </article>
            
            <article className="front__skill">
              <FaDotCircle className="circle" />
              <div className="skill"> TAILWIND</div>
            </article>
            
            <article className="front__skill">
              <FaDotCircle className="circle" />
              <div className="skill"> JAVASCRIPT</div>
            </article>
          </div>
        </div>

        <div className="skills">
          <div className="skills__border marquee__right">
            <article className="front__skill">
              <FaDotCircle className="circle" /> 
              <div className="skill">PHP</div>
            </article>
            <article className="front__skill">
              <FaDotCircle className="circle" /> 
              <div className="skill">LARAVEL</div>
            </article>
            <article className="front__skill">
              <FaDotCircle className="circle" /> 
              <div className="skill">MongoDB</div>
            </article>
            <article className="front__skill">
              <FaDotCircle className="circle" /> 
              <div className="skill">SQLite</div>
            </article>
            <article className="front__skill">
              <FaDotCircle className="circle" /> 
              <div className="skill">Python</div>
            </article>
            <article className="front__skill">
              <FaDotCircle className="circle" /> 
              <div className="skill">Django</div>
            </article>
          </div>
        </div>
          

      </div>
    </div>
  )
}

export default Skills
