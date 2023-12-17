import React from 'react'
import CardsData from '../../images/CardsData'
import { useParams } from 'react-router-dom'
import DetailedCard from '../../components/DetailedCard/DetailedCard';

const InCard = () => {

    const {incardId} = useParams();
    const inCard = CardsData.find((e) => e.id === Number(incardId))

    return (
        <div>
            <DetailedCard inCard={inCard} />
        </div>
    )
}

export default InCard