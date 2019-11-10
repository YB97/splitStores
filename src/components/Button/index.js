import React from "react"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import styles from "./button.module.scss"

export default function({
  bg = "#244BDD",
  color = "#fff",
  href = "",
  click = () => {},
  variant = "",
  children
}) {
  const StyledButton = withStyles({
    root: {
      backgroundColor: bg,
      color,
      padding: "9px 25px",
      "&:hover": {
        backgroundColor: "#1B3DBC"
      }
    }
  })(Button)

  return (
    <StyledButton href={href} className={styles.button} onClick={click}>
      {children}
    </StyledButton>
  )
}
