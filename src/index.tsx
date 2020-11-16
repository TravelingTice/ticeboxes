import React from "react"

interface Props {
  text: string
}

export const Box = ({ text }: Props) => {
  return <div className="testbox">{text}</div>
}
