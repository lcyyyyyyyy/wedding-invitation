import Image from 'next/image'

import styles from './RecordPlayer.module.scss'
import { useRef, useState, useEffect } from 'react'

const RecordPlayer = () => {
  const audio = '/Sunny.mp3'
  const cover = '/Rocco-Sunny.png'
  const isProd = process.env.NODE_ENV === 'production'
  const rootUrl = process.env.NEXT_PUBLIC_ROOT_URL
  const audioRef = useRef(null)
  const playerRef = useRef(null)
  const [paused, setPaused] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      playerRef.current.style.opacity = 1
    }, 5000)
  }, [])

  useEffect(() => {
    const playerAudio = audioRef?.current
    const playerElement = playerRef?.current
    if (paused) {
      playerAudio?.pause()
      playerElement.style.animationPlayState = 'paused'
    }
    else {
      playerAudio?.play()
      playerElement.style.animationPlayState = 'running'
    }
  }, [paused])

  return (
    <div className={styles.wrapper}>
      <div
        ref={playerRef}
        onClick={() => setPaused(!paused)}
        className={styles.player}
      >
        <div className={styles.image}>
          <Image
            alt={cover}
            src={isProd ? `${rootUrl}${cover}` : cover}
            fill={true}
            sizes='(max-width: 640px) 30px, 50px'
          />
          <div className={styles.hole} />
        </div>
      </div>
      <audio
        ref={audioRef}
        src={isProd ? `${rootUrl}${audio}` : audio}
        loop={true}
      />
    </div>
  )
}

export default RecordPlayer
