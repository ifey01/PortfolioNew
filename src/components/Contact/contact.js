import React, { useRef } from 'react';
import '../../components/Contact/contact.css';
// import Walmart from '../../assets/walmart.png';
// import Adobe from '../../assets/adobe.png';
// import Microsoft from '../../assets/microsoft.png';
// import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';



const Contact = (e) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hmk5an8', 'template_x1mmunx', form.current, 'bBGxhNHFseEGgmCSjzzIQ')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !');
      }, (error) => {
          console.log(error.text);
      });
  };



  return (
    <section id="contactPage">
        <div id="client">
            {/* <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">I had the opportunity to work with a diverse group of companies.</p> */}
            <div className="clientsImgs">
                {/* <img src={Walmart} alt=" " className="clientImg" />
            <img src={Adobe} alt=" " className="clientImg" />
            <img src={Microsoft} alt=" " className="clientImg" />
            <img src={Facebook} alt=" " className="clientImg" /> */}
            </div>
          
        </div>
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss work opportunity</span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder="Your Name" name='name'/>
            <input type="eamil" className="email" placeholder="Your Email" email='user_email'/>
            <textarea className="msg" name="message" rows="10" placeholder="Message"></textarea>
            <button type="submit" value="send" className="submitBtn">Submit</button>
            <div className="links">
            <img src={FacebookIcon}  alt="Facebook" className="link"/>
            <img src={TwitterIcon}  alt="Twitter" className="link"/>
            <img src={YoutubeIcon}  alt="Youtube" className="link"/>
            <img src={InstagramIcon}  alt="Instagram" className="link"/>
           

            </div>
        </form>
            
    </section>
  )
}

export default Contact