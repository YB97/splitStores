import React from "react"
import Paper from "@material-ui/core/Paper"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { withStyles } from "@material-ui/core/styles"
import { observer } from "mobx-react"

import GradientBg from "../../components/GradientBg"
import Logo from "../../components/Logo"

import styles from "./login.module.scss";

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
})(TextField)

const StyledButton = withStyles({
  root: {
    backgroundColor: "#244BDD",
    color: "#fff",
    padding: "9px 25px",
    "&:hover": {
      backgroundColor: "#1B3DBC"
    }
  }
})(Button)

@observer
class LoginPage extends React.Component {
  submitHandler = event => {
    event.preventDefault();
  };

  render() {
    return (
      <GradientBg>
        <div className={styles["login-wrapper"]}>
          <div className={styles.logo}>
            <Logo font="light" />
          </div>
          <Paper className={styles["login-form-wrapper"]}>
            <h2 className={styles.H2}>Log in Split Stores</h2>
            <form onSubmit={() => this.submitHandler(event)}>
              <div className={styles["input-wrapper"]}>
                <StyledInput
                  label="E-mail"
                  type="email"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  required
                />
                <StyledInput
                  id="outlined-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  required
                />
              </div>
              <StyledButton
                className={styles.button}
                type="submit"
                onClick={() => console.log("hello")}
              >
                log in
              </StyledButton>
            </form>
          </Paper>
          <span className={styles["login-small-text"]}>
            Do not have an account? <u>Sign In!></u>
          </span>
        </div>
      </GradientBg>
    )
  }
}

export default LoginPage
