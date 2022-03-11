import React from 'react';
import Image from 'next/image';
import bannerImage from '../../images/banner.png';

export default function Banner() {
  return (
    <section>
      <Image src={bannerImage} alt="Vicente Sarmiento for OC Supervisor. Election Day June 7" />
    </section>
  )
}
