/**
 * @file src/app/page.js
 */

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import styles from './HoldHands.module.scss'

gsap.registerPlugin(ScrollTrigger)

const HoldHands = () => {
  const isProd = process.env.NODE_ENV === 'production'
  const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
  const container = useRef(null)
  const [image, setImage] = useState('/2X0A4352-800.webp')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth > 560) setImage('/2X0A4352.webp')
    setIsLoaded(true)
  }, [])

  useGSAP(
    () => {
      if (isLoaded) {
        const image = `.${styles.image}`

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
              start: 'top top+=20%',
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
      <div className={styles.image}>
        <Image
          alt={image}
          src={isProd ? `${rootUrl}${image}` : image}
          fill={true}
        />
      </div>
    </div>
  )
}

export default HoldHands
