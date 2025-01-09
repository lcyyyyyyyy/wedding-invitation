/**
 * @file src/app/page.js
 */

'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

import styles from './Date.module.scss'

import Line from '../Icons/Line'
import Lovestruck from '../Icons/Lovestruck'

gsap.registerPlugin(ScrollTrigger)

const Date = () => {
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
        const tl = gsap.timeline({
          scrollTrigger: {
            start: 'top bottom-=20%',
            trigger: `.${styles.wrapper}`,
            onEnter: () => {
              document.querySelector(`.${styles.wrapper} path`).classList.add(styles.draw)
            }
          }
        })

        tl
          .to(`.${styles.wrapper} .${styles.icon} svg`, {
            y: 0,
            x: 0,
            ease: 'power4.inOut',
            delay: 0.6,
            opacity: 1,
            duration: 1
          })
      }
    },
    { scope: container, dependencies: [isLoaded] }
  )

  return (
    <div ref={container} className={styles.container}>
      <div className={styles.wrapper}>
        <h2>
          2025.3.8
          <Line
            size={200}
            color='#222222'
          />
        </h2>
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
        <h3>
          中午12:00
        </h3>
        <h3>
          <small>11:30入席</small>
        </h3>
      </div>
    </div>
  )
}

export default Date
