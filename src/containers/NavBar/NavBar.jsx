import React from 'react'
import logo from '../../assets/logo.png'
import cloud from '../../assets/cloud.png'
import './NavBar.css'

const NavBar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar__img-container'>
            <img src={logo} alt="logo" />
        </div>
        <ul className='navbar_list'>
            <li className='navbar_list-item'><a href="">SKI</a></li>
            <li className='navbar_list-item'><a href="">GOLF</a></li>
            <li className='navbar_list-item'><a href="">HIKING</a></li>
            <li className='navbar_list-item'><a href="">CONTACT</a></li>
        </ul>

        <div className='weather'>
            <div className='weather__img-container'>
                <img src={cloud} alt="cloud" />
            </div>
            <div className='weather__info-contianer'>
                <div className='current'>
                    <p className='p__roboto'>Current weather <span >-6°C</span></p>
                </div>
                <div className='recent'>
                   <p className='p__roboto'> Recent snowfall <span >35cm</span> </p>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavBar