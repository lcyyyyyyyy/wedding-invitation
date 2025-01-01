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

import Logo from '../components/Logo/Logo'
import Cover from '../components/Cover/Cover'
import Marquee from '../components/Marquee/Marquee'
import Invitation from '../components/Invitation/Invitation'

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
      <Invitation />
      <div style={{ height: '2000px' }}></div>
    </div>
  )
}

export default Home
