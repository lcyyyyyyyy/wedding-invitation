/**
 * @file src/components/Invitation/Invitation.js
 */

'use client'

import styles from './Content.module.scss'

import Star from '@/components/Icons/Star'
import KissMale from '@/components/Icons/KissMale'
import Champagne from '@/components/Icons/Champagne'
import KissFemale from '@/components/Icons/KissFemale'

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <h2>We Got Married!</h2>
      <h3>重要的日子，希望有你的參與
        <Champagne
          size={46}
          color='#222222'
        />
      </h3>
      <div className={styles.names}>
        <div className={styles.block}>
          <h4>
            上哲
            <KissMale
              size={30}
              color='#222222'
              style={{ right: '-70px' }}
            />
          </h4>
          <h5>傅</h5>
          <h5>傅金寶 ． 陳秀貞</h5>
        </div>
        <span className={styles.and}>&</span>
        <div className={styles.block}>
          <h4>
            丞映
            <KissFemale
              size={30}
              color='#222222'
              style={{ left: '-70px', transform: 'rotateY(180deg)' }}
            />
          </h4>
          <h5>林</h5>
          <h5>林錦祥 ． 陳麗蓮</h5>
        </div>
      </div>
      <Star
        size={30}
        color='#fefe8b'
      />
      <p>
        2025.3.8, 12pm <span>( 11:30 入場 )</span>
      </p>
      <p>
        花田盛事築夢莊園 <span>( 320桃園市中壢區普忠路618號 )</span>
      </p>
    </div>
  )
}

export default Content
