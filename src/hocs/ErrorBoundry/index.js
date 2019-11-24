import React, { PureComponent } from "react";
import FiguredBg from "../../components/FiguredBg";

import classes from "./errorBoundry.module.scss";

class ErrorBoundry extends PureComponent {
  state = {
    hasError: false
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return (
          <FiguredBg>
            <div className={classes.banner}>
              Ooops... Something went wrong
            </div>
          </FiguredBg>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
