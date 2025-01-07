'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'

import styles from './Cover.module.scss'

const Cover = () => {
  const isProd = process.env.NODE_ENV === 'production'
  const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
  const container = useRef(null)
  const coverImage = '/2X0A4321.jpg'
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    document.fonts.ready.then(() => {
      setIsLoaded(true)
    })
  }, [])

  useGSAP(
    () => {
      if (isLoaded) {
        gsap
          .to(`.${styles.text}`, {
            ease: 'power4.inOut',
            opacity: 1,
            duration: 0.4
          })

        gsap
          .to(`.${styles.clipper}.${styles.left}`, {
            ease: 'power4.inOut',
            delay: 2,
            clipPath: 'inset(0 100% 0 0)',
            duration: 2
          })

        gsap
          .to(`.${styles.clipper}.${styles.right}`, {
            ease: 'power4.inOut',
            delay: 2,
            clipPath: 'inset(0 0 0 100%)',
            duration: 2
          })

        gsap
          .to(`.${styles.loader}`, {
            ease: 'power3.inOut',
            height: '100%',
            duration: 2.5
          })

        gsap
          .to(`.${styles.loaderWrapper}, .${styles.preLoader}`, {
            ease: 'power3.inOut',
            delay: 2.1,
            opacity: 0,
            display: 'none',
            duration: 0.2
          })
      }
    },
    { scope: container, dependencies: [isLoaded] }
  )

  return (
    <div ref={container} className={styles.wrapper}>
      <div className={styles.preLoader}>
        <div className={styles.loaderWrapper}>
          <div className={styles.loader} />
        </div>
      </div>
      <div className={`${styles.clipper} ${styles.left}`}>
        <div className={styles.text}>FU & LIN</div>
      </div>
      <div className={`${styles.clipper} ${styles.right}`}>
        <div className={styles.text}>2025/3/8</div>
      </div>
      <div className={styles.content}>
        <div className={styles.cover}>
          <Image
            id='cover'
            alt='cover image'
            src={isProd ? `${rootUrl}${coverImage}` : coverImage}
            fill={true}
            priority={true}
          />
        </div>
      </div>
    </div>
  )
}

export default Cover
