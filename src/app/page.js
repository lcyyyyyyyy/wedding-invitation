'use client'

import {
  useRef,
  useState,
  useEffect
} from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import styles from './page.module.scss'

import Date from '../components/Date/Date'
import Maps from '../components/Maps/Maps'
import Logo from '../components/Logo/Logo'
import Cover from '../components/Cover/Cover'
import Closer from '../components/Images/Closer'
import Marquee from '../components/Marquee/Marquee'
import Gallery from '../components/Gallery/Gallery'
import HoldHands from '../components/Images/HoldHands'
import Invitation from '../components/Invitation/Invitation'
import RecordPlayer from '../components/RecordPlayer/RecordPlayer'

gsap.registerPlugin(ScrollTrigger)

const Home = () => {
  const container = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 4000)
  }, [])

  useGSAP(
    () => {
      if (isLoaded) {
        const cover = document.getElementById('cover')

        gsap.to(cover, {
          ease: 'none',
          yPercent: 50,
          scrollTrigger: {
            scrub: true
          }
        })
      }
    },
    { scope: container, dependencies: [isLoaded] }
  )

  return (
    <div
      ref={container}
      style={{ overflow: isLoaded ? 'unset' : 'hidden' }}
      className={styles.container}
    >
      <Logo />
      <Cover />
      <Marquee />
      <Gallery />
      <h1>Joyfully invite you to our wedding</h1>
      <HoldHands />
      <Invitation />
      <Closer />
      <RecordPlayer />
      <Date />
      <Maps />
    </div>
  )
}

export default Home
