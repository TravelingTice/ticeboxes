import React from 'react'
import { createBootstrapClasses } from '../utils/createBootstrapClasses'

type StringNumber = string | number

export interface BoxProps {
  m?: StringNumber
  mt?: StringNumber
  mb?: StringNumber
  ml?: StringNumber
  mr?: StringNumber
  my?: StringNumber
  mx?: StringNumber
  p?: StringNumber
  pt?: StringNumber
  pb?: StringNumber
  pl?: StringNumber
  pr?: StringNumber
  py?: StringNumber
  px?: StringNumber
  border?: boolean
  h?: StringNumber
  w?: StringNumber
  'text-center'?: boolean
  'text-left'?: boolean
  'text-right'?: boolean
  style?: React.CSSProperties
  className?: string
}

export const Box: React.FC<BoxProps> = (props) => {
  const classes = createBootstrapClasses(props)

  return (
    <div style={props.style || undefined} className={classes.join(' ')}>
      {props.children}
    </div>
  )
}
