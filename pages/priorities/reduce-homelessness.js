import React from 'react'
import Layout from '../../components/layout'
import Priority from '../../components/Priority/Priority'
import reducingHomelessness from '../../images/reducing-homelessness.svg'
import reducingHomelessnessSp from '../../images/reducing-homelessness-sp.svg'
import { reduceHomelessnessText } from '../../components/text'

const priorityName = 'Reduce Homelessness';

const images = {
  heading: {
    english: reducingHomelessness,
    spanish: reducingHomelessnessSp,
  },
};

export default function ReduceHomelessness() {
  return (
    <Layout>
      <Priority priorityName={priorityName} text={reduceHomelessnessText} images={images} />
    </Layout>
  )
}
