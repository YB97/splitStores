import React, { useEffect } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

import classes from "./select.module.scss";

const CustomInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3)
    },
    "& .MuiSelect-root.MuiInputBase-input": {
      alignItems: "center",
      justifyContent: "flex-start",
      display: "flex"
    }
  },
  input: {
    height: "40px",
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    "&:focus": {
      borderRadius: 4,
      borderColor: "#244BDD"
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    }
  }
}))(InputBase);

const useStyles = makeStyles(theme => ({
  margin: {
    margin: 0
  }
}));

function StyledSelect({
  title = "",
  label = "",
  width = "100%",
  data = [],
  onClickHandler = val => {},
  setAsDefault = "",
  noBlankValue = false,
  disabled = false
}) {
  // @ts-ignore
  const styles = useStyles();
  const [field, setField] = React.useState(setAsDefault);
  const handleChange = event => {
    setField(event.target.value);
    onClickHandler(event.target.value);
  };

  return (
    <>
      <span className={classes.title}>{title}</span>
      <FormControl className={styles.margin} style={{ width }}>
        {label && (
          <InputLabel id="demo-customized-select-label">{label}</InputLabel>
        )}
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={field}
          onChange={handleChange}
          input={<CustomInput />}
          disabled={disabled}
        >
          {!noBlankValue && (
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
          )}
          {data.map((item, idx) => (
            <MenuItem value={item.name} key={`${item.name} ${idx}`}>
              {item.icon && (
                <img className={classes.img} src={item.icon} alt="applogo" />
              )}
              <span className={classes.item}>{item.name}</span>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
}

export default StyledSelect;
