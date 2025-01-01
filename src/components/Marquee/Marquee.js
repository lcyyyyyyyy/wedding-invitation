'use client'

import { useRef } from 'react'
import gsap from 'gsap'
import Marquee from 'react-fast-marquee'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import styles from './Marquee.module.scss'

gsap.registerPlugin(ScrollTrigger)

const MarqueeComponent = () => {
  const container = useRef(null)

  useGSAP(
    () => {
      const marquee = document.getElementById('marquee')

      gsap
        .from(marquee, {
          ease: 'in',
          duration: 0.6,
          yPercent: 100,
          scrollTrigger: {
            start: 'top bottom',
            trigger: marquee
          }
        })
    },
    { scope: container }
  )

  return (
    <div
      id='marquee'
      ref={container}
      className={styles.wrapper}
    >
      <Marquee autoFill={true}>
        <span>Mar. 8, 2025 Sat. 12pm</span>
      </Marquee>
    </div>
  )
}

export default MarqueeComponent
