import React from 'react'
import Form from '../../components/Form/Form'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.6 }}
    >
      <Form />
    </motion.div>
  )
}

export default Contact