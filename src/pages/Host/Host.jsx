import Welcome from '../../components/Welcome/Welcome'
import Companies from '../../components/Companies/Companies'
import Dream from '../../components/Dream/Dream'
import Vlogger from '../../components/Vlogger/Vlogger'
import BigCards from '../../components/BigCards/BigCards'
import Story from '../../components/Story/Story'
import Episodes from '../../components/Episodes/Episodes'
import { motion } from 'framer-motion'

const Host = () => {

  return (

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >

      <Welcome />
      <Companies />
      <Dream />
      <Vlogger />
      <BigCards />
      <Story />
      <Episodes />

    </motion.div>

  )
}

export default Host