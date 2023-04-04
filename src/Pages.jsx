import React, { Component } from 'react'
import {pages} from './Mock'
import './Pages.css'
 class Pages extends Component {
  render() {
    return (
      <div>
        {pages.map(page=>(
            <div key={page.id} className='Pages wrapper'>
                {page.title}

            </div>
        ))}
      </div>
    )
  }
}
export default Pages
