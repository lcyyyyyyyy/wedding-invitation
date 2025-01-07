/**
 * @file src/components/Invitation/Envelope/Envelope.js
 */

const Arrow = ({
  size,
  color,
  style = {}
}) => {
  const st0 = {
    stroke: color,
    strokeWidth: 3,
    strokeMiterlimit: 10
  }

  return (
    <svg
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      style={style}
      stroke={color}
      viewBox='0 0 543.36 396.35'
    >
      <path style={st0} d='M1.26,269.69c51.39-78.73,131.96-121.33,206-108,39.76,7.16,101.38,34.72,112,87,15.35,75.61-84.51,160.88-137,144-46.67-15.01-65.45-113.87-41-182,31.78-88.53,143.98-145.88,281-142' />
      <polygon style={st0} points='540.35 40.1 404.8 2.13 436.52 135.15 540.35 40.1' />
    </svg>
  )
}

export default Arrow
