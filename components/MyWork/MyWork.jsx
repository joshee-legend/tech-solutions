import React from 'react'
import './MyWork.css'
import mywork from '../../assets/my-work.png'
import mywork1 from '../../assets/my-work-1.png'

const MyWork = () => {
  return (
    <div id='work' className="mywork">
     <div className="mywork-title">
        <h1>My Recent Work</h1>
     </div>
        <div className="mywork-container">
            <img src={mywork} alt="" />

       
            <img src={mywork1} alt="" />

       
      
            <img src={mywork} alt="" />

     
            <img src={mywork} alt="" />

        </div>
        <a href="#">show more...</a>

    </div>
  )
}

export default MyWork