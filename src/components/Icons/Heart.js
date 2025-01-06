/**
 * @file src/components/Invitation/Content/Content.js
 * @link https://www.svgrepo.com/svg/452463/heart
 */

const Heart = ({
  size,
  color,
  style = {}
}) => {
  return (
    <svg
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      viewBox='0 0 400 400'
      style={style}
    >
      <path d='M179.981 276.772C164.375 267.266 161.18 262.061 147.634 248.36C66.1022 165.898 137.157 112.457 172.866 125.376C179.595 127.81 187.269 135.311 195.888 147.877C198.083 137.546 204.354 129.251 214.702 122.992C286.701 79.4431 320.679 175.189 251.306 237.353C234.603 252.325 207.881 277.281 196.844 287.597' stroke='#000000' strokeOpacity='0.9' strokeWidth='16' strokeLinecap='round' strokeLinejoin='round' fill={color} />
    </svg>
  )
}

export default Heart
