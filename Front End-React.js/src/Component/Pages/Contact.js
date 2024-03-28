import React from 'react'
import './Contact.css';
import Sidebar from '../Bar/Sidebar';
import * as Fa6Icons from "react-icons/fa6";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";
import { Link } from 'react-router-dom';
export default function Contact() {
  return (
    <div>
        <Sidebar/>
        <section className='contactt0'>
          <div className='content0'>
             <h1>Contact Us</h1>
          </div>
          <div className='contactdetails'>
             <div className='contactInfo'>
                 
                   <div className='contactbox'>
                     <div className='contacticon'><Fa6Icons.FaLocationDot/></div>
                     <div className='contacttext'>
                       <h3 className='h33'>Address</h3>
                       <p>4671 Sugar camp Road,<br/>Qwatonna,Midfghjk,<br/>456789</p>
                     </div>
                   </div>
                   
                    <div className='contactbox'>
                     <div className='contacticon'><BsIcons.BsFillTelephoneFill/></div>
                     <div className='contacttext'>
                       <h3>Phone</h3>
                       <p>507-475-6094</p>
                     </div>
                   </div>
                    
                   <div className='contactbox'>
                     <div className='contacticon'><AiIcons.AiOutlineMail/></div>
                     <div className='contacttext'>
                       <h3>Email</h3>
                       <p>abcd23@gmail.com</p>
                     </div>
                   </div>
                </div> 
                </div> 
                   <div className='contactform'>
                       <form>
                          <h2>Send Message</h2>
                          <div className='inputbox'>
                             <input type="text" name="" required="required"/>
                             <span>Full Name</span>
                          </div>
                          <div className='inputbox'>
                             <input type="text" name="" required="required"/>
                             <span>Email</span>
                          </div>
                          <div className='inputbox'>
                             <textarea type="text" name="" required="required"/>
                             <span>Type your Message....</span>
                          </div>
                          <div className='inputbox'>
                             <Link to='/'><input type="submit" name="" value="Send"/></Link>
                          </div>

                      
                        </form>
                   </div>
               
              
              </section>
              </div>
  )
}
