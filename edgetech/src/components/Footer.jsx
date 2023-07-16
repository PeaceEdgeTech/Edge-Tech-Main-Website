import React from 'react'
import './footer.css'
import  { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineFacebook } from 'react-icons/ai'

const Footer = () => {
  return (
    <div id="" className="footer__container">
        <div className="footer__list text-white">
          <div className="res1__col">
            <article className="about">
              <h3>About</h3>
              <p className="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores cupiditate iste ullam esse maxime dolorem cumque quas et. Esse, veniam?
              </p>
            </article>

            <article className="skilled">
              <h3>Skills</h3>
              <p className="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores cupiditate iste ullam esse maxime dolorem cumque quas et. Esse, veniam?
              </p>
            </article>

            <article className="services">
              <h3>Services</h3>
              <p className="content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores cupiditate iste ullam esse maxime dolorem cumque quas et. Esse, veniam?
              </p>
            </article>
          </div>

          {/* <div className="res2__col"> */}
            <article className="contacts text-white">
              <p>+234 816 684 6226</p>
              <p>Ouremail@gmail.com</p>

              <p>Address: all around the web</p>
              <div className="socials">
                <AiOutlineInstagram  className="social"/>
                <AiOutlineLinkedin className="social"/>
                <AiFillGithub className='social' />
                <AiOutlineTwitter className='social'/>
                <AiOutlineFacebook className="social" href=''/>
              </div>
          </article>
          {/* </div> */}
        </div>

        <article className="copyright">
          Copyright © 2023 DummyTech Solutions. All rights reserved.
          <div className="others mt-0">
            <p>Privacy policy</p>
            <p>Terms of use</p>
          </div>
        </article>
    </div>
  )
}

export default Footer
