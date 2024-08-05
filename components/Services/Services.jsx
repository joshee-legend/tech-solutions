import React from 'react'
import './Services.css'
//import logo from '../../assets/logo.png'

const Services = () => {
  return (
    <div id='services' className="services" >
        <div className="services-title">
            <h1 >My Services</h1>
            
        </div>
        <div className="services-container">

        <div className="services-format">
           
                <h1>service 01</h1>
                <h2>Web Designer</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
               <a href="#"> Read More...</a>
           
 
            </div>
            <div className="services-format">
           
           <h1>services 02</h1>
           <h2>Web Developer</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
           <a href="#"> Read More...</a>
      
   
       </div>
       <div className="services-format">
           
           <h1>service 03</h1>
           <h2>System Designer</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
           <a href="#"> Read More...</a>
       </div>
       <div className="services-format">
           
           <h1>service 04</h1>
           <h2>App Developer</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
               <a href="#"> Read More...</a>
  
       </div>

        </div>

        
   

    </div>
  )
}

export default Services