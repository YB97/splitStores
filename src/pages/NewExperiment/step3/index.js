import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";
import { inject, observer } from "mobx-react";

import Header from "../../../components/Header";
import Title from "../../../components/Title";
import Stepper from "../../../components/Stepper";
import Button from "../../../components/Button";
import TestingIconCard from "../../../components/TestingIconCard";
import Footer from "../../../components/Footer";
import {URI_TO_NEW_EXPERIMENT_STEP_2} from "../../../constants";

import classes from "./step3.module.scss";

@inject("stores")
@observer
class NewExperimentStep3 extends PureComponent {
  render() {
    const st = this.props.stores.newExperiments;
    const steps = ["set up", "details", "variations"];
    const {
      testPage,
      elementForTest,
      variations,
      setVariationName,
      setVariationIcon,
      addNewVariation,
      deleteVariation
    } = st;
    const { history } = this.props;

    const getExperimentValues = () => ({
      appName: st.appName,
      device: st.device,
      testPage: st.testPage,
      elementForTest: st.elementForTest,
      experimentName: st.experimentName,
      actionOnInstall: st.actionOnInstall,
      developerName: st.developerName,
      appIsFree: st.appIsFree,
      price: st.price,
      currency: st.currency,
      offersInApp: st.offersInApp,
      appDesc: st.appDesc,
      shortAppDesc: st.shortAppDesc,
      appCategory: st.appCategory,
      appRestrictions: st.appRestrictions,
      releaseDate: st.releaseDate,
      releaseNotes: st.releaseNotes,
      appSize: st.appSize,
      appVersion: st.appVersion,
      userRating: st.userRating,
      downloadsCount: st.downloadsCount,
      androidRewiewsCount: st.androidRewiewsCount,
      iosRewiewsCount: st.iosRewiewsCount,
      oneStarsCount: st.oneStarsCount,
      twoStarsCount: st.twoStarsCount,
      threeStarsCount: st.threeStarsCount,
      fourStarsCount: st.fourStarsCount,
      fiveStarsCount: st.fiveStarsCount,
    });
    const onClickPublishNow = () => {
      const experimentValues = getExperimentValues();
      console.log(experimentValues);
      console.log(JSON.stringify(experimentValues));
    };
    const onClicPublishLater = () => {
      const experimentValues = getExperimentValues();
      console.log(experimentValues);
      console.log(JSON.stringify(experimentValues));
    };

    const setIcon = (id) => (file) => {
      setVariationIcon(id, file);
    };

    const onBackClickHandler = () => {
      history.push(URI_TO_NEW_EXPERIMENT_STEP_2);
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
                  <Title title={`Testing ${elementForTest} on ${testPage}`} />
                </div>

                {variations.map((variation, id) => (
                  <div className={classes.cardWrapper} key={id}>
                    <TestingIconCard
                      variationName={variation.name}
                      onInputChange={e => setVariationName(e.target.value, id)}
                      icon={variation.uploadedIcon}
                      setIcon={setIcon(id)}
                      onDelete={() => deleteVariation(variation.id)}
                      id={id}
                    />
                  </div>
                ))}

                <div className={classes.buttonsWrap}>
                  <div className={classes.fullwidthButton}>
                    <Button
                      click={addNewVariation}
                      variant="outlined"
                      color="#E3603B"
                      fullWidth
                    >
                      Add new variation
                    </Button>
                  </div>
                  <div className={classes.buttonGroupWrap}>
                    <Button click={onClickPublishNow} size="small">
                      Publish experiment
                    </Button>
                    <Button click={onClicPublishLater} bg="#B0B0B0" size="small">
                      Save and publish later
                    </Button>
                  </div>
                  <div className={`${classes.buttonGroupWrap} ${classes.buttonGroupWrap_bottom}`}>
                    <Button bg="#B0B0B0" size="small" click={onBackClickHandler}>
                      Back
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withRouter(NewExperimentStep3);
