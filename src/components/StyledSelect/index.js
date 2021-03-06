import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

import classes from "./select.module.scss";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: 0
  }
}));

function StyledSelect({
  title = "",
  disabled = false,
  label = "",
  width = "100%",
  data = [],
  onClickHandler = val => {},
  setAsDefault = "",
  noBlankValue = false,
  titleCenter = false,
  error = null
}) {
  // @ts-ignore
  const styles = useStyles();
  const [field, setField] = React.useState(setAsDefault);
  const handleChange = event => {
    setField(event.target.value);
    onClickHandler(event.target.value);
  };

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
      border: `1px solid ${error ? "#FF0000" : "#ced4da"}`,
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      "&:focus": {
        borderRadius: 4,
        borderColor: "#244BDD"
      }
    }
  }))(InputBase);

  return (
    <>
      {title && (
        <span
          className={classes.title}
          style={titleCenter ? { textAlign: "center" } : {}}
        >
          {title}
        </span>
      )}
      <FormControl className={styles.margin} style={{ width }}>
        {label && (
          <InputLabel id="demo-customized-select-label">{label}</InputLabel>
        )}
        <Select
          labelId={"demo-customized-select-label"}
          id={!error ? "demo-customized-select" : "demo-simple-select-error"}
          value={field}
          onChange={handleChange}
          input={<CustomInput />}
          disabled={disabled}
          error={error}
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
