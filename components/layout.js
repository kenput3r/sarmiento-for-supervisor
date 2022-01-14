import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './navigation'
import logo from '../images/for-supervisor-primary_blue.png'

const LinkedLogo = React.forwardRef(({ onClick, href }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    <Image
      priority
      placeholder="blur"
      src={logo}
      alt="Vicente Sarmiento For OC Supervisor"
      width={480}
      height={145.66}
    />
  </a>
))

LinkedLogo.propTypes = {
  onClick: PropTypes.func,
  href: PropTypes.string,
}

LinkedLogo.defaultProps = {
  onClick: () => {},
  href: '/',
}

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="SANTA ANA MAYOR VICENTE SARMIENTO ANNOUNCES CANDIDACY FOR ORANGE COUNTY SUPERVISOR"
        />
        <meta
          property="og:image"
          content="/sarmiento-headshot-watermarked.jpg"
        />
        <meta name="og:title" content="Sarmiento For Orange County Supervisor" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        {home ? (
          <h1 className="text-center mt-4 px-2">
            <Image
              priority
              placeholder="blur"
              src={logo}
              alt="Vicente Sarmiento For OC Supervisor"
              width={480}
              height={145.66}
            />
          </h1>
        ) : (
          <div className="text-center mt-4 px-2 hover:cursor-pointer">
            <Link href="/" passHref className="hover:cursor-pointer">
              <LinkedLogo />
            </Link>
          </div>
        )}
      </header>

      <Navigation />

      <main className="px-2">{children}</main>

      <footer className="text-center mt-4 px-2">
        Paid for by Sarmiento for Supervisor 2022
        {' '}
        <span className="phones:block">(FPPC ID# 1442960)</span>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  home: PropTypes.bool,
}

Layout.defaultProps = {
  home: false,
}
