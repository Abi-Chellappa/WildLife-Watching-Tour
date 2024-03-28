import React, { useEffect } from 'react';
import Sidebar from '../Bar/Sidebar';
import './Place.css';
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';


export default function Place() {
  
  useEffect(() => {
    const handleNextClick = () => {
      const items = document.querySelectorAll('.placeitem');
      const slide = document.querySelector('.placeslide');
      slide.appendChild(items[0]);
    };

    const handlePrevClick = () => {
      const items = document.querySelectorAll('.placeitem');
      const slide = document.querySelector('.placeslide');
      slide.prepend(items[items.length - 1]);
    };

    // Attach event listeners to your React component's buttons
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    nextButton.addEventListener('click', handleNextClick);
    prevButton.addEventListener('click', handlePrevClick);

    // Clean up event listeners when the component unmounts
    return () => {
      nextButton.removeEventListener('click', handleNextClick);
      prevButton.removeEventListener('click', handlePrevClick);
    };
  }, []);
  return (
    <div>
    
    <Sidebar/>
    <div className='placebody'>
       <div className='placecontainer'>
          
          <div className='placeslide'>
            
             <div className='placeitem' style={{ backgroundImage: 'url(https://getwallpapers.com/wallpaper/full/7/7/a/1074550-enchanted-forest-background-2880x1620-for-android.jpg)' }}>
               <div className='placecontent'>
                  <div className='placehead'>Kaimoor Wildlife Sanctuary</div>
                  <div className='placedes'> Kaimoor Wildlife Sanctuary is located in the Mirzapur district of Uttar Pradesh and covers an area of approximately 500 square kilometers. 
                  It is home to species like leopards, sloth bears, and various bird species.</div>
                  <button>See <Link to='/animel'>animals</Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
                  </div>
              </div>
             <div className='placeitem' style={{ backgroundImage: 'url(https://wallpapers.com/images/featured/forest-o8tny79q1njt8ahw.jpg)' }}>
               <div className='placecontent'>
                  <div className='placehead'>Ranipur Wildlife Sanctuary</div>
                  <div className='placedes'>The Ranipur Wildlife Sanctuary is located in the  Banda district of the northern Indian state of Uttar Pradesh.
                  The exact area of Ranipur Wildlife Sanctuary can vary, but it covers approximately 230 square kilometers.
                  This sanctuary is home to species like chinkara.</div>
                  <button>See <Link to='/animel'>animals</Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
                  </div>
              </div>
             <div className='placeitem' style={{ backgroundImage: 'url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/frautumn_forest_tree_park-image-kybeadnq.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=8dc964de6ecbebca184ac5194b4162f0)' }}>
               <div className='placecontent'>
                  <div className='placehead'>Dudhwa <br/>National Park</div>
                  <div className='placedes'>Dudhwa National Park is situated in the Lakhimpur-Kheri district of Uttar Pradesh. It covers an area of approximately 490 square kilometers. 
                  This park is renowned for its population of tigers, Indian rhinoceros, and swamp deer </div>
                  <button>See <Link to='/animel'>animals</Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
                  </div>
              </div>
              <div className='placeitem' style={{ backgroundImage: 'url(https://img2.wallspic.com/previews/2/5/4/4452/4452-nature_reserve-mountains-wilderness-sky-nature-x750.jpg)' }}>
              <div className='placecontent'>
              <div className='placehead'>Riverine <br/>Forests</div>
              <div className='placedes'>Riverine Forests is located in the Uttar Pradesh.
              The state has riverine forests along the banks of major rivers like the Ganges and Yamuna.
              These forests are adapted to periodic flooding and support unique ecosystems.</div>
              <button>See <Link to='/animel'>animals</Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
              </div>
              </div>
              <div className='placeitem' style={{ backgroundImage: 'url(https://a-static.besthdwallpaper.com/beautiful-forest-landscape-wallpaper-1680x1260-11537_24.jpg)' }}>
              <div className='placecontent'>
              <div className='placehead'>Chuka Wildlife Sanctuary</div>
              <div className='placedes'>Chuka Wildlife Sanctuary is located in the Sonbhadra district of Uttar Pradesh.
              These area Approximately 50 square kilometers.
              Chuka Wildlife Sanctuary is known for its lush forests and diverse wildlife, including leopards, sloth bears, sambar deer, and a variety of avian species.</div>
              <button>See <Link to='/animel'><span className='ani'>animals</span></Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
              </div>
              </div>
              <div className='placeitem' style={{ backgroundImage: 'url(https://4kwallpapers.com/images/wallpapers/forest-sunlight-tree-branches-path-fallen-leaves-woods-4480x2520-3516.jpg)' }}>
               <div className='placecontent'>
                  <div className='placehead'>Jim Corbett National Park</div>
                  <div className='placedes'>Jim Corbett National Park spans across Uttarakhand and Uttar Pradesh and is named after the famous British hunter and conservationist Jim Corbett.
                  The park is known for its tiger population and is a popular destination for wildlife enthusiasts and tourists.
                  </div>
                  <button>See <Link to='/animel'>animals</Link> <Link to='/image'>images</Link> <Link to='/video'>videos</Link></button>
                </div>
              </div>

          </div>
            
          <div className='buttonswipe'>
              <button className='prev'><AiIcons.AiOutlineArrowLeft/></button>
              <button className='next'><AiIcons.AiOutlineArrowRight/></button>
          </div>
        </div>
          
          </div>
    </div>
  )
}
