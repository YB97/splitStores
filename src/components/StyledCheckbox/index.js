import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const CustomCheckbox = withStyles({
  root: {
    color: "#C4C4C4",
    border: "1px",
    "&$checked": {
      color: "#244BDD"
    },
    "& .MuiIconButton-label": {
      color: "#244BDD"
    },
    "& .MuiTouchRipple-root": {
      color: "#244BDD"
    }
  }
})(props => <Checkbox color="default" {...props} />);

function StyledCheckbox({
  label = "Default",
  checked = false,
  onChange = () => {}
}) {
  return (
    <FormControlLabel
      control={
        <CustomCheckbox
          checked={checked}
          onChange={onChange}
          value="checkedG"
        />
      }
      label={label}
    />
  );
}

export default StyledCheckbox;
