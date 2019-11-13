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
              <div className={classes.mainTitleWrapper}>
                <Title title="Create new experiment" />
              </div>
              <Stepper activeStep={2} steps={steps} />
              <div className={classes.titleWrapper}>
                <Title title="Testing Icon on Landing page" />
              </div>

              <div className={classes.cardWrapper}>
                <TestingIconCard variationName="Variant A" />
              </div>
              <div className={classes.cardWrapper}>
                <TestingIconCard variationName="Variant B" />
              </div>

              <div className={classes.buttonsWrap}>
                <div className={classes.fullwidthButton}>
                  <Button click={onClickHandler} variant="outlined" color="#E3603B" fullWidth>Add new variation</Button>
                </div>
                <div className={classes.butonGroupWrap}>
                  <Button click={onClickHandler} size="small">Publish experiment</Button>
                  <Button click={onClickHandler} bg="#B0B0B0;" size="small">Save and publish later</Button>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
