import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.jpg'
import profile_img from '../../assets/profile_img.jpg'

const About = () => {
  return (
    <div id='about' className="about">

        <div  className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>

        <div className="about-sections">
            <div className="about-left">
                <img src={profile_img} alt="" />
            </div>

            <div  className="about-right">
                <div className="about-para">
                    <p>I am an experienced full stack developer with over two decades eperience</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sint beatae nulla laudantium expedita modi, saepe corrupti autem. Perspiciatis, alias voluptas ipsam harum quas ad qui neque dignissimos iusto? Nobis.</p>

                </div>
                <h2>Front end technology</h2>
                <p>I am an experienced full stack developer with over two decades eperience</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sint beatae nulla laudantium expedita modi, saepe corrupti autem. Perspiciatis, alias voluptas ipsam harum quas ad qui neque dignissimos iusto? Nobis.</p>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}} /></div>
                </div>

                <h2>Back end technology</h2>
                <p>I am an experienced full stack developer with over two decades eperience</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sint beatae nulla laudantium expedita modi, saepe corrupti autem. Perspiciatis, alias voluptas ipsam harum quas ad qui neque dignissimos iusto? Nobis.</p>

                <div className="about-skills">
                    <div className="about-skill"><p>PHP</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>LAVAREL</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>PYTHON</p><hr style={{width:"60%"}} /></div>
                    <div className="about-skill"><p>DJANGO</p><hr style={{width:"50%"}} /></div>
                </div>
                
                <h2>Database technology</h2>
                <p>I am an experienced full stack developer with over two decades eperience</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sint beatae nulla laudantium expedita modi, saepe corrupti autem. Perspiciatis, alias voluptas ipsam harum quas ad qui neque dignissimos iusto? Nobis.</p>

                <div className="about-skills" >
                    <div className="about-skill"><p>MYSQL</p><hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>MONGO DB</p><hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>ORACLE</p><hr style={{width:"60%"}} /></div>

                </div>
            </div>
        </div>

        <div className="about-achievements" >
            <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achievement">
                <h1>90+</h1>
                <p>COMPLETED PROJECTS</p>
            </div>
            <hr />
            <div className="about-achievement" >
                <h1>200+</h1>
                <p>HAPPY CLIENTS</p>
            </div>

        </div>




    

       
     
    

    </div>
  )
}

export default About