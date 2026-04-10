import React from 'react'
import Image from 'next/image'
import footerBanner from '../../images/footer-banner.png'

export default function Banner() {
  return (
    <section>
      <Image
        src={footerBanner}
        alt='Vicente Sarmiento for OC Supervisor. Election Day June 7'
        placeholder='blur'
        layout='responsive'
      />
    </section>
  )
}
