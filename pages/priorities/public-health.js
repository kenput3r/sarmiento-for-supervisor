import React from 'react'
import Layout from '../../components/layout'
import Priority from '../../components/Priority/Priority'
import headingEnglish from '../../images/public-health.svg'
import headingSpanish from '../../images/public-health-sp.svg'
import { publicHealthText as text } from '../../components/text'

const priorityName = 'Public Health';

const images = {
  heading: {
    english: headingEnglish,
    spanish: headingSpanish,
  },
};

const video = {
  english: 'https://www.youtube.com/embed/Ijjt8jX-J4Q',
  spanish: 'https://www.youtube.com/embed/3yu7NBP_f6Q',
}

export default function PublicHealth() {
  return (
    <Layout>
      <Priority priorityName={priorityName} text={text} images={images} video={video} />
    </Layout>
  )
}
