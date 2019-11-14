import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from "./button.module.scss";

export default function({
  bg = "#244BDD",
  color = "#fff",
  href = "",
  click = () => {},
  variant = "",
  size = "",
  fullWidth = false,
  children
}) {
  const StyledButton = withStyles({
    root: {
      backgroundColor: !variant && bg,
      color,
      padding: !size && "9px 25px",
      "&:hover": {
        backgroundColor: bg === "#244BDD" && "#1B3DBC"
      },
      "&:disabled": {
        color: "gray !important"
      }
    }
  })(Button);

  return (
    <StyledButton
      href={href}
      className={styles.button}
      onClick={click}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
    >
      {children}
    </StyledButton>
  );
}
