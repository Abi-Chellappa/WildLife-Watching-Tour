import React from 'react'
import './Images.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Sidebar from '../Bar/Sidebar';
import contact from './abird.jpg'
import img2 from './img2.jpg'
import img3 from './img3.jpg'
import img4 from './img4.jpg'
export default function Images() {
  return (
    <div>
       <Sidebar/>
       <div className='imagefull'>
       <Carousel className='imageslide'>
          <div className>
           <img src={contact} height="500px" width="200px"/>
          </div>
       <div>
       <img src={img2} height="500px" width="100px"/>
           
          
       </div>
       <div>
       <img src="https://www.creativehut.org/wp-content/uploads/2020/03/best-wildlife-animals-photography-kasina-bhanu-prakash.jpg" height="500px" width="100px"/>
           
          
       </div>
       <div>
           <img src={img4} height="500px" width="100px"/>
           
       </div>
       <div>
       <img src="https://i.insider.com/5fad6c0b355f4100197e5dcc?width=750&format=jpeg&auto=webp" height="500px" width="100px"/>
           
          
       </div>
       <div>
       <img src="https://files.worldwildlife.org/wwfcmsprod/images/African_forest_elephant_forest_animals_story_WW22694/story_full_width/1ur2j7puzw_Medium_WW22694.jpg" height="500px" width="200px"/>
           
          
       </div>
   </Carousel>
       </div>
    </div>
  )
}
