import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";

import Header from "../../../components/Header";
import Title from "../../../components/Title";
import Stepper from "../../../components/Stepper";
import Input from "../../../components/Input";
import StyledCheckbox from "../../../components/StyledCheckbox";

import classes from "./step2.module.scss";

function NewExperimentStep2() {
  const steps = ["set up", "details", "variations"];
  const [appIsFree, setAppIsFree] = useState(true);

  return (
    <>
      <div>
        <Header />
      </div>
      <Container>
        <Grid container justify="center">
          <Grid item sm={8} lg={6}>
            <div className={classes.wrapper}>
              <div className={classes["title-wrapper"]}>
                <Title title="Create new experiment" />
              </div>
              <Stepper activeStep={1} steps={steps} />
              <div className={classes["subtitle"]}>
                {/* TODO: Icon, Landing Page брать из стора!! */}
                <span>Testing Icon on Landing page</span>
              </div>
              <div className={classes["input-wrapper"]}>
                <Input
                  label="App Store App name"
                  onChange={e => console.log(e.target.value)}
                  helpText="Specify the app name that you want users to see on the experiment page"
                />
              </div>
              <div className={classes["input-wrapper"]}>
                <Input
                  label="Developer name"
                  onChange={e => console.log(e.target.value)}
                />
              </div>
              <div className={classes["label"]}>Price</div>
              <StyledCheckbox
                label="App is free"
                checked={appIsFree}
                onChange={() => setAppIsFree(!appIsFree)}
              />
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default NewExperimentStep2;
