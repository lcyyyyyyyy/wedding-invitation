/**
 * @file src/components/Date/Date.js
 */

const Line = ({
  size,
  color,
  style = {}
}) => {
  return (
    <svg
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      style={style}
      viewBox='0 0 852.09 65.52'
    >
      <path d='M.08,65.03C145.85,40.78,306.42,21.04,480.08,10.03,611.57,1.69,735.92-.7,852.08,1.03' stroke={color} strokeWidth={5} strokeMiterlimit={10} />
    </svg>
  )
}

export default Line
