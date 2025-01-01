/**
 * @file src/components/Invitation/Invitation.js
 */

'use client'

import { useRef, useState, useEffect } from 'react'
import gsap from 'gsap'
import Image from 'next/image'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

import 'swiper/scss'
import 'swiper/scss/effect-fade'
import styles from './Gallery.module.scss'

gsap.registerPlugin(ScrollTrigger)

const Gallery = () => {
  const container = useRef(null)
  const swiperRef = useRef(null)
  const galleryRef = useRef(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [windowHeight, setWindowHeight] = useState(0)
  const [isSwiperInit, setIsSwiperInit] = useState(false)
  const slides = [
    '/2X0A4229.jpg',
    '/2X0A4275.jpg',
    '/2X0A4267.jpg',
    '/2X0A4286.jpg',
    '/2X0A4291.jpg'
  ]

  const params = {
    loop: true,
    speed: 800,
    effect: 'fade',
    modules: [Autoplay, EffectFade],
    slidesPerView: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true
    },
    fadeEffect: {
      crossFade: true
    }
  }

  const onInit = () => {
    setIsSwiperInit(true)
  }

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    if (isLoaded) {
      const swiperEl = swiperRef?.current
      setWindowHeight(swiperEl?.clientHeight)
    }
  }, [isLoaded])

  useGSAP(
    () => {
      if (isLoaded && isSwiperInit) {
        const slider = document.getElementById('slider')

        gsap
          .to(`.${styles.gallery}`, {
            ease: 'power4.inOut',
            duration: 2,
            clipPath: 'polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)',
            scrollTrigger: {
              start: 'moddle bottom',
              trigger: `.${styles.gallery}`
            },
            onComplete: () => {
              swiperRef?.current?.swiper?.autoplay?.start()
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
      }
    },
    { scope: container, dependencies: [isLoaded, isSwiperInit] }
  )

  return (
    <div
      ref={container}
      className={styles.wrapper}
    >
      {isLoaded &&
        <div
          ref={galleryRef}
          className={styles.gallery}
          style={{
            width: `${windowHeight * 0.66}px`,
            borderRadius: `${windowHeight * 0.5}px ${windowHeight * 0.5}px 0 0`
          }}
        >
          <Swiper
            id='slider'
            ref={swiperRef}
            onInit={onInit}
            {...params}
          >
            {slides?.map(slide => {
              return (
                <SwiperSlide key={slide}>
                  <div className={styles.item}>
                    <figure
                      style={{ backgroundImage: `url(${slide})` }}
                      className={styles.backgroundImage}
                    >
                      <Image
                        alt={slide}
                        src={slide}
                        fill={true}
                        sizes='100%'
                      />
                    </figure>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      }
    </div>
  )
}

export default Gallery
