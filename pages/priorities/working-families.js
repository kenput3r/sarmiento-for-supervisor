import React from 'react'
import Layout from '../../components/layout'
import Priority from '../../components/Priority/Priority'
import headingEnglish from '../../images/working-families.svg'
import headingSpanish from '../../images/working-families-sp.svg'
import { workingFamiliesText as text } from '../../components/text'

const priorityName = 'Working Families';

const images = {
  heading: {
    english: headingEnglish,
    spanish: headingSpanish,
  },
};

export default function WorkingFamilies() {
  return (
    <Layout>
      <Priority priorityName={priorityName} text={text} images={images} />
    </Layout>
  )
}
