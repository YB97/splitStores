import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
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
import Footer from "../../../components/Footer";
import Dropzone from "../../../components/Dropzone";
import {
  URI_TO_NEW_EXPERIMENT,
  URI_TO_NEW_EXPERIMENT_STEP_3
} from "../../../constants";

import classes from "./step2.module.scss";

@inject("stores")
@observer
class NewExperimentStep2 extends PureComponent {
  componentDidMount() {
    const { isValid } = this.props.stores.newExperiments;
    const { history } = this.props;

    if (!isValid) {
      history.push(URI_TO_NEW_EXPERIMENT);
    }
  }

  render() {
    const {
      testPage,
      elementForTest,
      // appName,
      // setAppName,
      reviewsCount,
      setReviewsCount,
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
      setUserRating,
      downloadsCount,
      setDownloadsCount,
      oneStarsCount,
      setOneStarsCount,
      twoStarsCount,
      setTwoStarsCount,
      threeStarsCount,
      setThreeStarsCount,
      fourStarsCount,
      setFourStarsCount,
      fiveStarsCount,
      setFiveStarsCount
    } = this.props.stores.newExperiments;

    const steps = ["set up", "details", "variations"];
    const currencyList = [{ name: "USD" }, { name: "EUR" }, { name: "RUB" }];
    const onClickHandler = () => {
      this.props.history.push(URI_TO_NEW_EXPERIMENT_STEP_3);
    };
    const onBackClickHandler = () => {
      this.props.history.push(URI_TO_NEW_EXPERIMENT);
    };

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
                  <span>
                    Testing {elementForTest} on {testPage}
                  </span>
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
                {elementForTest !== "Description" && (
                  <div>
                    <div className={classes["label"]}>App Description</div>
                    <Input
                      value={appDesc}
                      placeholder="Type your app description"
                      multiline
                      onChange={e => setAppDesc(e.target.value)}
                    />
                  </div>
                )}
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
                <div className={classes["app-ver-wrapper"]}>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Downloads</div>
                    <Input
                      value={downloadsCount}
                      placeholder="12"
                      type="number"
                      onChange={e => setDownloadsCount(e.target.value)}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Rewiews Count</div>
                    <Input
                      value={reviewsCount}
                      placeholder="100"
                      type="number"
                      onChange={e => setReviewsCount(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <div className={classes["label"]}>Average user rating</div>
                  <Input
                    value={userRating}
                    type="number"
                    placeholder="4.5"
                    onChange={e => setUserRating(e.target.value)}
                  />
                </div>
                <div className={classes["app-ver-wrapper"]}>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Users Stars 1</div>
                    <Input
                      type="number"
                      value={oneStarsCount}
                      placeholder="12"
                      onChange={e => setOneStarsCount(e.target.value)}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Users Stars 2</div>
                    <Input
                      type="number"
                      value={twoStarsCount}
                      placeholder="1.2.4"
                      onChange={e => setTwoStarsCount(e.target.value)}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Users Stars 3</div>
                    <Input
                      type="number"
                      value={threeStarsCount}
                      placeholder="1.2.4"
                      onChange={e => setThreeStarsCount(e.target.value)}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Users Stars 4</div>
                    <Input
                      type="number"
                      value={fourStarsCount}
                      placeholder="1.2.4"
                      onChange={e => setFourStarsCount(e.target.value)}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Users Stars 5</div>
                    <Input
                      type="number"
                      value={fiveStarsCount}
                      placeholder="1.2.4"
                      onChange={e => setFiveStarsCount(e.target.value)}
                    />
                  </div>
                </div>
                {elementForTest !== "Screenshots" && (
                  <div className={classes.dropzone}>
                    <Dropzone />
                  </div>
                )}
                <div className={classes.buttonWrap}>
                  <Button bg="#B0B0B0" size="small" click={onBackClickHandler}>
                    Back
                  </Button>
                  <Button size="small" click={onClickHandler}>
                    Next
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </>
    );
  }
}

export default withRouter(NewExperimentStep2);
