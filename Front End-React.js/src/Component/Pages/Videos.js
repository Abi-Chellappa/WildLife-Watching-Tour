import React from 'react'
import './Video.css';
import Sidebar from '../Bar/Sidebar';
import ReactPlayer from 'react-player/lazy'
export default function Videos() {
  return (
    <div>
       <Sidebar/>
     
       <div className='videofull'>
       <ReactPlayer className='react-player'
        controls={true}
        playsinline={false}
         url='https://www.youtube.com/watch?v=5kozt0uDa4c'
         width='100%'
         height='90vh'
         
       />
     </div> 
    </div>
  )
}
