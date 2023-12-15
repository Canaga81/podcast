import React from 'react'
import './Read.css'
import readsData from '../../images/ReadData'
import shapes_container from '../../images/shapes_container.png'

const Read = () => {
    return (
        <section className='read'>
            <div className="read_container">
                <div className="read_left-card">
                    <div className="read_left-card_head">
                        <h3 className='read_title'>Read our articles & news</h3>
                        <button className='read_blue-btn'>See More</button>
                    </div>
                    <div className="read_left-card_body">
                        <img src={shapes_container} alt="" />
                    </div>
                </div>

                {
                    readsData.map((item, i) => {
                        return (
                            <div key={i} id={item.id} className="read_right_card">
                                <div className="read_right_card_image">
                                    <img src={item.image} alt="" />
                                </div>
                                <div className="read_right_card_text">
                                    <h3>{item.title}</h3>
                                    <p>{item.text}</p>
                                    <button className="read_blue-btn">Read Now</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}

export default Read