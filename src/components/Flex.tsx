import React from "react"
import createBootstrapClasses from "../utils/createBootstrapClasses"

const Flex: React.FC<FlexProps> = (props) => {
  const classes = createBootstrapClasses(props)

  return (
    <div
      style={props.style || undefined}
      className={`d-flex ${classes.join(" ")}`}
    >
      {props.children}
    </div>
  )
}

export default Flex
