import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import styles from './HoldHands.module.scss'

gsap.registerPlugin(ScrollTrigger)

const HoldHands = () => {
  const image = '/2X0A4352.jpg'
  const isProd = process.env.NODE_ENV === 'production'
  const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
  const imageRef = useRef(null)
  const container = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
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
      />
    </div>
  )
}

export default HoldHands
