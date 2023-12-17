import { useState } from 'react'
import './Episodes.css'
import CardsData from '../../images/CardsData'
import CardItem from '../CardItem/CardItem'

const Episodes = () => {

    const [visible, setVisible] = useState(3);

    const showMoreMeals = () => {
        setVisible(item => item += 6)
    }

    return (
        
        <section className='episodes'>
            <div className="episodes_container">
                <div className="episodes_container-top">
                    <div className="episodes_container-top_left">
                        <h2>Recent Episodes</h2>
                        <p>
                            Apparently we had reached a great height in the atmosphere, for the sky was a dead black.
                        </p>
                    </div>
                    <div className="episodes_container-top_right">
                        <button onClick={() => showMoreMeals()} className='episodes_btn'>See All Episiodes</button>
                    </div>
                </div>
                <div className="episodes_container-bottom">
                    <div className="cards_container">
                        {
                            CardsData.slice(0, visible).map((item, i) => {
                                return (
                                    <CardItem key={i} id={item.id} image={item.image} title={item.title} desc={item.desc} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Episodes