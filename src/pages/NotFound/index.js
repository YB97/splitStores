import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { withRouter } from "react-router-dom";

import Logo from "../../components/Logo";
import FiguredBg from "../../components/FiguredBg";

import classes from "./notfound.module.scss";

const StyledButton = withStyles({
  root: {
    color: "#fff",
    borderColor: "#fff",
    textTransform: "none",
    fontSize: "24px"
  }
})(Button);

class NotFound extends React.Component {
  handleClick() {
    this.props.history.push("/");
  };
  render() {
    return (
      <FiguredBg>
        <div className={classes.logo}>
          <Logo font="light" />
        </div>
        <div className={classes.banner}>
          <svg width="100%" viewBox="0 0 346 136" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M84.48 13.0078V78.9278H97.76V99.8878H84.48V125.008H59.84V99.8878H0V79.5678L55.68 13.0078H84.48ZM25.6 78.9278H59.84V37.6478L25.6 78.9278Z" fill="white"/>
            <path d="M332.449 13.0078V78.9278H345.729V99.8878H332.449V125.008H307.809V99.8878H247.969V79.5678L303.649 13.0078H332.449ZM273.569 78.9278H307.809V37.6478L273.569 78.9278Z" fill="white"/>
            <path d="M227.471 28.5665C214.04 2.52249 182.276 -7.54151 156.555 6.05849L205.243 100.375C230.963 86.7745 240.902 54.6105 227.471 28.5665Z" fill="white"/>
            <path d="M129.559 107.721C143.191 133.697 174.956 143.557 200.609 129.753L151.384 35.7773C125.731 49.5813 115.994 81.8133 129.559 107.721Z" fill="white"/>
          </svg>
        </div>
        <div className={classes.button}>
          <StyledButton variant="outlined" size="large" onClick={this.handleClick.bind(this)}>
            Go home
          </StyledButton>
        </div>
      </FiguredBg>
    );
  }
}

export default withRouter(NotFound);
