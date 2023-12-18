import Money from '../../components/Money/Money'
import AllBlogs from '../../components/AllBlogs/AllBlogs'
import { motion } from 'framer-motion'

const Blog = () => {

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >

      <Money />
      <AllBlogs />

    </motion.div>

  )

}

export default Blog