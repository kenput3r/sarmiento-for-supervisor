import React from 'react'
import Layout from '../../components/layout'
import Priority from '../../components/Priority/Priority'
import headingEnglish from '../../images/open-space.svg'
import headingSpanish from '../../images/open-space-sp.svg'
import { openSpaceText as text } from '../../components/text'

const priorityName = 'Open Space';

const images = {
  heading: {
    english: headingEnglish,
    spanish: headingSpanish,
  },
};

export default function OpenSpace() {
  return (
    <Layout>
      <Priority priorityName={priorityName} text={text} images={images} />
    </Layout>
  )
}
