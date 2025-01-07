/**
 * @file src/components/Invitation/Invitation.js
 */

'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { register } from 'swiper/element/bundle'

import 'swiper/scss'
import 'swiper/scss/effect-fade'
import styles from './Gallery.module.scss'

import Heart from '@/components/Icons/Heart'

register()
gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  const isProd = process.env.NODE_ENV === 'production'
  const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
  const container = useRef(null)
  const swiperRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isSwiperInit, setIsSwiperInit] = useState(false)
  const slides = [
    '/2X0A4229.jpg',
    '/2X0A4275.jpg',
    '/2X0A4267.jpg',
    '/2X0A4286.jpg',
    '/2X0A4291.jpg',
    '/2X0A4294.jpg'
  ]

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      const swiperEl = swiperRef?.current
      const params = {
        speed: 800,
        effect: 'fade',
        slidesPerView: 1,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        fadeEffect: {
          crossFade: true
        },
        on: {
          init: () => {
            setIsSwiperInit(true)
          }
        }
      }

      Object.assign(swiperEl, params)
      swiperEl.initialize()
    }
  }, [isLoaded])

  useGSAP(
    () => {
      if (isLoaded && isSwiperInit) {
        const slider = document.getElementById('slider')

        gsap
          .to(`.${styles.gallery}`, {
            y: 0,
            ease: 'power4.inOut',
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: `.${styles.gallery}`
            }
          })

        gsap
          .to(slider, {
            ease: 'none',
            yPercent: 20,
            scrollTrigger: {
              scrub: true,
              start: 'top top',
              trigger: slider
            }
          })

        gsap
          .to(`.${styles.text}`, {
            ease: 'none',
            delay: 0.8,
            stagger: 0.2,
            duration: 0.2,
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
            scrollTrigger: {
              start: 'moddle bottom',
              trigger: slider
            }
          })
      }
    },
    { scope: container, dependencies: [isLoaded, isSwiperInit] }
  )

  return (
    <div
      ref={container}
      className={styles.wrapper}
    >
      <div className={styles.slider}>
        {isLoaded &&
          <div className={styles.gallery}>
            <swiper-container
              id='slider'
              ref={swiperRef}
              init='false'
            >
              {slides?.map(slide => {
                const image = isProd ? `${rootUrl}${slide}` : slide

                return (
                  <swiper-slide key={slide}>
                    <div className={styles.item}>
                      <figure
                        style={{ backgroundImage: `url(${image})` }}
                        className={styles.backgroundImage}
                      >
                        <Image
                          alt={slide}
                          src={slide}
                          fill={true}
                          sizes='100vw'
                        />
                      </figure>
                    </div>
                  </swiper-slide>
                )
              })}
            </swiper-container>
          </div>
        }
      </div>
      <div className={styles.names}>
        <p className={styles.text}>Groom & Bride</p>
        <h2 className={styles.text}>
          上哲
          <Heart
            size={50}
            color='#df3a3a'
            style={{ margin: '0 25px' }}
          />
          丞映
        </h2>
      </div>
    </div>
  )
}

export default Gallery
