import { useEffect } from 'react'
import gsap from 'gsap'
import Link from 'next/link'
import Image from 'next/image'

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
      <Link href='/' className={styles.logo}>
        <Image
          alt='FU & LIN'
          src='/logo.svg'
          width={100}
          height={30}
          priority
        />
      </Link>
    </div>
  )
}

export default Logo