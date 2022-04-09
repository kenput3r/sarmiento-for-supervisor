import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navigation from './Navigation/Navigation'
import NavigationDrawer from './Navigation/NavigationDrawer'
import Footer from './Footer/Footer'
import logo from '../images/sarmiento-for-oc-supervisor.svg'

const LinkedLogo = React.forwardRef(({ onClick, href }, ref) => (
  <a href={href} onClick={onClick} ref={ref}>
    <Image src={logo} alt="Vicente Sarmiento For OC Supervisor" />
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
  const [showDrawer, setShowDrawer] = useState(false)
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

      <header className="flex flex-row bg-blue-500 py-3.5 px-3.5 justify-between items-center fixed top-0 w-full z-10 md:px-8">
        {home ? (
          <h1 className="flex-1 md:flex-auto">
            <Image src={logo} alt="Vicente Sarmiento For OC Supervisor" quality={100} loading="eager" priority />
          </h1>
        ) : (
          <div className="hover:cursor-pointer flex-1 md:flex-auto">
            <Link href="/" passHref className="hover:cursor-pointer">
              <LinkedLogo />
            </Link>
          </div>
        )}
        <Navigation showDrawer={showDrawer} setShowDrawer={setShowDrawer} />
      </header>

      <NavigationDrawer showDrawer={showDrawer} />

      <main className="mt-[99px] phones:mt-[73px]">{children}</main>

      <Footer />
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
