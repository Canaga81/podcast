import React from 'react'
import './Dream.css'
import man_speaking from '../../images/man_speaking.png';
import bg_wave from '../../images/bg_wave.png'
import line_bold_purple from '../../images/line_bold_purple.png'

const Dream = () => {

    return (

        <section className='dream'>

            <div className="dream_container">

                <div className="dream_container-left">

                    <h2>A small story about a big dream  —  </h2>

                    <p className='dream_slim_text'>
                        Apparently we had reached a great height in the atmosphere,
                        for the sky was a dead black, and the stars had ceased to twinkle.
                        By the same illusion which lifts the horizon
                    </p>

                    <p className="dream_bold_text">
                        Apparently we had reached a great height in the atmosphere,
                        for the sky was a dead black, and
                    </p>

                    <div className='line_bold_purple_cont'>
                        <img className='line_bold_purple' src={line_bold_purple} alt="" />
                    </div>

                </div>

                <div className="dream_container-right">
                    <img src={man_speaking} alt="" />
                    <div className="dream_wave_bg">
                        <img src={bg_wave} alt="" />
                    </div>
                </div>

            </div>

        </section>

    )

}

export default Dream