import React from 'react'
import audi from "../img/Audi.jpg"

const About = () => {
  return (
    <div id="about" className="flex items-center">
      <div>
        <h3 className="uppercase">about</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique labore harum molestiae, doloremque sed aut cupiditate unde et error esse facere dolorem eum repellendus autem dolores vitae repellat. Quas reiciendis incidunt, molestiae odio ipsum architecto enim dolorem laborum est possimus asperiores aperiam voluptatem, tempore eveniet, expedita error tempora velit illum laudantium esse? Asperiores ad sequi eum, pariatur accusamus perferendis omnis, quas natus quisquam veritatis deleniti, vitae ipsum aspernatur tempore?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus similique labore harum molestiae, doloremque sed aut cupiditate unde et error esse facere dolorem eum repellendus autem dolores vitae repellat. Quas reiciendis incidunt, molestiae odio ipsum architecto enim dolorem laborum est possimus asperiores aperiam voluptatem, tempore eveniet, expedita error tempora velit illum laudantium esse? Asperiores ad sequi eum, pariatur accusamus perferendis omnis, quas natus quisquam veritatis deleniti, vitae ipsum aspernatur tempore?</p>
      </div>
      <div className="p-4 rounded-lg">
        <img src={audi} alt="mmmm" className="rounded-lg" />
      </div>
    </div>
  )
}

export default About
