/**
 * @file src/app/page.js
 */

'use client'

import styles from './Invitation.module.scss'

import Content from './Content/Content'

const Invitation = () => {
  return (
    <div className={styles.wrapper}>
      <Content />
    </div>
  )
}

export default Invitation
