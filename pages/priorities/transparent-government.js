import React from 'react'
import Layout from '../../components/layout'
import Priority from '../../components/Priority/Priority'
import headingEnglish from '../../images/transparent-government.svg'
import headingSpanish from '../../images/transparent-government-sp.svg'
import { transparentGovernmentText as text } from '../../components/text'

const priorityName = 'Transparent Government';

const images = {
  heading: {
    english: headingEnglish,
    spanish: headingSpanish,
  },
};

export default function TransparentGovernment() {
  return (
    <Layout>
      <Priority priorityName={priorityName} text={text} images={images} />
    </Layout>
  )
}
