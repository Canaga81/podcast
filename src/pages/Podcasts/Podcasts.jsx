import React from 'react';
import Studios from '../../components/Studios/Studios';
import Episodes from '../../components/Episodes/Episodes';
import Filter from '../../components/Filter/Filter';
import StoryBgHero from '../../components/StoryBgHero/StoryBgHero';
import { motion } from 'framer-motion'

const Podcasts = () => {

  return (
    
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <Studios />
      <Episodes />
      <Filter />
      <StoryBgHero />
    </motion.div>

  )

}

export default Podcasts