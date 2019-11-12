import React, { useState } from "react";
import { Container, Grid } from "@material-ui/core";

import Header from "../../../components/Header";
import Title from "../../../components/Title";
import Stepper from "../../../components/Stepper";
import Input from "../../../components/Input";
import StyledCheckbox from "../../../components/StyledCheckbox";
import StyledSelect from "../../../components/StyledSelect";
import DatePicker from "../../../components/DatePicker";

import classes from "./step2.module.scss";

function NewExperimentStep2() {
  const steps = ["set up", "details", "variations"];
  const [appIsFree, setAppIsFree] = useState(true);
  const [inAppPurch, setInAppPurch] = useState(false);
  const currency = [{ name: "USD" }, { name: "EUR" }, { name: "RUB" }];

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
              <div className={classes["app-price-wrapper"]}>
                <div className={classes["checkbox-wrapper"]}>
                  <StyledCheckbox
                    width="120px"
                    label="App is free"
                    checked={appIsFree}
                    onChange={() => setAppIsFree(!appIsFree)}
                  />
                </div>
                <div className={classes["price-currency-wrapper"]}>
                  <div className={classes["price-input-wrapper"]}>
                    <Input
                      value="0"
                      type="number"
                      onChange={() => console.log("price number")}
                      disabled={appIsFree}
                    />
                  </div>
                  <div className={classes["price-select-wrapper"]}>
                    <StyledSelect
                      width="100%"
                      data={currency}
                      onClickHandler={val => console.log("curr ", val)}
                      setAsDefault={currency[0].name}
                      noBlankValue
                      disabled={appIsFree}
                    />
                  </div>
                </div>
              </div>
              <StyledCheckbox
                // width="120px"
                label="Offers in-app purchases"
                checked={inAppPurch}
                onChange={() => setInAppPurch(!inAppPurch)}
              />
              <div>
                <div className={classes["label"]}>App Description</div>
                <Input
                  value=""
                  placeholder="Type your app description"
                  multiline
                  onChange={() => console.log("multiline")}
                />
              </div>
              <div>
                <div className={classes["label"]}>Short app description</div>
                <Input
                  value=""
                  rows="3"
                  placeholder="Type your short app description"
                  multiline
                  onChange={() => console.log("multiline")}
                />
              </div>
              <div className={classes["app-ver-wrapper"]}>
                <div className={classes["app-ver-inp"]}>
                  <div className={classes["label"]}>App category</div>
                  <Input
                    value=""
                    placeholder="Games"
                    onChange={() => console.log("multiline")}
                  />
                </div>
                <div className={classes["app-ver-inp"]}>
                  <div className={classes["label"]}>Age restrictions</div>
                  <Input
                    value=""
                    placeholder="3+"
                    onChange={() => console.log("multiline")}
                  />
                </div>
              </div>
              <div>
                <div className={classes["label"]}>Release Date</div>
                <DatePicker onChange={date => console.log("date", date)} />
              </div>
              <div>
                <div className={classes["label"]}>Release Notes</div>
                <Input
                  value=""
                  placeholder="Type your app description"
                  multiline
                  onChange={() => console.log("multiline")}
                />
              </div>
              <div className={classes["app-ver-wrapper"]}>
                <div className={classes["app-ver-inp"]}>
                  <div className={classes["label"]}>App Size</div>
                  <Input
                    value=""
                    placeholder="3MB"
                    onChange={() => console.log("multiline")}
                  />
                </div>
                <div className={classes["app-ver-inp"]}>
                  <div className={classes["label"]}>App Version</div>
                  <Input
                    value=""
                    placeholder="1.2.4"
                    onChange={() => console.log("multiline")}
                  />
                </div>
              </div>
              <div>
                <div className={classes["label"]}>Average user rating</div>
                <Input
                  value=""
                  placeholder="4.5"
                  onChange={() => console.log("multiline")}
                />
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default NewExperimentStep2;
