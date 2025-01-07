import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import styles from './Closer.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Closer = () => {
  const images = ['/2X0A4470.jpg', '/2X0A4471.jpg', '/2X0A4472.jpg']
  const isProd = process.env.NODE_ENV === 'production'
  const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
  const container = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
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
      {images?.map(image => {
        return (
          <div key={image} className={styles.image}>
            <Image
              alt={image}
              src={isProd ? `${rootUrl}${image}` : image}
              fill={true}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Closer
