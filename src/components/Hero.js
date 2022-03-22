import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <div className='hero' id='home'>
            <div className='content'>
                <p className='title'>Bitcoin begins here</p>
                <p className='subtitle'>Create your wallet today</p>
                <button href="/">Get Started</button>
            </div>
        </div>
    )
}

export default Hero