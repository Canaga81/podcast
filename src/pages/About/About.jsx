import Finsweet from '../../components/Finsweet/Finsweet'
import AboutInfo from '../../components/AboutInfo/AboutInfo'
import AboutTeam from '../../components/AboutTeam/AboutTeam'
import MeetOrTeam from '../../components/MeetOrTeam/MeetOrTeam'
import SponsorsCompany from '../../components/SponsorsCompany/SponsorsCompany'
import Episodes from '../../components/Episodes/Episodes'
import { motion } from 'framer-motion'

const About = () => {

  return (

    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >

      <Finsweet />
      <AboutInfo />
      <AboutTeam />
      <MeetOrTeam />
      <SponsorsCompany />
      <Episodes />

    </motion.div>

  )

}

export default About