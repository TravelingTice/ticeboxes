import React from "react"

interface Props {
  text: string
}

export const Box: React.FC<Props> = ({ text }) => {
  return <div className="testbox">{text}</div>
}
