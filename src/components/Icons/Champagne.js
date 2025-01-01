/**
 * @file src/components/Invitation/Content/Content.js
 * @link https://www.svgrepo.com/svg/452559/champagne
 */

const Champagne = ({
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
    stroke: color,
    strokeWidth: 6,
    strokeOpacity: 0.9,
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }

  const st2 = {
    stroke: color,
    strokeWidth: 14,
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
      <path d='M121.928 333.028C91.6435 323.922 67.8682 292.747 71.3367 287.133C79.1863 274.428 95.1628 245.232 134.228 209.737C152.465 193.167 176.219 188.562 195.932 178.198C207.021 172.369 224.312 145.785 235.31 141.367C241.852 138.739 260.161 156.197 255.318 162.215C209.928 218.615 243.379 191.48 202.974 261.072C188.95 285.23 152.577 317.605 132.4 333.028' style={st0} />
      <path opacity='0.503384' d='M192.209 256.541C187.28 254.988 165.929 240 158.474 240C156.956 240 81.1825 279.376 146.192 299.803' style={st1} />
      <path opacity='0.503384' d='M221.416 186.997C215.343 184.52 211.182 179.095 207.508 174.48' style={st2} />
      <path d='M301.515 109.114C296.672 104.942 291.035 101.025 290.955 97.7923C290.849 93.4559 298.561 86.5329 305.017 78.5171' style={st0} />
      <path d='M303.628 75.97C306.747 50.9969 344.693 79.8053 320.816 88.0816C316.635 99.3216 313.151 104.942 310.366 104.942' style={st0} />
      <path opacity='0.503384' d='M265.92 109.114C264.476 116.687 259.978 122.196 256.185 128.585' style={st1} />
      <path opacity='0.503384' d='M278.437 123.021C276.839 125.553 274.72 127.667 272.874 129.975' style={st1} />
      <path opacity='0.503384' d='M293.735 135.539C289.095 138.83 283.54 140.154 278.437 142.492' style={st1} />
    </svg>
  )
}

export default Champagne
