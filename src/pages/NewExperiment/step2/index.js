import React, { PureComponent } from "react";
import { Container, Grid } from "@material-ui/core";
import { inject, observer } from "mobx-react";

import Header from "../../../components/Header";
import Title from "../../../components/Title";
import Stepper from "../../../components/Stepper";
import Input from "../../../components/Input";
import StyledCheckbox from "../../../components/StyledCheckbox";
import StyledSelect from "../../../components/StyledSelect";
import DatePicker from "../../../components/DatePicker";
import Button from "../../../components/Button";


import classes from "./step2.module.scss";

@inject("stores")
@observer
class NewExperimentStep2 extends PureComponent {
  render() {
    const {
      appName,
      setAppName,
      developerName,
      setDeveloperName,
      appIsFree,
      setAppIsFree,
      price,
      setPrice,
      setCurrency,
      offersInApp,
      setOffersInApp,
      appDesc,
      setAppDesc,
      shortAppDesc,
      setShortAppDesc,
      appCategory,
      setAppCategory,
      appRestrictions,
      setAppRestrictions,
      setReleaseDate,
      releaseNotes,
      setReleaseNotes,
      appSize,
      setAppSize,
      appVersion,
      setAppVersion,
      userRating,
      setUserRating
    } = this.props.stores.newExperiments;

    const steps = ["set up", "details", "variations"];
    const currencyList = [{ name: "USD" }, { name: "EUR" }, { name: "RUB" }];
    const onClickHandler = () => {};

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
                    value={appName}
                    onChange={e => setAppName(e.target.value)}
                    helpText="Specify the app name that you want users to see on the experiment page"
                  />
                </div>
                <div className={classes["input-wrapper"]}>
                  <Input
                    label="Developer name"
                    value={developerName}
                    onChange={e => setDeveloperName(e.target.value)}
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
                        value={price}
                        type="number"
                        onChange={e => setPrice(e.target.value)}
                        disabled={appIsFree}
                      />
                    </div>
                    <div className={classes["price-select-wrapper"]}>
                      <StyledSelect
                        // value={currency}
                        width="100%"
                        data={currencyList}
                        onClickHandler={val => setCurrency(val)}
                        setAsDefault={currencyList[0].name}
                        noBlankValue
                        disabled={appIsFree}
                      />
                    </div>
                  </div>
                </div>
                <StyledCheckbox
                  // width="120px"
                  label="Offers in-app purchases"
                  checked={offersInApp}
                  onChange={() => setOffersInApp(!offersInApp)}
                />
                <div>
                  <div className={classes["label"]}>App Description</div>
                  <Input
                    value={appDesc}
                    placeholder="Type your app description"
                    multiline
                    onChange={e => setAppDesc(e.target.value)}
                  />
                </div>
                <div>
                  <div className={classes["label"]}>Short app description</div>
                  <Input
                    value={shortAppDesc}
                    rows="3"
                    placeholder="Type your short app description"
                    multiline
                    onChange={e => setShortAppDesc(e.target.value)}
                  />
                </div>
                <div className={classes["app-ver-wrapper"]}>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>App category</div>
                    <Input
                      value={appCategory}
                      placeholder="Games"
                      onChange={e => setAppCategory(e.target.value)}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Age restrictions</div>
                    <Input
                      value={appRestrictions}
                      placeholder="3+"
                      onChange={e => setAppRestrictions(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className={classes["label"]}>Release Date</div>
                  <DatePicker onChange={date => setReleaseDate(date)} />
                </div>
                <div>
                  <div className={classes["label"]}>Release Notes</div>
                  <Input
                    value={releaseNotes}
                    placeholder="Type your app description"
                    multiline
                    onChange={e => setReleaseNotes(e.target.value)}
                  />
                </div>
                <div className={classes["app-ver-wrapper"]}>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>App Size</div>
                    <Input
                      value={appSize}
                      placeholder="3MB"
                      onChange={e => setAppSize(e.target.value)}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>App Version</div>
                    <Input
                      value={appVersion}
                      placeholder="1.2.4"
                      onChange={e => setAppVersion(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className={classes["label"]}>Average user rating</div>
                  <Input
                    value={userRating}
                    placeholder="4.5"
                    onChange={e => setUserRating(e.target.value)}
                  />
                </div>
                <div className={classes.buttonWrap}>
                  <Button click={onClickHandler}>Next</Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </>
    );
  }
}

export default NewExperimentStep2;
