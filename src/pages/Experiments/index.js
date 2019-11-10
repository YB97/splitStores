import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { URI_TO_NEW_EXPERIMENT } from "../../constants";

import classes from "./experiments.module.scss";

class Experiments extends PureComponent {
  clickHandler = () => {
    this.props.history.push(URI_TO_NEW_EXPERIMENT);
  };

  render() {
    return (
      <div className={classes.exp}>
        <div className="header">
          <Header />
        </div>
        <Container>
          <div className={classes.title}>
            <div className={classes["title-text"]}>
              <Title title="Experiments" />
            </div>
            <Button click={this.clickHandler}>CREATE NEW EXPERIMENT</Button>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(Experiments);
