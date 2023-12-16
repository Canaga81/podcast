import React from 'react'
import './Vlogger.css'

const Vlogger = () => {
    return (
        <section className='vlogger'>
            <div className="vlogger_container">
                <div className="vlogger_container-left">
                    <h2 className='vlogger_title'>My origins on YouTube in 2008</h2>
                    <p className='vlogger_text'>
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Lorem eget condimentum enim
                        libero ultricies amet odio fringilla.
                        Ut nibh morbi augue porta aliquet commodo.
                        Fermentum auctor lacus eget in ut integer viverra sed.
                        Penatibus tortor consequat, habitasse non nisl
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mus cras lacus tellus
                        morbi viverra suspendisse ornare. Sit volutpat,
                        volutpat ut netus malesuada enim penatibus
                        non aliquet.
                    </p>
                </div>
                <div className="vlogger_container-right">
                    <h2 className='vlogger_title'>From tech journalist, to Vlogger and YouTuber</h2>
                    <p className='vlogger_text'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mus cras lacus tellus morbi viverra suspendisse ornare. 
                        Sit volutpat, volutpat ut netus malesuada enim penatibus non aliquet.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Lorem eget condimentum enim libero ultricies amet odio fringilla. 
                        Ut nibh morbi augue porta aliquet commodo. 
                        Fermentum auctor lacus eget in ut integer viverra sed. 
                        Penatibus tortor consequat, habitasse non nisl.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Lorem eget condimentum enim libero ultricies ame\
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Vlogger