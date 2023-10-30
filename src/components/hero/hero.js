import React from 'react'
import './hero.css';
import bg from '../../assets/ifeynew.webp';
import btnImg from '../../assets/hireme.png'
import { Link } from 'react-scroll';


const Hero = () => {
  return (
   <section id="hero">
    <div className="heroContent" data-aos="fade-right">
        <span className="hello">Hello,</span>
        <span className="heroText"> I'm <span className="heroName">Ifeoluwa</span><br/>A Full Stack Developer</span>
        <p className='heroPara'>I am a skilled full stack developer with exprience in creating visual<br/> appealing and user friendly websites.</p>
    <Link to="/hire me"><button className="btn"><img src={btnImg} alt="Hire Me" className="btnImg"/>Hire Me</button></Link>
    </div>
    <img src={bg} alt="Profile" className="bg" data-aos="fade-left" />

   </section>

  )
}

export default Hero;