import React from 'react'
import './Video.css'
import man_web_photo from '../../images/man_web_photo.png'

const Video = () => {

    return (

        <section className='video'>

            <div className="video_container">

                <div className="video_left">
                    <div className="video_image">
                        <img className='man_web_photo' src={man_web_photo} alt="" />
                    </div>
                    <div className="video_youtube">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="30" viewBox="0 0 48 30" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M1.55259 3.53093C0 5.71503 0 8.81002 0 15C0 21.19 0 24.285 1.55259 26.4691C2.09673 27.2345 2.76546 27.9033 3.53093 28.4474C5.71503 30 8.81002 30 15 30H33C39.19 30 42.285 30 44.4691 28.4474C45.2345 27.9033 45.9033 27.2345 46.4474 26.4691C48 24.285 48 21.19 48 15C48 8.81002 48 5.71503 46.4474 3.53093C45.9033 2.76546 45.2345 2.09673 44.4691 1.55259C42.285 0 39.19 0 33 0H15C8.81002 0 5.71503 0 3.53093 1.55259C2.76546 2.09673 2.09673 2.76546 1.55259 3.53093ZM20.9499 20.2855L30.3999 14.9013L20.9499 9.51713V20.2855Z" fill="#1AD993" />
                        </svg>
                        <h4 className='youtube_text'>350+ Videos</h4>
                    </div>
                </div>

                <div className="video_right">
                    <div className="video_line"></div>
                    <div className="video_title_text">
                        <h2 className='video_title'>My origins on <br /> <span>YouTube</span> in 2008</h2>
                        <p className='video_text'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Mus cras lacus tellus morbi viverra suspendisse ornare.
                            Sit volutpat, volutpat ut netus malesuada
                            enim penatibus non aliquet.
                        </p>
                    </div>
                </div>

            </div>

        </section>

    )

}

export default Video