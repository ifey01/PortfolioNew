import React from 'react';
import '../../components/Projects/projects.css';
import Portfolio from '../../assets/portfolio.webp'
import Ecommerce from '../../assets/ecommerce.webp'
import Login from '../../assets/Login.webp'



const projects = () => {
  return (
    <section id="projects">
       <h2 className="projectTitle">My Portfolio</h2>
       <span className="projectDesc" >I am passionate about creating exceptional web and mobile applications that not only meet client requirements but also exceed user expectations</span>
       <div className="projectImgs">
        <img src={Portfolio} alt=" " className="projectImg" data-aos="zoom-out"/>
        <img src={Login} alt=" " className="projectImg" data-aos="zoom-out" />
        <img src={Ecommerce} alt=" " className="projectImg" data-aos="zoom-out"/>
     
       </div>
       <button className="projectBtn">See More</button>
    </section>
  )
}

export default projects