import React from 'react'
import Studios from '../../components/Studios/Studios'
import Episodes from '../../components/Episodes/Episodes'
import Filter from '../../components/Filter/Filter'
import StoryBgHero from '../../components/StoryBgHero/StoryBgHero'

const Podcasts = () => {
  return (
    <>
      <Studios />
      <Episodes />
      <Filter />
      <StoryBgHero />
    </>
  )
}

export default Podcasts