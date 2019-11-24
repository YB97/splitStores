import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { ButtonGroup, Popover, Box, Typography } from "@material-ui/core";
import { withStyles, darken, makeStyles } from "@material-ui/core/styles";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";

import styles from "./button.module.scss";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

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
  btns = [],
  withPopover = false,
  popoverContent = "",
  ...props
}) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = event => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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
      {!isGroupButton && !withPopover && (
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
      )}
      {isGroupButton && (
        <StyledButtonGroup
          variant="contained"
          aria-label="full-width button group"
        >
          {btns.map(btn => (
            <StyledButton key={`${btn.name}`} onClick={btn.onClick}>
              <span className={styles["btn-content"]}>
                {btn.name}
                <span className={styles["icon-wrapper"]}>
                  {btn.icon && <img src={btn.icon} className={styles.icon} />}
                </span>
              </span>
            </StyledButton>
          ))}
        </StyledButtonGroup>
      )}
      {withPopover && (
        <div>
          <Button
            aria-describedby={id}
            variant="contained"
            onClick={handleClick}
          >
            {children}
          </Button>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <Typography className={classes.typography}>
              {popoverContent}
            </Typography>
          </Popover>
        </div>
      )}
    </>
  );
}
