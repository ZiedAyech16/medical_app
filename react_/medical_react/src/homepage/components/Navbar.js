import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar_ = () => {
  const[click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const navigate = useNavigate();


  const login_page = ()=>{
    localStorage.setItem("application_state","login");
    navigate("/");
  }


  return (
    <div className='header'>
        <Link className='link_' to='/' >
            <h1>DIGITALISATION MEDICAL</h1>
        </Link>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link className='link_' to='/'>Home</Link>
          </li>
          <li>
            <Link className='link_' to='/about'>About</Link>
          </li>  <li>
            <Link className='link_' to='/contact'>Contact</Link>
          </li>
          <li>
            <Link className='link_' to='/signin'>Consultation</Link>
          </li>
          <li>
            <button className='signin' onClick={login_page}>Sign in</button>
          </li>
        </ul>
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
          
        </div>
    </div>
  )
}

export default Navbar_
