import React from 'react'
import { createBootstrapClasses } from '../utils/createBootstrapClasses'
import { BoxProps } from './Box'

type PositionType = 'start' | 'center' | 'between' | 'evenly' | 'around' | 'end'

export type FlexProps = BoxProps & {
  'justify-content'?: PositionType
  'align-items'?: PositionType
  'flex-column'?: boolean
  style?: React.CSSProperties
}

export const Flex: React.FC<FlexProps> = (props) => {
  const classes = createBootstrapClasses(props)

  return (
    <div
      style={props.style || undefined}
      className={`d-flex ${classes.join(' ')}`}
    >
      {props.children}
    </div>
  )
}
