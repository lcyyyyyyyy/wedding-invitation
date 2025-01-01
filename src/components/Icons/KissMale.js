/**
 * @file src/components/Invitation/Content/Content.js
 * @link https://www.svgrepo.com/svg/452978/blow-a-kiss-male
 */

const KissMale = ({
  size,
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

  const st1 = {
    stroke: '#EB5757',
    strokeWidth: 16,
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
      <g id='SVGRepo_bgCarrier' strokeWidth='0' />
      <g id='SVGRepo_tracerCarrier' strokeLinecap='round' strokeLinejoin='round' />
      <g id='SVGRepo_iconCarrier'> <path d='M255.962 187.861C246.687 202.237 228.535 263.956 206.087 307.993' style={st0} /> <path d='M206.074 307.993C180.325 288.847 147.975 256.496 124.621 225.659' style={st0} /> <path d='M124.635 225.659C116.297 270.36 116.081 300.591 111.197 365.922' style={st0} /> <path d='M255.324 188.419C271.914 189.623 276.618 190.543 291.359 188.972' style={st0} /> <path d='M226.4 57.4394C169.856 20.2002 129.185 35.9782 113.298 46.3675C33.934 98.2782 73.6531 208.53 171.064 209.974C256.271 211.236 260.305 111.034 215.925 76.2003' style={st0} /> <path d='M208.372 161.648C221.462 153.915 240.472 151.466 230.9 160.162' style={st0} /> <path d='M230.905 160.162C244.697 171.039 219.76 172.523 208.501 166.457' style={st0} /> <path d='M228.524 109.222C224.979 120.135 218.077 121.07 207.463 113.463' style={st0} /> <path d='M194.683 115.408C194.145 126.557 182.207 131.742 171.946 126.557' style={st0} /> <path d='M325.022 177.327C326.472 169.151 335.419 147.294 323.439 142.502C314.703 139.008 316.987 160.585 313.942 157.54C311.062 154.66 314.293 147.374 309.193 143.294C307.391 141.852 303.608 140.934 301.278 141.711C286.143 146.756 320.703 173.008 325.022 177.327Z' style={st1} /> </g>
    </svg>
  )
}

export default KissMale
