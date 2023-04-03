import React, {Component} from 'react'
import './Navbar.css' 
import logo from '../assets/images/logo.png'
import {navLink} from './Mock.js'


class Navbar extends Component {
   
    render(){
     return<div className='container'>
        <div>
    <img src={logo} alt='logo'/>
        </div>
        <div className='wrapper'>
            <ul className='nav-items'>
                {
                    navLink.map(link=>(
                        <li className='nav-item' key={link.id}>{navLink.title}</li>
                    ))
                }
            </ul  > 
 <button className='login_btn'>Sign up</button>
        </div>
       </div> //.container
      
    }
}

export  default Navbar;