import React from "react";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import ErrorText from "../ErrorText";

const StyledInput = withStyles({
  root: {
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
  label,
  type,
  autoComplete,
  value,
  onChange,
  error = null,
  errorText = null,
  required
}) {
  return (
    <>
      <StyledInput
        label={label}
        type={type}
        autoComplete={autoComplete}
        margin="normal"
        variant="outlined"
        value={value}
        onChange={onChange}
        error={error}
        required={required}
      />
      {error && errorText && <ErrorText>{errorText}</ErrorText>}
    </>
  );
}

export default Input;
