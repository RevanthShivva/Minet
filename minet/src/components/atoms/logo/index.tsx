import React from 'react'

export interface IconProps {
  source?: any,
  style?: React.CSSProperties;
}

export const Icons = (props: IconProps) => {
  let {source, style} = props
  return (
      <img src={source} alt="Logo"  style={style}></img>
  )
}