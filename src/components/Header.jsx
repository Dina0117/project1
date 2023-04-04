import React, { Component } from 'react'
import banner from '../assets/images/banner.png'
import './Header.css'
 class Header extends Component {
  render() {
    return (
      <div>
    <img className='banner' src={banner} alt='banner'/>
      </div>
    )
  }
} 
export default Header
