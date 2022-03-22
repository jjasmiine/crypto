import React from 'react'
import two from './images/2.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className='container'>
                <img src={two} alt="image" />

                <div className='column-two'>
                    <h2>About</h2>
                    <span className='line'></span>
                    <p className='p-one'>Track, Trade and Earn with Confidence</p>
                    <p className='p-two'>Get the full grasp of our trading tools, making informed exchanges with ease</p>
                    <button className='button'>Invest Now</button>
                </div>
            </div>
        </div>
    )
}

export default About