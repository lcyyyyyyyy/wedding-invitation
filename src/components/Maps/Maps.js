import styles from './Maps.module.scss'

const Maps = () => {
  return (
    <div className={styles.wrapper}>
      <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.290662966507!2d121.2476206755211!3d24.95622357786689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468220d820c6dd5%3A0xd9f12f8f79608d0f!2z6Iqx55Sw55ub5LqL56-J5aSi6I6K5ZyS!5e0!3m2!1szh-TW!2stw!4v1735797632259!5m2!1szh-TW!2stw' allowFullScreen='' loading='lazy' referrerPolicy='no-referrer-when-downgrade' />
    </div>
  )
}

export default Maps
