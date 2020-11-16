import React from "react"
import createBootstrapClasses from "../utils/createBootstrapClasses"

const Box: React.FC<BoxProps> = (props) => {
  const classes = createBootstrapClasses(props)

  return (
    <div style={props.style || undefined} className={classes.join(" ")}>
      {props.children}
    </div>
  )
}

export default Box
