import React, { useState } from 'react'
import '../../components/NavBar/navbar.css';
import 'animate.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import Menu from '../../assets/menu.png'; 
import contactImg from '../../assets/contact.png'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    
   < nav className="navbar">
    <img src={logo} alt="logo" className='logo'/>
    <div className="desktopMenu">
    <Link activeClass="active" to='hero' spy='true' offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to='skills' spy='true' offset={-50} duration={500} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to='projects' spy='true' offset={50} duration={500} className="desktopMenuListItem">Portfolio</Link>
        <Link activeClass="active" to='clients' spy='true' offset={-50} duration={500} className="desktopMenuListItem">Clients</Link>
    

    </div>
    <script className="desktopMenuBtn" onClick={() => {
     
      document.getElementById("contac").scrollIntoView({behavior: 'smooth'});
    }}>
        <img src={contactImg} alt="" className="desktopMenuImg"/>Contact Me</script>
      

        <img src={Menu} alt="Menu" className='mobileMenu' onClick={()=>setShowMenu(!showMenu)}/>
    <div className="navMenu" style={{display: showMenu? 'flex':'none'}}>
        <Link activeClass="active" to='hero' spy='true' offset={-100} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass="active" to='skills' spy='true' offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass="active" to='projects' spy='true' offset={50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass="active" to='clients' spy='true' offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Clients</Link>
        <Link activeClass="active" to='contact' spy='true' offset={-50} duration={500} className="ListItem" onClick={()=>setShowMenu(false)}>Contact</Link>
    

    </div>
   </nav>


  )
}

export default Navbar;