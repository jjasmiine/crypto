import React from 'react'
import user1 from './images/user1.jpg'
import user2 from './images/user2.jpg'
import user3 from './images/user3.jpg'
import './Testimonials.css'



const Testmonials = () => {
    return (
        <div className='testimonials' id='testimonials'>
            <div className='container'>
                <h2>Testimonials</h2>
                <span className='line'></span>

                <div className='content'>

                    <div className='card'>
                        <img src={user1} alt="image" />
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non. Tristique risus nec feugiat in fermentum posuere urna.</p>
                        <p className='name'>Prince Akachi</p>
                        <p className='title'>Photographer</p>
                    </div>

                    <div className='card'>
                        <img src={user2} alt="image" />
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non. Tristique risus nec feugiat in fermentum posuere urna.</p>
                        <p className='name'>Christina Wocintechchat</p>
                        <p className='title'>Business Marketer</p>
                    </div>

                    <div className='card'>
                        <img src={user3} alt="image" />
                        <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit scelerisque in dictum non. Tristique risus nec feugiat in fermentum posuere urna.</p>
                        <p className='name'>Ben Parker</p>
                        <p className='title'>Tech Guru</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Testmonials