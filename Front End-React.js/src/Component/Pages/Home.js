import React from 'react'
import Sidebar from '../Bar/Sidebar';
import './Home.css';
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../../Redux/userSlice';

export default function Home() {
  const user = useSelector(selectUser);
  const username = user.user && user.user.username ? user.user.username : 'Guest';
  return (
    <div>
    <Sidebar/>
    <section className='home' id="home">
         <div className='content'>
           
         <h3>enjoy the wonderful<br/>
         adventures of the <br/> animals</h3>
         <button className='buthome'><Link to='/login'>Explore</Link></button>
        
         <div className='user1'>
          welcom {username}
         </div>
        </div>
       
   
    </section>
   
    <section id="sellers" className='forestfull'>
    <div className="seller container">
      
      <h2>FAMOUS FOREST</h2>
      <div className="best-seller">
        
        <div className="best-p1">
          <img src="https://images.pexels.com/photos/931007/pexels-photo-931007.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>The Amazon Rainforest is primarily located in South America.</p>
            </div>
          </div>
        </div>
        
        <div className="best-p1">
          <img src="https://i.pinimg.com/564x/e0/ca/51/e0ca5146d8d3744fc8658c7d4b5e461a.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Białowieża Forest located in Eastern Europe.</p>
            </div>
          </div>
        </div>
        
        <div className="best-p1">
          <img src="https://i.pinimg.com/564x/75/14/a0/7514a093943621a9fd59f1b131a5deff.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Ancient forests are shaped by natural processes like fire</p>
            </div>
          </div>
        </div>
        
        <div className="best-p1">
          <img src="https://i.pinimg.com/564x/b3/9d/eb/b39deb68f383be65ace293cca43d4438.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Tongass National Forest is the largest forest in the United States</p>
            </div>
          </div>
        </div>
       

      
        </div>
      
    </div>
  </section>
   
  <section id='animell' className='animelconful'>
  
  
  <div className='animelcontainer'>
    

           <div className='animel-img'>
           <img src='https://i.pinimg.com/564x/a0/df/dd/a0dfdd2a7bfd8babf2f4769697e7329e.jpg'  alt='Lion'/>
           <div className='intro'>
              <h1>Lion</h1>
              <p>The <span>Lion</span>are big cats that live in Africa.Lions like to eat animals like zebras and buffaloes.
              lions are in danger in some places because their homes are disappearing.</p>
           </div>
           </div>
           
           <div className='animel-img'>
           <img src='https://i.pinimg.com/564x/90/d6/85/90d685d90e03bb04888ab3a8aa55773f.jpg' alt='Lion'/>
           <div className='intro'>
              <h1>Elephants</h1>
              <p>An<span> Elephants</span>is a very big and strong animal that lives in places like Africa and Asia. 
              It's known for its long trunk, big ears, and large body.Elephants are usually gray in color.</p>
           </div>
           </div>
           
           <div className='animel-img'>
           <img src='https://i.pinimg.com/236x/90/6a/3f/906a3f7b2b22b62ad4a9c057214eae25.jpg'  alt='Lion'/>
           <div className='intro'>
              <h1>Tiger</h1>
              <p>A<span> Tiger</span>is a big and powerful cat with orange fur and black stripes.Tigers live in Asia and are often found in forests and grasslands.
              Tigers are great hunters and eat animals.</p>
           </div>
           </div>
     
      </div>
      
  
  </section>
    

    <div className='footfull'>
    <footer>
   
        <div className='footer-col'>
          <h4>Quick Links</h4>
          <ul>
              <li><Link to='/pp'><span className='fp'>Privacy policy</span></Link></li>
              <li><Link to='/tc'><span className='fp'>Terms and Condition</span></Link></li>
              <li><Link to='/feedback'><span className='fp'>Feed Back</span></Link></li>
              <li><Link to='/faq'><span className='fp'>FAQ</span></Link></li>
             
          </ul>
        </div>
        <div className='footer-col'>
          <h4>Project</h4>
          <ul>
              <li><Link to='/place'>place</Link></li>
              <li><Link to='/animel'>Animels</Link></li>
              <li><Link to='/video'>Videos</Link></li>
              <li><Link to='/image'>Images</Link></li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4>Company</h4>
          <ul>
              <li><Link to='/about'>About Us</Link></li>
              <li><Link to='/contactus'>Contact Us</Link></li>
          </ul>
        </div>
        <div className='footer-col'>
          <h4>Follow Us</h4>
          <div className='sociellink'>
             <Link to='https://www.facebook.com/profile.php?id=100093687843994'><span className='sicon'><AiIcons.AiFillFacebook/></span></Link>
             <Link to='https://www.instagram.com/'><span className='sicon'><BsIcons.BsInstagram/></span></Link>
             <Link to='https://www.linkedin.com/in/abi-chellappa-193837256/'><span className='sicon'><AiIcons.AiOutlineLinkedin/></span></Link>
             <Link to='https://twitter.com/'><span className='sicon'><BsIcons.BsTwitter/></span></Link>
          </div>
        </div>
    </footer>
    </div>
    </div>
  )
}
