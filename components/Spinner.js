import React from 'react'
import Svg, { G, Circle, Path } from 'react-native-svg'

const Spinner = props => (
  <Svg width={20} height={20} viewBox="0 0 38 38" stroke={props.color === 'red' ? "#E2006A" : "#16A64D"} {...props}>
    <G
      transform="translate(1 1)"
      strokeWidth={2}
      fill="none"
      fillRule="evenodd"
    >
      <Circle strokeOpacity={0.5} cx={18} cy={18} r={18} />
      <Path d="M36 18c0-9.94-8.06-18-18-18"></Path>
    </G>
  </Svg>
)

export default Spinner;