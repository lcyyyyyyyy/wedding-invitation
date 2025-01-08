/**
 * @file src/components/Invitation/Invitation.js
 */

'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

import styles from './Content.module.scss'

import Star from '@/components/Icons/Star'
import KissMale from '@/components/Icons/KissMale'
import Champagne from '@/components/Icons/Champagne'
import KissFemale from '@/components/Icons/KissFemale'

gsap.registerPlugin(ScrollTrigger)

const Content = () => {
  const isProd = process.env.NODE_ENV === 'production'
  const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
  const container = useRef(null)
  const [image, setImage] = useState('/2X0A4512-750.jpg')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const windowWidth = window.innerWidth
    if (windowWidth > 560) setImage('/2X0A4512.jpg')
    setIsLoaded(true)
  }, [])

  useGSAP(
    () => {
      if (isLoaded) {
        const tl = gsap.timeline({
          scrollTrigger: {
            start: 'top bottom-=10%',
            trigger: `.${styles.wrapper}`
          }
        })

        tl
          .to(`.${styles.wrapper}`, {
            y: 0,
            ease: 'power4.out',
            delay: 0.6,
            opacity: 1,
            duration: 1
          })
          .to('.line', {
            ease: 'power4.inOut',
            delay: -1,
            stagger: 0.2,
            duration: 1,
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)'
          })
          .to(`.${styles.block}`, {
            y: 0,
            ease: 'power4.out',
            delay: -0.4,
            opacity: 1,
            duration: 1
          })
          .to(`.${styles.icon}`, {
            x: 0,
            ease: 'power4.out',
            delay: -0.4,
            opacity: 1,
            duration: 1
          })
          .to(`.${styles.info}`, {
            ease: 'power4.out',
            delay: -0.4,
            stagger: 0.2,
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
            duration: 1
          })

        gsap
          .to(`.${styles.image} img`, {
            ease: 'none',
            yPercent: 20,
            scrollTrigger: {
              scrub: true,
              start: 'top top',
              trigger: `.${styles.image} img`
            }
          })
      }
    },
    { scope: container, dependencies: [isLoaded] }
  )

  return (
    <div
      ref={container}
      className={styles.container}
    >
      <div className={styles.wrapper}>
        <div className={styles.image}>
          <Image
            alt={image}
            src={isProd ? `${rootUrl}${image}` : image}
            fill={true}
          />
        </div>
        <div className={styles.content}>
          <h2 className='line'>We Got Married!</h2>
          <h3 className='line'>特別的日子，希望有你的參與
            <Champagne
              size={46}
              color='#222222'
            />
          </h3>
          <div className={styles.names}>
            <div className={styles.block}>
              <h4>
                上哲
                <div className={`${styles.icon} ${styles.male}`}>
                  <KissMale
                    size={30}
                    color='#222222'
                  />
                </div>
              </h4>
              <h5>－ 男方家長 －</h5>
              <h5>傅阿松 ． 傅高金妹</h5>
              <h5>傅金寶 ． 陳秀貞</h5>
            </div>
            <div className={styles.block}>
              <h4>
                丞映
                <div className={`${styles.icon} ${styles.female}`}>
                  <KissFemale
                    size={30}
                    color='#222222'
                    style={{ transform: 'rotateY(180deg)' }}
                  />
                </div>
              </h4>
              <h5>－ 女方家長 －</h5>
              <h5>林溪川</h5>
              <h5>林錦祥 ． 陳麗蓮</h5>
            </div>
          </div>
          <div className={styles.info}>
            <Star
              id='star'
              size={30}
              color='#fefe8b'
            />
          </div>
          <p className={styles.info}>
            2025.3.8 (六), 中午12點 <span>( 11:30 入席 )</span>
          </p>
          <p className={styles.info}>
            花田盛事築夢莊園 <span>( 320桃園市中壢區普忠路618號 )</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Content
