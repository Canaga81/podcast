import React from 'react'
import './Studios.css'

const Studios = () => {
    return (
        <section className='studios'>
            <div className="studios_container">
                <div className="studios_bg">
                    <div className="studios_bg-green"></div>
                    <div className="studios_bg-blue">
                        <div className="studios_text_cont">
                            <p className='studios_bold_desc'>Featured</p>
                            <h2 className='studios_bold'>A UX Case Study on Creating a Studious Environment</h2>
                            <p className="studios_slim_desc">
                                Apparently we had reached a great height in the atmosphere,
                                for the sky was a dead black, and the stars had ceased to twinkle.
                                By the same illusion which lifts the horizon
                            </p>
                        </div>
                        <div className="studios_btn_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <rect width="32" height="32" rx="16" fill="#1AD993" />
                                <path d="M21.3335 16L12.4446 21.6452L12.4446 10.3548L21.3335 16Z" fill="white" />
                            </svg>
                            <button className='studies_btn'>Listen Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Studios