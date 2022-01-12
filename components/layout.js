import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
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
  const router = useRouter()

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

      <nav className="mt-4 border-y-2 border-blue-500 bg-blue-500">
        <ul className="text-orange-500 font-bold uppercase flex flex-row flex-wrap justify-center">
          <li className={router.asPath === '/' ? 'p-2 underline' : 'p-2'}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.asPath === '/press-release' ? 'p-2 underline' : 'p-2'}>
            <Link href="/press-release">Press Release</Link>
          </li>
          <li className={router.asPath === '/contact' ? 'p-2 underline' : 'p-2'}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className="p-2 x-down:p-0 x-down:px-2 x-down:pb-2">
            <a href="https://www.efundraisingconnections.com/c/VinceSarmiento/" target="_blank" rel="noreferrer">Donate</a>
          </li>
        </ul>
      </nav>

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
