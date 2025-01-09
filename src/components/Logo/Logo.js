/**
 * @file src/app/page.js
 */

import { useEffect } from 'react'
import gsap from 'gsap'

import styles from './Logo.module.scss'

const Logo = () => {

  useEffect(() => {
    gsap
      .to(`.${styles.wrapper}`, {
        delay: 3,
        opacity: 1,
        duration: 1
      })
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        FU&nbsp;&nbsp;&&nbsp;&nbsp;LIN
      </div>
    </div>
  )
}

export default Logo