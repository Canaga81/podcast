import React from 'react';
import './Finsweet.css';
import about_mic_big_image from '../../images/about_mic_big_image.png'

const Finsweet = () => {
    return (
        <div className='finsweet'>
            <div className="finsweet_container">
                <div className="finsweet_container-left">
                    <h1>About Finsweet Podcast</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                    <button className='finsweet_btn'>
                        Subscribe Now!
                    </button>
                </div>
                <div className="finsweet_container-right">
                    <img className='finsweet_img' src={about_mic_big_image} />
                </div>
            </div>
        </div>
    )
}

export default Finsweet