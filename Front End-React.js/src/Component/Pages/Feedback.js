import React from 'react'
import Sidebar from '../Bar/Sidebar';
import './Feedback.css';
import { Link } from 'react-router-dom';

export default function () {
  return (
    <div>
       <Sidebar/>
       <div className='feedfull'>
         
           <div className='feedform'>
            <form>
              <div className='formhead'><h1> Wildlife Watching Tour Feedback Form</h1></div>
              <label>1. Name</label>
              <input type='text' placeholder='Enter your UserName'required/><br/>
              <label>2. Email</label>
              <input type='email' placeholder='Enter your Eamil Address'required/><br/>
              <label>3. On a scale of 1 to 5, how would you rate your overall experience with our website, with 1 being very dissatisfied and 5 being very satisfied?</label>
               
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>1</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>2</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>3</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>4</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>5</label>
              </div>

              <label>4. What do you like most about our website?</label>
               <div className='textinput'>
                             <textarea type="text" name="" required="required" placeholder='Type your Message....'></textarea>
                            
                </div>
              <label>5. What improvements or changes would you suggest to make our website more user-friendly or helpful?</label>
               <div className='textinput'>
                             <textarea type="text" name="" required="required" placeholder='Type your Message....'></textarea>
                            
                </div>
                <label>6. Would you recommend our website to others?</label>
                <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>Yes</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>No</label>
              </div>
              <div className='check'>
               <input type='checkbox' className='checkinput'/>
                 <label className='checklabel'>May be</label>
              </div>

              <label>7. Do you have any additional comments or suggestions for us?</label>
              <div className='textinput'>
              <textarea type="text" name="" required="required" placeholder='Type your Message....'></textarea>
              </div>
            <Link to='/'><div className='buttonform'>
              <input type='submit'/>
            </div></Link>
              </form>
            </div>
       </div>
    </div>
  )
}
