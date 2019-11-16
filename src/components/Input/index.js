import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import ErrorText from "../ErrorText";

import classes from "./input.module.scss";

const StyledInput = withStyles({
  root: {
    width: "100%",
    margin: "0",
    backgroundColor: "white",
    "& label.Mui-focused": {
      color: "#244BDD"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#939393"
      },
      "&.Mui-focused fieldset": {
        border: "1px solid #244BDD"
      }
    }
  }
})(TextField);

function Input({
  label = "",
  title = "",
  titleCentered = false,
  helpText = "",
  type = "text",
  autoComplete = "",
  value = "",
  placeholder = "",
  onChange = () => {},
  error = null,
  errorText = null,
  required = false,
  disabled = false,
  multiline = false,
  rows = "4"
  // defaultValue
}) {
  return (
    <>
      {title && (
        <div
          className={
            classes.title + " " + (titleCentered && classes.titleCentered)
          }
        >
          {title}
        </div>
      )}
      <StyledInput
        label={label}
        type={type}
        autoComplete={autoComplete}
        margin="normal"
        variant="outlined"
        value={value}
        onChange={onChange}
        error={error}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        multiline={multiline}
        rows={rows}
        // defaultValue={defaultValue}
      />
      {helpText && !error && (
        <span className={classes["help-text"]}>{helpText}</span>
      )}
      {error && errorText && <ErrorText>{errorText}</ErrorText>}
    </>
  );
}

export default Input;
