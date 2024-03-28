import React, { useState } from 'react'
import './Register.css';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Sidebar from '../Bar/Sidebar';

export default function () {
  const[email,setEmail]=useState('');
    const[password,setPassword]=useState(''); 
    const[firstname,setFirstName]=useState(''); 
    const[lastname,setLastName]=useState(''); 
    const[date,setDate]=useState('');
    const[country,setCountry]=useState('');
    const navigate=useNavigate();
     
    const formHolder =(e) =>{
      e.preventDefault();
   
  if(email.length===0 && password.length===0 && firstname.length===0 && lastname.length===0 && country.length===0)
  {
    alert("Enter All the fields")
  }
  else
  {
    navigate("/login")
  }
     
  }

    
  return (
    <div className='reg'>
        <Sidebar/>
         <div className='rectangle071'>
         
         </div>
         <div className='rectangle072'>
             <p>Registration</p>
             <form onSubmit={formHolder}>
                <label>FirstName&nbsp;&nbsp;&nbsp;</label>
                <input type='text' placeholder='Enter your firstname' value={firstname}  onChange={(e)=>setFirstName(e.target.value)} required></input><br/>
                
                <label>LastName &nbsp;&nbsp;&nbsp;</label>
                <input type='text' placeholder='Enter your lastname' value={lastname}  onChange={(e)=>setLastName(e.target.value)} required></input><br/>
                
                <label className='email07'>Email &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='email' placeholder='Enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)} required></input><br/>
                
                <label>Password&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input type='password' placeholder='Enter your password' value={password}  onChange={(e)=>setPassword(e.target.value)} required></input><br/>
                
               <label className='date07'>Date of Birth</label>
               <input type='date' value={date}  onChange={(e)=>setDate(e.target.value)} required></input><br/>
               
               <label>Phone No&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
               <input type='text' placeholder='Enter your PhoneNo' value={country}  onChange={(e)=>setCountry(e.target.value)} required></input><br/>

              <button type='submit' className='sub07'>SUBMIT</button>
              <Link to='/'><button  className='can07'>CANCEL</button></Link>
              </form>
         </div>
    </div>
  )
}
