/**
 * @file src/components/Invitation/Envelope/Envelope.js
 * @link https://www.svgrepo.com/svg/453299/direction
 */

const Arrow = ({
  size,
  color,
  style
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
      viewBox='0 0 400 400'
      style={style}
    >
      <path d="M49 310.784C49 310.784 55.8767 201.811 81.9121 196.645C107.948 191.48 169.612 267.296 188.066 260.808C206.52 254.321 194.058 155.388 217.361 148.612C235.914 143.216 266.26 215.58 283.99 206.113C301.721 196.645 288.02 158.236 300.978 139.676C313.937 121.115 336.988 111.221 350.241 111.221" style={st0} />
      <path d="M325.961 89.2161C325.961 89.2161 346.799 108.461 350.278 111.319C353.757 114.177 343.558 133.629 343.558 144.608" style={st0} />
    </svg>
  )
}

export default Arrow
