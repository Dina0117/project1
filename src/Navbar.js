import React, {Component} from 'react'
import './Navbar.css'; 

class Navbar extends Component {
   constructor(props){
    super(props)
   }
    render(){
        
        return <header className='header'>{this.props.title}, {this.props.status}</header>
    }
}

export  default Navbar;