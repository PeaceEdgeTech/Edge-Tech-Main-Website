import React from 'react';
import Image1 from '../img/image1.jpg';
import Image2 from '../img/image2.jpg';
import Image3 from '../img/image3.jpg';

const Main = ({ theme }) => {
  return (
    <div id="home" className={`main-container ${theme}`}>
      <div className="flex flex-col items-center">
        <h2 className="text-4xl text-blue-800">Home</h2>
          
          <div className="flex">
            Not sure what is meant to be here sir <br/> Prof Prince Peace Sir
            <div className="">
              <img src={Image1} alt="First person" className="circular-image" />
            </div>
            <div className="">
              <img src={Image2} alt="Second person" className="circular-image" />
            </div>
            <div className="">
              <img src={Image3} alt="third person" className="circular-image" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Main;
