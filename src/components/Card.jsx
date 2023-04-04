import React, { Component } from 'react'
import '../Card.css'
import {card} from '../Mock.js'
import watch from '../assets/images/watch.png';
import people from '../assets/images/people.png';
import rating from '../assets/images/rating.png'
import destination from '../assets/images/destitation.png'


 class Card extends Component {
  render() {
    return (
      <div className='main'>
        {
            card.map(card=>(
                <div key={card.id} className='card_container'>
                    <img className='card_img' src={card.image} alt="img"/>
                   <div className='card_description'>
                    <p className='card_title'>{card.title}</p>
                        <div className='card_wrapper'>
                            <div className='card_span'>
                            <span className='card_inner'>
                            <img src={watch} alt="watch" />
                            <p className='card_text'>{card.day}</p>
                            </span>
                            <span className='card_inner'>
                                <img src={people} alt="people" />
                              <p className='card_text'>{card.person}</p>  
                            </span>
                            <span className='card_inner'>
                                <img src={rating} alt="rating" />
                                <p className='card_text'>{card.rating}{card.review}</p>
                                
                            </span>
                            </div>
                            <div className='card_outer'>
                                <span className='card_location'>
                                    <img  src={destination} alt="destination" />
                                    
                                    <p className='card_text'>{card.location}</p>
                                </span>
                                <button className='card_btn'>{card.price}</button>
                                    
                            </div>
                        </div>

                   </div>
                </div>
            ))
        }
      </div>
    )
  }
}
export default Card;
