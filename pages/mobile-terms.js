/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout'

function MobileTerms() {
  return (
    <Layout>
      <h1 className='font-bold text-center text-xl pt-10 pb-6'>
        Mobile Terms of Service
      </h1>
      <div className='flex flex-row flex-wrap mx-auto max-w-6xl'>
        <p className='p-3 text-lg'>
          Sarmiento for Supervisor FPPC ID# 1442960 &apos;s mobile campaigns
          provide subscribers with updates, event invitations, donation asks,
          and voting reminders.
        </p>
        <p className='p-3 text-lg'>
          You can cancel the SMS service at any time. Just text
          &quot;STOP&quot;. After this, you will no longer receive SMS messages
          from us. If you want to join again, just sign up as you did the first
          time and we will start sending SMS messages to you again.
        </p>
        <p className='p-3 text-lg'>
          If you are experiencing issues with the messaging program you can
          reply with the keyword HELP for more assistance, or you can get help
          directly at hello@scaletowin.com.
        </p>
        <p className='p-3 text-lg'>
          Carriers are not liable for delayed or undelivered messages. T-Mobile
          is not liable for delayed or undelivered messages.
        </p>
        <p className='p-3 text-lg'>
          You can expect to receive no more than 2 text message(s) per day from
          Sarmiento for Supervisor FPPC ID# 1442960.
        </p>
        <p className='p-3 text-lg'>
          As always, message and data rates may apply for any messages sent to
          you from us and to us from you. If you have any questions about your
          text plan or data plan, it is best to contact your wireless provider.
        </p>
        <p className='p-3 text-lg'>
          If you have any questions regarding privacy, please read our privacy
          policy:{' '}
          <Link href='/privacy-policy' className='text-blue-500 underline'>
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </Layout>
  )
}

export default MobileTerms
