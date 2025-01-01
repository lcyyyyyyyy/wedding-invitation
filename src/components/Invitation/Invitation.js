/**
 * @file src/app/page.js
 */

'use client'

import styles from './Invitation.module.scss'

import Content from './Content/Content'
import Gallery from './Gallery/Gallery'

const Invitation = () => {
  return (
    <div className={styles.wrapper}>
      <Gallery />
      <Content />
    </div>
  )
}

export default Invitation
