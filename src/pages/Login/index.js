import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import { observer, inject } from "mobx-react";

import GradientBg from "../../components/GradientBg";
import Logo from "../../components/Logo";
import ErrorText from "../../components/ErrorText";
import validation from "../../helpers/validation";

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
})(TextField);

const StyledButton = withStyles({
  root: {
    backgroundColor: "#244BDD",
    color: "#fff",
    padding: "9px 25px",
    "&:hover": {
      backgroundColor: "#1B3DBC"
    }
  }
})(Button);

@inject("stores")
@observer
class LoginPage extends React.Component {
  submitHandler = event => {
    event.preventDefault();
  };

  state = {
    emailValidation: null
  };

  render() {
    const { email, password, setEmail, setPass } = this.props.stores.login;
    const isBtnDisabled =
      (this.state.emailValidation && !this.state.emailValidation.isValid) ||
      !email.length ||
      !password.length;

    return (
      <GradientBg>
        <Container>
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
                    value={email}
                    onChange={e => {
                      setEmail(e.target.value);
                      this.setState({
                        emailValidation: validation("email", e.target.value)
                      });
                    }}
                    error={
                      this.state.emailValidation &&
                      !this.state.emailValidation.isValid
                    }
                    required
                  />
                  {this.state.emailValidation &&
                    !this.state.emailValidation.isValid && (
                      <ErrorText>
                        {this.state.emailValidation.errorText}
                      </ErrorText>
                    )}
                </div>
                <div className={styles["input-wrapper"]}>
                  <StyledInput
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    margin="normal"
                    variant="outlined"
                    value={password}
                    onChange={e => setPass(e.target.value)}
                    required
                  />
                </div>
                <StyledButton
                  className={styles.button}
                  type="submit"
                  onClick={() => console.log("hello")}
                  href="/apps"
                  disabled={isBtnDisabled}
                >
                  log in
                </StyledButton>
              </form>
            </Paper>
            <span className={styles["login-small-text"]}>
              Do not have an account? <u>Sign In!</u>
            </span>
          </div>
        </Container>
      </GradientBg>
    );
  }
}

export default LoginPage;
