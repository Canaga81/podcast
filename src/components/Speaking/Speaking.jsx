import React from 'react'
import './Speaking.css'
import speakingMan from '../../images/speaking_man_photo.png';
import speakingWoman from '../../images/speaking_woman_photo.png'
import speaking_single_line from '../../images/speaking_single_line.png';
import speaking_lines from '../../images/speaking_lines.png';

const Speaking = () => {

    return (
        <section className='speaking'>
            <div className="speaking_container">
                <div className="speaking_left">
                    <div className="speaking_left-lines_purple">
                        <div className="line_small"></div>
                        <div className="line_big"></div>
                    </div>
                    <div className="speaking_title_text">
                        <h2 className='speaking_title'>A podcast for makers and entrepreneurs</h2>
                        <p className='speaking_text'>
                            Apparently we had reached a great height in the atmosphere,
                            for the sky was a dead black, and the stars
                            had ceased to twinkle.
                        </p>
                    </div>
                    <div className="speaking_left-line_green"></div>
                </div>
                <div className="speaking_right">
                    <div className="speaking_images">
                        <img className='speaking_right_single_line' src={speaking_single_line} alt="single_line" />
                        <img className='speakingMan' src={speakingMan} alt="man_Photo" />
                        <img className='speakingWoman' src={speakingWoman} alt="man_Photo" />
                        <img className='speaking_right_lines' src={speaking_lines} alt="lines" />
                    </div>
                </div>
            </div>
        </section>
    )
    
}

export default Speaking