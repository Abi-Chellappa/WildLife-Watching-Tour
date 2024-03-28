import React, { useState } from 'react'
import email_icon from '../Assets/mail.png'
import password_icon from '../Assets/password.png'

import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate} from "react-router-dom";
import Sidebar from '../Bar/Sidebar';
import { login } from '../../Redux/userSlice';
import { useDispatch } from 'react-redux';

export default function Login() 
{
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState(''); 
    const dispatch =useDispatch();
    const navigate=useNavigate();
    
    const formHolder =(e) =>{
        e.preventDefault();
     
    if(username.length==0 && username.length==0)
    {
      alert("Enter emailid and password")
    }
    else if(username.length===0)
    {
      alert("Enter Emailid")
    }
    else if(password.length===0)
    {
      alert("Enter Password");
    }
    else if(username && password) {
      dispatch(login(username));
      navigate("/");
    }
   
       
    }
  return (
    <div className='wildlogin'> 
         
    <Sidebar/>
   
    <div className='form06'>
    <form onSubmit={formHolder}>
   
    <h1>Login</h1>
    
    <div className='email'>
    <input type='text' value={username}  placeholder='Enter your UserName' onChange={(e)=>setUsername(e.target.value)} required/><br/>
    <img src={email_icon} className="email_icon" alt=""/>
    </div>
    
        <div className='password'>
          
        <input type='password' value={password}  placeholder='Enter your Password' onChange={(e)=>setPassword(e.target.value)} required></input><br/>
          <img src={password_icon} className="password_icon" alt=""/>
          </div>
          
          <p className='forgot06'>Forgot password?</p>
          <button type='submit' className='logbut06'>Login</button>
          <p className='or06'>Don't have an Acount?  <Link to="/register">Register here</Link></p>
         
         
        
          
         </form>
          
         </div>
         
        
          
     
    </div>
  )
}
