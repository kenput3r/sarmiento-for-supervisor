/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Layout from '../components/layout'

const lines = [
  {
    type: 'paragraph',
    text: 'Sarmiento for Supervisor FPPC ID# 1442960 is committed to protecting your privacy online. This Privacy Policy describes our obligations and practices of how we collect and use customer information through our website, applications, and other online services (collectively, our “Services”).',
  },
  {
    type: 'paragraph',
    text: 'This 10DLC & Toll-Free Privacy Policy applies to SMS and MMS texts from Sarmiento for Supervisor FPPC ID# 1442960.',
  },
  {
    type: 'title',
    text: 'CATEGORIES OF INFORMATION COLLECTED:',
  },
  {
    type: 'paragraph',
    text: 'We will collect your name, phone number and indication of consent to receive text (SMS and MMS).',
  },
  {
    type: 'title',
    text: 'HOW WE USE THE INFORMATION COLLECTED:',
  },
  {
    type: 'paragraph',
    text: 'In addition to providing the services and complying with our Privacy Policy, we use the information to confirm consent to receive text (SMS and MMS).',
  },
  {
    type: 'title',
    text: 'TO WHOM DO WE SHARE THE INFORMATION COLLECTED:',
  },
  {
    type: 'paragraph',
    text: 'Text messaging originator opt-in data and consent will not be shared with any third parties, provided that the foregoing does not apply to sharing (1) with vendors, consultants and other service providers who need access to such information to carry out work on our behalf (and who will not use such information for their own purposes); (2) if we believe disclosure is required by any applicable law, rule, or regulation or to comply with law enforcement or legal process.',
  },
  {
    type: 'paragraph',
    text: 'Mobile information will not be shared with third parties/affiliates for marketing/promotional purposes.',
  },
  {
    type: 'paragraph',
    text: 'This Privacy Policy may be updated periodically and without prior notice to you to reflect changes in our information practices and applicable law. We suggest that you periodically review the Privacy Policy for amendments.',
  },
]

function PrivacyPolicy() {
  return (
    <Layout>
      <h1 className='font-bold text-center text-xl pt-10 pb-6'>
        Privacy Policy
      </h1>
      <div className='flex flex-row flex-wrap mx-auto max-w-6xl'>
        {lines.map((el) => {
          if (el.type === 'title') {
            return (
              <h2
                className='font-bold text-lg p-3 uppercase'
                key={`${el.type}-${el.text.slice(0, 10)}`}
              >
                {el.text}
              </h2>
            )
          }

          return (
            <p
              className='p-3 text-lg'
              key={`${el.type}-${el.text.slice(0, 10)}`}
            >
              {el.text}
            </p>
          )
        })}
      </div>
    </Layout>
  )
}

export default PrivacyPolicy
