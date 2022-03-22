import React from 'react'
import './Services.css'
import one from './images/1.jpg'

const Services = () => {
    return (
        <div className='services' id='services'>
            <div className='container'>

                <div className='column-one'>
                    <h2>Services</h2>
                    <span className='line'></span>
                    <p className='title'>Its time to generate a passive income</p>

                    <button className='button'>Download Wallet</button>

                </div>

                <div className='column-two'>
                    <img src={one} alt="image" />
                </div>
            </div>
        </div>
    )
}

export default Services