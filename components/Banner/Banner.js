import React from 'react'
import Image from 'next/image'
import bannerImage from '../../images/footer-banner.png'

export default function Banner() {
  return (
    <section>
      {/* Removed placeholder="blur" possible temp fix for netlify image loading issue */}
      <Image
        src={bannerImage}
        alt="Vicente Sarmiento for OC Supervisor. Election Day June 7"
        layout="responsive"
      />
    </section>
  )
}
