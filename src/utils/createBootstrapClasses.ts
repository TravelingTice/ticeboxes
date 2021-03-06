import { BoxProps } from "../components/Box"

export const createBootstrapClasses = (props: BoxProps): string[] => {
  const classes: string[] = []

  Object.keys(props).forEach((prop) => {
    const skipProps = ["children", "style", "className", "id"]
    if (skipProps.includes(prop)) return

    const value = props[prop]

    if (typeof value === "boolean") {
      classes.push(prop)
    } else {
      classes.push(`${prop}-${value}`)
    }
  })

  return classes
}
