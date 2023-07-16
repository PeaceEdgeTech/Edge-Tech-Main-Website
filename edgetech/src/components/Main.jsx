import React from 'react';
import Image1 from '../img/image1.jpg';
import Image2 from '../img/image2.jpg';
import Image3 from '../img/image3.jpg';

const Main = ({ theme }) => {
  return (
    <div id="main" className={`main-container ${theme}`}>
      <div className="background-image"></div>
      <div className="content">
        <h2 className="home-heading">Home</h2>
        <div className="about-section">
          <div className="about-text">
            <h3>About the Company</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut pretium felis a purus dignissim, id bibendum ligula hendrerit.
              Nullam consectetur dolor at augue eleifend, eu vulputate quam condimentum. Donec iaculis tristique erat ut faucibus.
              Aenean interdum eleifend enim non laoreet. Fusce at commodo leo. Duis convallis arcu ac fermentum egestas.
              Morbi scelerisque, elit at auctor tincidunt, mi lectus malesuada sem, id iaculis risus nulla a lectus.
              Proin ullamcorper libero eu enim congue elementum. Sed ac mi at lectus egestas porttitor a sit amet metus.
              Curabitur semper elit nisl, in sagittis lectus bibendum eu.
            </p>
          </div>
          <div className="image-section">
            <div className="image-container">
              <img src={Image1} alt="First person" className="circular-image" />
            </div>
            <div className="image-container">
              <img src={Image2} alt="Second person" className="circular-image" />
            </div>
            <div className="image-container">
              <img src={Image3} alt="third person" className="circular-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
