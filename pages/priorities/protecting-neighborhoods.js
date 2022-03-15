import React from 'react'
import Layout from '../../components/layout'
import Priority from '../../components/Priority/Priority'
import headingEnglish from '../../images/protecting-neighborhoods.svg'
import headingSpanish from '../../images/protecting-neighborhoods-sp.svg'
import { protectingNeighborhoodsText as text } from '../../components/text'

const priorityName = 'Protecting Neighborhoods';

const images = {
  heading: {
    english: headingEnglish,
    spanish: headingSpanish,
  },
};

export default function ProtectingNeighborhoods() {
  return (
    <Layout>
      <Priority priorityName={priorityName} text={text} images={images} />
    </Layout>
  )
}
