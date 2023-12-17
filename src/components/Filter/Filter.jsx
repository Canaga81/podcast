import { useState } from 'react'
import CardsData from '../../images/CardsData'
import CardItem from '../CardItem/CardItem'
import './Filter.css'
import FilterButtons from '../FilterButtons/FilterButtons'

const Filter = () => {
    // const [visible, setVisible] = useState(3);
    const [items, setItem] = useState(CardsData)
    const menuItems = [...new Set(CardsData.map((val) => val.category))]

    const filterItems = (cat) => {
        const newItems = CardsData.filter((newval) => newval.category === cat)
        setItem(newItems)
    }

    return (

        <section className='episodes'>
            <div className="episodes_container">
                <div className="episodes_container-top">
                    <div className="episodes_container-top_left">
                        <h2>All Podcasts</h2>
                        <FilterButtons
                            menuItems={menuItems}
                            filterItems={filterItems}
                            setItem={setItem}
                        />
                    </div>
                </div>
                <div className="episodes_container-bottom">

                    <div className="cards_container">

                        {
                            items.map((item, i) => {
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

export default Filter