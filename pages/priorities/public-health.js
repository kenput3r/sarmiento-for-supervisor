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

export default function PublicHealth() {
  return (
    <Layout>
      <Priority priorityName={priorityName} text={text} images={images} />
    </Layout>
  )
}
