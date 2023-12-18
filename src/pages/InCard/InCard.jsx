import CardsData from '../../images/CardsData';
import { useParams } from 'react-router-dom';
import DetailedCard from '../../components/DetailedCard/DetailedCard';
import { motion } from 'framer-motion';

const InCard = () => {

    const { incardId } = useParams();
    const inCard = CardsData.find((e) => e.id === Number(incardId))

    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
        >
            <DetailedCard inCard={inCard} />
        </motion.div>

    )
    
}

export default InCard;