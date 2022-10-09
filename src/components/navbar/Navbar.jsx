import React from 'react'
import './navbar.scss'
import navlinks from '../../NavLinks'
import {Link, NavLink} from 'react-router-dom'
import { useState } from 'react'
import intimate from '../../assets/intimate.png'

const Navbar = ({toggleSidebar}) => {
  const [isSrolled, setIsScrolled] = useState(false)

  window.onscroll = () =>{
    setIsScrolled(window.pageYOffset === 0? false : true)
    return () => (window.pageYOffset = null)
  } 
  return (
    <div className={isSrolled ? 'navbar scrolled' : 'navbar'}>
      <Link className='link' to="/">
        <img className='logo' src={intimate} alt="" />
      </Link>
        
        <div className='navigations'>
            {
              navlinks.map((nav, index) =>(
                <p key={index}>
                  <NavLink className='link' to={nav.url}>{nav.title}</NavLink>
                </p>
              ))
            }
        </div>
        <span style={{color: 'whitesmoke', fontSize: '2rem', marginRight: '1.5rem'}} 
        class="material-symbols-outlined hamburger" onClick={toggleSidebar}>menu_open</span>
    </div>
  )
}

export default Navbar