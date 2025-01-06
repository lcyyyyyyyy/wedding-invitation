/**
 * @file src/components/Date/Date.js
 * @link https://www.svgrepo.com/svg/452469/lovestruck
 */

const Lovestruck = ({
  size,
  fill,
  color,
  style = {}
}) => {
  const st0 = {
    stroke: color,
    strokeWidth: 16,
    strokeOpacity: 0.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }

  return (
    <svg
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      style={style}
      stroke={color}
      viewBox='0 0 400 400'
    >
      <path d='M171.223 268.434C155.617 258.928 152.422 253.723 138.876 240.022C57.3444 157.56 128.4 104.119 164.108 117.038C170.838 119.473 178.512 126.973 187.131 139.539C189.325 129.208 195.596 120.913 205.944 114.654C277.944 71.1053 311.921 166.851 242.549 229.015C225.845 243.988 199.123 268.943 188.086 279.259' style={st0} fill={fill} />
      <path d='M309.316 311.732C271.404 277.617 237.148 239.571 203.477 201.082' style={st0} />
      <path d='M124.097 116.892C110.051 104.765 100.489 93.3393 86.8125 78.4053' style={st0} />
      <path d='M82.7305 109.676C77.5045 61.1192 101.381 76.9653 120.487 85.1114' style={st0} />
      <path d='M295.294 300.757C295.407 304.728 293.815 326.819 285.168 324.836C264.566 320.113 250.952 274.631 275.796 270.486C316.252 263.738 337.259 299.531 293.043 296.285' style={st0} />
    </svg>
  )
}

export default Lovestruck
