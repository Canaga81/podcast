import React from 'react'
import mic_men from '../../images/mic_men.png'
import Line_1_small_purple from '../../images/Line_1_small_purple.png'
import Line_2_small_green from '../../images/Line_2_small_green.png'
import big_green_line from '../../images/big_green_line.png'
import './Welcome.css'

const Welcome = () => {
    return (
        <section className='welcome'>
            <div className="welcome_container">
                <div className="welcome_left">
                    <div className="welcome_images">
                        <img className='Line_1_small_purple' src={Line_1_small_purple} alt="" />
                        <img src={mic_men} alt="" />
                        <img className='Line_2_small_green' src={Line_2_small_green} alt="" />
                    </div>
                </div>
                <div className="welcome_right">
                    <div className="welcome_text_cont">
                        <p className='welcome_blue_text'>About The Host</p>
                        <h2 className='welcome_title'>Hey there, I’m Andrew Jonson and welcome to my Podcast</h2>
                        <p className="welcome_desc">
                            Apparently we had reached a great height in the atmosphere,
                            for the sky was a dead black, and the stars had ceased to twinkle.
                        </p>
                    </div>

                    <div className="welcome_btn_cont">
                        <button className='welcome_btn'>Know More</button>
                    </div>

                    <div className="welcome_image_right">
                        <img className='welcome_right_line' src={big_green_line} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Welcome