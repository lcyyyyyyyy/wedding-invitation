/**
 * @file src/components/Invitation/Invitation.js
 */

'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import styles from './Envelope.module.scss'

import Arrow from '@/components/Icons/Arrow'

gsap.registerPlugin(ScrollTrigger)

const Envelope = ({
  isOpen,
  setIsOpen
}) => {
  const container = useRef(null)
  const envelopeRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [triangle, setTriangle] = useState(null)

  const handleWindowResize = () => {
    const windowWidth = window.innerWidth - 30
    setTriangle({ width: windowWidth * 0.5, height: windowWidth * 0.5 * 0.8 })
  }

  useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth < 640) {
      window.addEventListener('resize', handleWindowResize)
      return () => window.removeEventListener('resize', handleWindowResize)
    }
  }, [])

  useEffect(() => {
    const windowWidth = window.innerWidth
    setIsLoaded(true)
    if (windowWidth < 640) handleWindowResize()
  }, [])

  useGSAP(
    () => {
      if (isLoaded) {
        gsap
          .to(`.${styles.envelope}`, {
            y: 0,
            ease: 'power4.out',
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: container?.current
            }
          })

        if (isOpen) {
          gsap
            .to(`.${styles.envelope}`, {
              ease: 'power4.out',
              opacity: 0,
              duration: 1
            })
        }
      }
    },
    { scope: container, dependencies: [isOpen, isLoaded] }
  )

  return (
    <div
      ref={container}
      className={`${styles.wrapper}${isOpen ? ` ${styles.open}` : ''}`}
    >
      {/* <Arrow
        size={100}
        color='#222222'
        style={{ transform: 'rotate(135deg)', marginBottom: '30px' }}
      /> */}
      <p>喜帖到啦～</p>
      <p>點擊打開吧！</p>
      <div
        ref={envelopeRef}
        onClick={() => setIsOpen(!isOpen)}
        className={styles.envelope}
      >
        <div
          style={triangle ? { borderWidth: `${triangle.height}px ${triangle.width}px 0 ${triangle.width}px` } : {}}
          className={`${styles.triangle} ${styles.top}${isOpen ? ` ${styles.open}` : ''}`}
        />
        <div
          style={triangle ? { borderWidth: `${triangle.height}px ${triangle.width}px 0 ${triangle.width}px` } : {}}
          className={`${styles.triangle} ${styles.inside}`}
        />
        {/* <div className={`${styles.triangle} ${styles.letter}`} /> */}
        <div
          style={triangle ? { borderWidth: `0 ${triangle.width}px ${triangle.height}px ${triangle.width}px` } : {}}
          className={`${styles.triangle} ${styles.bottom}`}
        />
      </div>
    </div>
  )
}

export default Envelope
