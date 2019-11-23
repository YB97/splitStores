import React from "react";
import Button from "@material-ui/core/Button";
import { ButtonGroup } from "@material-ui/core";
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
  children,
  disabled = false,
  isGroupButton = false,
  btns = []
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

  const StyledButtonGroup = withStyles({
    root: {
      backgroundColor: bg,
      color,
      "&:hover": {
        backgroundColor: darken(bg, 0.2)
      },
      "&:disabled": {
        color: "gray !important"
      }
    }
  })(ButtonGroup);

  return (
    <>
      {!isGroupButton ? (
        <StyledButton
          href={href}
          className={styles.button}
          onClick={click}
          variant={variant}
          size={size}
          disabled={disabled}
          fullWidth={fullWidth}
        >
          {children}
        </StyledButton>
      ) : (
        <StyledButtonGroup
          variant="contained"
          aria-label="full-width button group"
        >
          {btns.map(btn => (
            <StyledButton>
              <span className={styles['btn-content']}>
                {btn.name}
                <span className={styles["icon-wrapper"]}>
                  {btn.icon && <img src={btn.icon} className={styles.icon} />}
                </span>
              </span>
            </StyledButton>
          ))}
        </StyledButtonGroup>
      )}
    </>
  );
}
