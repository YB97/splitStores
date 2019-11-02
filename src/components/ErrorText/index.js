import React from "react";

import styles from "./styles.module.scss";

function ErrorText({ children }) {
  return <small className={styles["error-text"]}>{children}</small>;
}

export default ErrorText;
