import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  
 {/** const openMenu = () => {
    menuRef.current.style.right="0";
  }
    const menuRef = useRef();

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }*/} 
  return (
    <div className="navbar">
      <h1>Joe-tech</h1>
      {/*<img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />*/}
        
        <ul className="nav-menu">
       {/** <img src={menu_close} onClick={closeMenu} alt="" className='nav-mob-close'/>*/} 
            <li><AnchorLink className='anchor-link'  href='#home' >Home</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about' >About me</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services' >Services</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work' >Portfolio</AnchorLink></li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact' >Contact</AnchorLink></li>

        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink></div>

    </div>
  )
}

export default Navbar