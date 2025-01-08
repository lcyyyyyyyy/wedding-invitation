import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import styles from './Closer.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Closer = () => {
  const [images, setImages] = useState(['/2X0A4470-800.jpg', '/2X0A4471-800.jpg', '/2X0A4472-800.jpg'])
  const isProd = process.env.NODE_ENV === 'production'
  const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
  const container = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth > 560) setImages(['/2X0A4470.jpg', '/2X0A4471.jpg', '/2X0A4472.jpg'])
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
              sizes='100vw'
            />
          </div>
        )
      })}
    </div>
  )
}

export default Closer
