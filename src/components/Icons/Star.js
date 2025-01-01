/**
 * @file src/components/Invitation/Content/Content.js
 * @link https://www.svgrepo.com/svg/452412/pentagram
 */

const Star = ({
  size,
  color,
  style
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
      <path d='M97.5196 331.901C112.889 287.72 128.979 240.626 145.791 190.617C162.602 140.609 177.204 96.4029 189.596 58C219.453 145.36 235.625 197.306 238.112 213.836C241.842 238.631 275.21 335.628 266.731 342.576C258.253 349.523 182.583 269.188 163.655 245.295C144.728 221.401 73.981 144.715 80.4117 144.715C83.8675 144.715 150.196 138.456 210.882 139.304C263.124 140.035 310.446 147.098 318.482 155.546C332.706 170.5 198.729 243.235 183.445 255.322C168.161 267.408 97.4268 322.406 85.7124 331.901' stroke='#000000' strokeOpacity='0.9' strokeWidth='16' strokeLinecap='round' strokeLinejoin='round' fill={color} />
    </svg>
  )
}

export default Star
