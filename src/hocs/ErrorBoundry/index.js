import React, { PureComponent } from "react";

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
      return <div>Fatal Error</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundry;
