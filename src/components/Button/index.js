import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles, darken } from "@material-ui/core/styles";

import styles from "./button.module.scss";

export default function({
  bg = "#244BDD",
  color = "#fff",
  href = "",
  click = () => {},
  variant = null,
  size = "small",
  fullWidth = false,
  children
}) {
  const StyledButton = withStyles({
    root: {
      backgroundColor: !variant && bg,
      color,
      border: `1px solid ${variant === "outlined" && color}`,
      padding: !size && "9px 25px",
      "&:hover": {
        backgroundColor:
          (!variant && darken(bg, 0.2)) || (variant === "outlined" && "#fff")
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
