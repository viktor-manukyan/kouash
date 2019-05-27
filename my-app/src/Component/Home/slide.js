import React from 'react';
import { Slide } from 'react-slideshow-image';

const properties = {
    duration: 5000,
    transitionDuration: 1000,
    infinite: true,
    indicators: true,
    arrows: true
}

const Slideshow = () => {
    return (
        <Slide {...properties}>
            <div className="each-slide">
                <div className='backImg1'>
                </div>
            </div>
            <div className="each-slide">
                <div className='backImg2'>
                </div>
            </div>
            <div className="each-slide">
                <div className='backImg3'>
                </div>
            </div>
        </Slide>
    )
}

export default Slideshow