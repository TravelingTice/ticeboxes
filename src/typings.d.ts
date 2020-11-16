declare interface BoxProps {
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
  "text-center"?: boolean
  "text-left"?: boolean
  "text-right"?: boolean
  style?: CSSProperties
  className?: string
}

type PositionType = "start" | "center" | "between" | "evenly" | "around" | "end"

declare type FlexProps = BoxProps & {
  "justify-content"?: PositionType
  "align-items"?: PositionType
  "flex-column"?: boolean
}
