import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import Container from "@material-ui/core/Container";
import { inject, observer } from "mobx-react";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Button from "../../components/Button";
import Card from "../../components/Card";
import StyledSelect from "../../components/StyledSelect";
import { URI_TO_NEW_EXPERIMENT } from "../../constants";

import classes from "./experiments.module.scss";

@inject("stores")
@observer
class Experiments extends PureComponent {
  clickHandler = () => {
    this.props.history.push(URI_TO_NEW_EXPERIMENT);
  };

  render() {
    const { experiments } = this.props.stores.experiments;

    const dataMock = [
      {
        name: "Play",
        icon: "../../static/images/apps/facebook.png"
      },
      {
        name: "One",
        icon: "../../static/images/apps/facebook.png"
      }
    ];
    return (
      <div className={classes.exp}>
        <div className="header">
          <Header />
        </div>
        <Container>
          <div className={classes.select}>
            <StyledSelect
              data={dataMock}
              onClickHandler={val => console.log(val)}
              width="300px"
            />
          </div>
          <div className={classes.title}>
            <div className={classes["title-text"]}>
              <Title title="Experiments" />
            </div>
            {!Boolean(experiments.length) && (
              <Button click={this.clickHandler}>CREATE NEW EXPERIMENT</Button>
            )}
          </div>
          {/* {!experiments.length && (
            <div className={classes["no-exp-wrapper"]}>
              <strong className={classes["no-exp-text"]}>
                You don't have any experiments
              </strong>
              <Button click={this.clickHandler}>CREATE NEW EXPERIMENT</Button>
            </div>
          )} */}
          {!experiments.length && (
            <Card
              type="experiments"
              storeImgUrl="../../static/images/google-play.svg"
              onClickHandler={() => console.log("click")}
            />
          )}
        </Container>
      </div>
    );
  }
}

export default withRouter(Experiments);
