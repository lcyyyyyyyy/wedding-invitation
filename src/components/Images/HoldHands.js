import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import localFont from 'next/font/local'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import styles from './HoldHands.module.scss'

const AlohaMagazineLight = localFont({ src: '../../../public/fonts/AlohaMagazine-Light.ttf' })

gsap.registerPlugin(ScrollTrigger)

const HoldHands = () => {
  const isProd = process.env.NODE_ENV === 'production'
  const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
  const imageRef = useRef(null)
  const container = useRef(null)
  const [image, setImage] = useState('/2X0A4352-800.jpg')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth > 560) setImage('/2X0A4352.jpg')
    setIsLoaded(true)
  }, [])

  useGSAP(
    () => {
      if (isLoaded) {
        const image = imageRef?.current

        gsap
          .to(image, {
            ease: 'power4.inOut',
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: image
            }
          })

        gsap
          .to(image, {
            ease: 'none',
            yPercent: 20,
            scrollTrigger: {
              scrub: true,
              start: 'top top',
              trigger: image
            }
          })

        gsap
          .to(`.${styles.text} span`, {
            y: 0,
            ease: 'power3.inOut',
            opacity: 1,
            stagger: 0.05,
            scrollTrigger: {
              trigger: image
            }
          })
      }
    },
    { scope: container, dependencies: [isLoaded] }
  )

  return (
    <div
      ref={container}
      className={styles.wrapper}
    >
      <Image
        ref={imageRef}
        alt={image}
        src={isProd ? `${rootUrl}${image}` : image}
        fill={true}
        sizes='100vw'
      />
      <div className={`${styles.text} ${AlohaMagazineLight.className}`}>
        <div className={styles.line}>
          <span>J</span>
          <span>O</span>
          <span>Y</span>
          <span>F</span>
          <span>U</span>
          <span>L</span>
          <span>L</span>
          <span>Y</span>
          &nbsp;
          &nbsp;
          <span>I</span>
          <span>N</span>
          <span>V</span>
          <span>I</span>
          <span>T</span>
          <span>E</span>
        </div>
        <div className={styles.line}>
          <span>Y</span>
          <span>O</span>
          <span>U</span>
        </div>
        <div className={styles.line}>
          <span>T</span>
          <span>O</span>
          &nbsp;
          &nbsp;
          <span>O</span>
          <span>U</span>
          <span>R</span>
        </div>
        <div className={styles.line}>
          <span>W</span>
          <span>E</span>
          <span>D</span>
          <span>D</span>
          <span>I</span>
          <span>N</span>
          <span>G</span>
        </div>
      </div>
    </div>
  )
}

export default HoldHands
