import React from 'react'
import '../../components/Skills/skills.css';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled full stack developer with exprience in creating visual
appealing and user friendly websites. I have a strong understanding of
design and keen eye for detail. I am proficient in HTML, CSS and Javajavascript, as well as design software such as Adobe Photoshop and illustrator.
</span>
        <div className="skillBar" data-aos="fade-up">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Web Design
                </h2>
                <p>Web application built with HTML, CSS, Javascript and React</p>
            </div>
        </div>

        <div className= "skillBar" data-aos="fade-up">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>App Design</h2>
                <p>A mobile application built with Java</p>
            </div>
            </div>
        </section>
        


  );
  }

export default skills;
