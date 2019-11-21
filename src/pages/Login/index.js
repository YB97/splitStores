import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";
import { observer, inject } from "mobx-react";

import Spinner from "../../components/Spinner";
import GradientBg from "../../components/GradientBg";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import validation from "../../helpers/validation";

import { URI_TO_APPS, URI_TO_REG } from "../../constants";

import styles from "./login.module.scss";

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
  state = {
    emailValidation: null
  };

  submitHandler = event => {
    this.props.stores.setLoading(true);
    event.preventDefault();
    this.props.stores.login
      .setAuth()
      .then(() => {
        this.props.history.push(URI_TO_APPS);
      })
      .catch(e => {
        console.log(e);
      })
      .finally(() => {
        this.props.stores.setLoading(false);
      });
  };

  signUpClickHandler = () => {
    this.props.history.push(URI_TO_REG);
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
              <form onSubmit={this.submitHandler}>
                <div className={styles["input-wrapper"]}>
                  <Input
                    label="E-mail"
                    type="email"
                    value={email}
                    autoComplete="email"
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
                    errorText={
                      this.state.emailValidation &&
                      !this.state.emailValidation.isValid &&
                      this.state.emailValidation.errorText
                    }
                    required
                  />
                </div>
                <div className={styles["input-wrapper"]}>
                  <Input
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPass(e.target.value)}
                    required
                  />
                </div>
                <div className="button">
                  <StyledButton
                    className={styles.button}
                    type="submit"
                    onClick={() => {}}
                    disabled={isBtnDisabled}
                  >
                    <Spinner text>sign in</Spinner>
                  </StyledButton>
                </div>
              </form>
            </Paper>
            <span className={styles["login-small-text"]}>
              Do not have an account?&nbsp;
              <a
                className={styles["link-text"]}
                onClick={this.signUpClickHandler}
              >
                Sign Up!
              </a>
            </span>
          </div>
        </Container>
      </GradientBg>
    );
  }
}

export default withRouter(LoginPage);
