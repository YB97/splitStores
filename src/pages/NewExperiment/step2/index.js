import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { Container, Grid, Icon } from "@material-ui/core";
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
import TestingIcon from "../../../components/TestingIcon";
import {
  TEST_ICON,
  TEST_SCREENSHOTS,
  TEST_APP_NAME,
  TEST_DESCRIPTION
} from "../../../constants";
import {
  URI_TO_NEW_EXPERIMENT,
  URI_TO_NEW_EXPERIMENT_STEP_3
} from "../../../constants";

import classes from "./step2.module.scss";
import { toJS } from "mobx";

@inject("stores")
@observer
class NewExperimentStep2 extends PureComponent {
  state = {
    errors: {
      developerName: null,
      price: false,
      appDesc: null,
      shortAppDesc: null,
      appCategory: null,
      appRestrictions: null,
      releaseNotes: null,
      appSize: null,
      appVersion: null,
      downloadsCount: null,
      reviewsCount: null,
      userRating: null,
      oneStarsCount: null,
      twoStarsCount: null,
      threeStarsCount: null,
      fourStarsCount: null,
      fiveStarsCount: null,
      screenshots: null,
      icon: null
    }
  };
  componentDidMount() {
    // window.srrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
    const { isValid } = this.props.stores.newExperiments;
    const { history } = this.props;

    if (!isValid) {
      history.push(URI_TO_NEW_EXPERIMENT);
    }
  }

  setError(field, value) {
    this.setState({
      errors: {
        ...this.state.errors,
        [field]: value
      }
    });
  }

  onClickHandler = () => {
    const {
      elementForTest,
      reviewsCount,
      developerName,
      appIsFree,
      price,
      appDesc,
      shortAppDesc,
      appRestrictions,
      releaseNotes,
      appSize,
      appVersion,
      userRating,
      downloadsCount,
      oneStarsCount,
      twoStarsCount,
      threeStarsCount,
      fourStarsCount,
      fiveStarsCount,
      screenshots,
      icon
    } = this.props.stores.newExperiments;

    this.setState(
      {
        errors: {
          developerName: !Boolean(developerName),
          appDesc:
            (elementForTest !== "Description" && !Boolean(appDesc)) || false,
          shortAppDesc: !Boolean(shortAppDesc),
          appRestrictions: !Boolean(appRestrictions),
          releaseNotes: !Boolean(releaseNotes),
          appSize: !Boolean(appSize),
          appVersion: !Boolean(appVersion),
          downloadsCount: !Boolean(downloadsCount && downloadsCount.length),
          reviewsCount: !Boolean(reviewsCount && reviewsCount.length),
          userRating: !Boolean(userRating && userRating >= 0),
          oneStarsCount: oneStarsCount < 0,
          twoStarsCount: twoStarsCount < 0,
          threeStarsCount: threeStarsCount < 0,
          fourStarsCount: fourStarsCount < 0,
          fiveStarsCount: fiveStarsCount < 0,
          price: !appIsFree && price === 0,
          screenshots: screenshots && screenshots.length === 0,
          icon: !toJS(icon).value
        }
      },
      () => {
        if (Object.values(this.state.errors).every(error => error === false)) {
          this.props.history.push(URI_TO_NEW_EXPERIMENT_STEP_3);
        }
      }
    );
  };

  onBackClickHandler = () => {
    this.props.history.push(URI_TO_NEW_EXPERIMENT);
  };

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
      setFiveStarsCount,
      screenshots,
      setScreenshots,
      icon,
      setIcon
    } = this.props.stores.newExperiments;
    const { errors } = this.state;
    const steps = ["set up", "details", "variations"];
    const currencyList = [{ name: "USD" }, { name: "EUR" }, { name: "RUB" }];

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
                    onChange={e => {
                      setDeveloperName(e.target.value);
                      this.setError("developerName", !Boolean(developerName));
                    }}
                    error={errors.developerName}
                  />
                </div>
                <div className={classes["label"]}>Price</div>
                <div className={classes["app-price-wrapper"]}>
                  <div className={classes["checkbox-wrapper"]}>
                    <StyledCheckbox
                      width="120px"
                      label="App is free"
                      checked={appIsFree}
                      onChange={() => {
                        setAppIsFree(!appIsFree);
                        if (!appIsFree) {
                          this.setError("price", true);
                        }
                      }}
                    />
                  </div>
                  <div className={classes["price-currency-wrapper"]}>
                    <div className={classes["price-input-wrapper"]}>
                      <Input
                        value={price}
                        type="number"
                        onChange={e => {
                          if (e.target.value > 0) {
                            setPrice(e.target.value);
                            this.setError("price", price <= 0);
                          }
                        }}
                        disabled={appIsFree}
                        error={errors.price}
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
                {elementForTest !== TEST_DESCRIPTION && (
                  <div>
                    <div className={classes["label"]}>App Description</div>
                    <Input
                      value={appDesc}
                      placeholder="Type your app description"
                      multiline
                      onChange={e => {
                        setAppDesc(e.target.value);
                        this.setError("appDesc", !Boolean(e.target.value));
                      }}
                      error={errors.appDesc}
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
                    onChange={e => {
                      setShortAppDesc(e.target.value);
                      this.setError("shortAppDesc", !Boolean(e.target.value));
                    }}
                    error={errors.shortAppDesc}
                  />
                </div>

                <div className={classes["app-ver-wrapper"]}>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>App category</div>
                    <Input
                      value={appCategory}
                      placeholder="Games"
                      disabled
                      error={errors.appCategory}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Age restrictions</div>
                    <Input
                      value={appRestrictions}
                      placeholder="3+"
                      onChange={e => {
                        setAppRestrictions(e.target.value);
                        this.setError(
                          "appRestrictions",
                          !Boolean(e.target.value)
                        );
                      }}
                      error={errors.appRestrictions}
                    />
                  </div>
                </div>
                <div>
                  <div className={classes["label"]}>Release Date</div>
                  <DatePicker onChange={date => setReleaseDate(date)} autoOk />
                </div>
                <div>
                  <div className={classes["label"]}>Release Notes</div>
                  <Input
                    value={releaseNotes}
                    placeholder="Type your app description"
                    multiline
                    onChange={e => {
                      setReleaseNotes(e.target.value);
                      this.setError("releaseNotes", !Boolean(e.target.value));
                    }}
                    error={errors.releaseNotes}
                  />
                </div>
                <div className={classes["app-ver-wrapper"]}>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>App Size</div>
                    <Input
                      value={appSize}
                      placeholder="3MB"
                      onChange={e => {
                        setAppSize(e.target.value);
                        this.setError("appSize", !Boolean(e.target.value));
                      }}
                      error={errors.appSize}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>App Version</div>
                    <Input
                      value={appVersion}
                      placeholder="1.2.4"
                      onChange={e => {
                        const newVal = e.target.value.replace(/[^0-9.]/g, "");
                        setAppVersion(newVal);
                        this.setError("appVersion", !Boolean(newVal));
                      }}
                      error={errors.appVersion}
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
                      onChange={e => {
                        setDownloadsCount(e.target.value);
                        this.setError(
                          "downloadsCount",
                          !Boolean(e.target.value)
                        );
                      }}
                      error={errors.downloadsCount}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Rewiews Count</div>
                    <Input
                      value={reviewsCount}
                      placeholder="100"
                      type="number"
                      onChange={e => {
                        setReviewsCount(e.target.value);
                        this.setError("reviewsCount", !Boolean(e.target.value));
                      }}
                      error={errors.reviewsCount}
                    />
                  </div>
                </div>
                <div>
                  <div className={classes["label"]}>Average user rating</div>
                  <Input
                    value={userRating}
                    type="number"
                    placeholder="4.5"
                    onChange={e => {
                      setUserRating(e.target.value);
                      this.setError("userRating", e.target.value < 0);
                    }}
                    error={errors.userRating}
                  />
                </div>
                <div className={classes["app-ver-wrapper"]}>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Users Stars 1</div>
                    <Input
                      // type="number"
                      value={oneStarsCount}
                      placeholder="12"
                      onChange={e => {
                        setOneStarsCount(e.target.value);
                      }}
                      error={errors.oneStarsCount}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Users Stars 2</div>
                    <Input
                      value={twoStarsCount}
                      placeholder="14"
                      onChange={e => {
                        setTwoStarsCount(e.target.value);
                      }}
                      error={errors.twoStarsCount}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Users Stars 3</div>
                    <Input
                      value={threeStarsCount}
                      placeholder="1.2.4"
                      onChange={e => {
                        setThreeStarsCount(e.target.value);
                      }}
                      error={errors.threeStarsCount}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Users Stars 4</div>
                    <Input
                      value={fourStarsCount}
                      placeholder="4"
                      onChange={e => {
                        setFourStarsCount(e.target.value);
                      }}
                      error={errors.fourStarsCount}
                    />
                  </div>
                  <div className={classes["app-ver-inp"]}>
                    <div className={classes["label"]}>Users Stars 5</div>
                    <Input
                      value={fiveStarsCount}
                      placeholder="10"
                      onChange={e => {
                        setFiveStarsCount(e.target.value);
                      }}
                      error={errors.fiveStarsCount}
                    />
                  </div>
                </div>
                {elementForTest !== TEST_SCREENSHOTS && (
                  <div className={classes.dropzone}>
                    <div className={classes["label"]}>Screenshots</div>
                    <Dropzone
                      screenshots={screenshots}
                      onUpload={setScreenshots}
                      error={errors.screenshots}
                    />
                  </div>
                )}
                {elementForTest !== TEST_ICON && (
                  <div className={classes["test-icon"]}>
                    <TestingIcon
                      icon={icon}
                      setIcon={setIcon}
                      error={errors.icon}
                    />
                  </div>
                )}
                <div className={classes.buttonWrap}>
                  <Button
                    bg="#B0B0B0"
                    size="small"
                    click={this.onBackClickHandler}
                  >
                    Back
                  </Button>
                  <Button size="small" click={this.onClickHandler}>
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
