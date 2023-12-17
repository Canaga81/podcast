import React from 'react'
import './Story.css'
import { Link } from 'react-router-dom'
import story_pulse from '../../images/Story_pulse.png'

const Story = () => {
  return (
    <section className='story'>
      <div className="story_container">
        <div className="story_container-left">
          <h1 className='story_title'>Become The Hero Of Your Own Story</h1>
          <p className='story_desc'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mus cras lacus tellus morbi viverra suspendisse ornare.
            Sit volutpat, volutpat ut netus malesuada
            enim penatibus non aliquet.
          </p>

          <Link to='/contack'>
            <button className="story_btn">
              Contack Us
            </button>
          </Link>

        </div>
        <div className="story_container-right">
          <div className="story_image">
            <img className='story_pulse' src={story_pulse} alt="story_pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story