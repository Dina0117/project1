import React, { Component } from 'react'
import {pages} from '../Mock'
import './Pages.css'
 class Pages extends Component {
  render() {
    return (
      <div  className='Pages'>
        {pages.map(page=>(
            <div key={page.id} className='pages-wrapper'>
              <div className='content'>  {page.title}</div>

            </div>
        ))}
      </div>
    )
  }
}
export default Pages
