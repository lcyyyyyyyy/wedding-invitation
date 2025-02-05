/**
 * @file src/app/page.js
 */

'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

import styles from './Date.module.scss'

import Line from '../Icons/Line'
import Lovestruck from '../Icons/Lovestruck'

gsap.registerPlugin(ScrollTrigger)

const Date = () => {
  const image = '/Drawing.webp'
  const isProd = process.env.NODE_ENV === 'production'
  const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
  const container = useRef(null)
  const [dates, setDates] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    let array = []
    for (let i = 0; i < 31; i++) {
      array?.push(i + 1)
    }

    setDates(array)
    setIsLoaded(true)
  }, [])

  useGSAP(
    () => {
      if (isLoaded) {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: `.${styles.wrapper}`
          }
        })

        tl
          .to(`.${styles.wrapper} h2`, {
            ease: 'power4.inOut',
            duration: 0.6,
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)'
          })
          .to(`.${styles.image}`, {
            ease: 'power4.inOut',
            opacity: 1,
            duration: 0.6
          })

        gsap
          .to(`.${styles.date} .${styles.icon} svg`, {
            y: 0,
            x: 0,
            ease: 'power4.inOut',
            delay: 0.6,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              start: 'top bottom-=20%',
              trigger: `.${styles.date}`,
              onEnter: () => {
                document.querySelector(`.${styles.date} path`).classList.add(styles.draw)
              }
            }
          })
      }
    },
    { scope: container, dependencies: [isLoaded] }
  )

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.wrapper}>
        <h2>Save The Date!</h2>
        <div className={styles.image}>
          <Image
            alt={image}
            src={isProd ? `${rootUrl}${image}` : image}
            fill={true}
            sizes='100vw'
          />
        </div>
        <div className={styles.date}>
          <h3>
            2025.3.8
            <Line
              size={200}
              color='#222222'
            />
          </h3>
          <div className={styles.td}>
            <p>一</p>
            <p>二</p>
            <p>三</p>
            <p>四</p>
            <p>五</p>
            <p>六</p>
            <p>日</p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            {dates?.map(date => {
              return (
                <p
                  key={date}
                  style={date === 8 ? { color: '#fff' } : {}}
                >
                  {date === 8 &&
                    <span className={styles.icon}>
                      <Lovestruck
                        size={60}
                        fill='#df3a3a'
                        color='#222222'
                      />
                    </span>
                  }
                  {date}
                </p>
              )
            })}
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
          </div>
          <h4>
            中午12:00
          </h4>
          <h4>
            <small>11:30入席</small>
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Date
