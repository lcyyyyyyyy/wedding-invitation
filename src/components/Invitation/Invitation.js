/**
 * @file src/app/page.js
 */

'use client'

import { useState } from 'react'

import styles from './Invitation.module.scss'

import Content from './Content/Content'
import Envelope from './Envelope/Envelope'

const Invitation = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={styles.wrapper}>
      <Content isOpen={isOpen} />
      <Envelope
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default Invitation
