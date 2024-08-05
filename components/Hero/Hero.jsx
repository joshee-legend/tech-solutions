import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div id='home' className="hero">
        <img src={profile_img} alt="" />
        <h1><span>My name is Josh lee,</span> Full stack developer in Kenya</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam totam ducimus eligendi, fuga provident, libero maiores quas quae cumque ex ullam quasi voluptatibus, facere error adipisci iure aspernatur modi non?</p>

        <div className="hero-action">

        <div  className="hero-connect">Connect with me</div>
        <div  className="hero-resume">My resume</div>

        </div>

       
     
    

    </div>
  )
}

export default Hero