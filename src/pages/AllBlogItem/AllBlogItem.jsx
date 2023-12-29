import blogCardsData from '../../images/BlogCardsData'
import { useParams } from 'react-router-dom'
import BlogAtmosphere from '../../components/BlogAtmosphere/BlogAtmosphere';
import { motion } from "framer-motion"

const AllBlogItem = () => {

    const { allblogitemId } = useParams();
    const allblogitem = blogCardsData.find((e) => e.id === Number(allblogitemId))

    return (

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
        >
            <BlogAtmosphere allblogitem={allblogitem} />
        </motion.div>

    )
}

export default AllBlogItem