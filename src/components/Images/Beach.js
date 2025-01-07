import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import styles from './Beach.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Beach = () => {
  const images = ['/2X0A4645.jpg', '/2X0A4655.jpg', '/2X0A4659.jpg', '/2X0A4647.jpg']
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
        gsap
          .to(`.${styles.image}`, {
            ease: 'power4.inOut',
            stagger: 0.1,
            duration: 1,
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
            scrollTrigger: {
              start: 'top bottom-=20%',
              trigger: `.${styles.image}`
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
              sizes='(max-width: 480px) 400px, (max-width: 640px) 600px, 100vw'
            />
          </div>
        )
      })}
    </div>
  )
}

export default Beach
