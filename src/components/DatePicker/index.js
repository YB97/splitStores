import "date-fns";
import React from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import DateFnsUtils from "@date-io/date-fns";
import { createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";

const StyledDatePicker = withStyles({
  root: {
    color: "#244BDD",
    "& .MuiInput-underline:after": {
      borderBottom: "2px solid #244BDD"
    },
    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
      borderBottom: "2px solid rgba(0, 0, 0, 0.42)"
    }
  }
})(KeyboardDatePicker);

const defaultMaterialTheme = createMuiTheme({
  palette: {
    primary: { main: "#244BDD" }
  }
});

function DatePicker({ label = "", onChange = date => {}, autoOk = false }) {
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const handleDateChange = date => {
    setSelectedDate(date);
    onChange(date);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <ThemeProvider theme={defaultMaterialTheme}>
          <StyledDatePicker
            disableToolbar
            variant="inline"
            format="MM.dd.yyyy"
            margin="normal"
            id="date-picker-inline"
            label={label}
            value={selectedDate}
            onChange={handleDateChange}
            autoOk={autoOk}
            KeyboardButtonProps={{
              "aria-label": "change date"
            }}
          />
        </ThemeProvider>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;
