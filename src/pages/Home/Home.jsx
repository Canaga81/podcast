import Hero from '../../components/Hero/Hero'
import Companies from '../../components/Companies/Companies'
import Speaking from '../../components/Speaking/Speaking'
import Video from '../../components/Video/Video'
import Episodes from '../../components/Episodes/Episodes'
import Comments from '../../components/Comments/Comments'
import Inbox from '../../components/Inbox/Inbox'
import Read from '../../components/Read/Read'
import { motion } from 'framer-motion'


const Home = () => {

  return (

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >

      <Hero />
      <Companies />
      <Speaking />
      <Video />
      <Episodes />
      <Comments />
      <Inbox />
      <Read />

    </motion.div>

  )

}


export default Home