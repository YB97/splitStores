import React, { PureComponent } from "react"
import Paper from "@material-ui/core/Paper"

import styles from "./login.module.scss"

class LoginPage extends PureComponent {
  render() {
    console.log("im login")
    return (
      <div className={styles["login-wrapper"]}>
        <Paper className={styles["login-form-wrapper"]}>Login</Paper>
      </div>
    )
  }
}

export default LoginPage
