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
        <div>
            <ul>
                {
                    navLink.map(link=>(
                        <li key={navLink.id}>{navLink.title}</li>
                    ))
                }
            </ul>
        </div>
       </div> 
      
    }
}

export  default Navbar;