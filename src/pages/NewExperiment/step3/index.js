import React from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Grid
} from "@material-ui/core"

import Header from "../../../components/Header";
import Title from "../../../components/Title";
import Stepper from "../../../components/Stepper";
import Button from "../../../components/Button";
import TestingIconCard from "../../../components/TestingIconCard"
import { URI_TO_NEW_EXPERIMENT_STEP_3 } from "../../../constants";

import classes from "./step3.module.scss"

export default function NewExperiment() {
  const steps = ["set up", "details", "variations"];
  const history = useHistory();


  const onClickHandler = () => {
    history.push(URI_TO_NEW_EXPERIMENT_STEP_3);
  };


  return (
    <div className={classes.newexperiment}>
      <div className={classes.header}>
        <Header />
      </div>
      <Container>
        <Grid container justify="center">
          <Grid item sm={8} lg={6}>
            <div className={classes.wrapper}>
              <div className={classes["title-wrapper"]}>
                <Title title="Create new experiment" />
              </div>
              <Stepper activeStep={2} steps={steps} />

              <div className={classes["title-wrapper"]}>
                <Title title="Testing Icon on Landing page" />
              </div>
              <TestingIconCard variationName="Variant A"/>
              <TestingIconCard variationName="Variant B"/>

              <div className={classes.buttonWrap}>
                <Button click={onClickHandler}>Add new variation</Button>
                <Button click={onClickHandler}>Publish experiment</Button>
                <Button click={onClickHandler}>Save and publish later</Button>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
