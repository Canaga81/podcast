import React from 'react'
import './AboutTeam.css'
import team_about_image from '../../images/team_about_image.png'

const AboutTeam = () => {
    
    return (

        <div className='aboutTeam'>
            <div className="aboutTeam_container">
                <h2>A few words about our team</h2>
                <img src={team_about_image} />
                <div className="aboutTeam_content">
                    <p className='aboutTeam_desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem eget condimentum enim libero ultricies amet odio fringilla.
                        Ut nibh morbi augue porta aliquet commodo.
                        Fermentum auctor lacus eget in ut integer viverra sed.
                        Penatibus tortor consequat, habitasse non nisl.
                    </p>
                    <p className='aboutTeam_desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem eget condimentum enim libero ultricies amet odio fringilla.
                        Ut nibh morbi augue porta aliquet commodo.
                        Fermentum auctor lacus eget in ut integer viverra sed.
                        Penatibus tortor consequat, habitasse non nisl.
                    </p>
                </div>
            </div>
        </div>

    )
    
}

export default AboutTeam