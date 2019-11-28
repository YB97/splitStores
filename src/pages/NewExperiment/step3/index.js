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
import SimpleModal from "../../../components/Modal";
import {
  URI_TO_EXPERIMENTS,
  URI_TO_NEW_EXPERIMENT,
  URI_TO_NEW_EXPERIMENT_STEP_3
} from "../../../constants";
import { urlBuilder } from "../../../routes";

import classes from "./step3.module.scss";

@inject("stores")
@observer
class NewExperimentStep3 extends PureComponent {
  state = {
    modalOpen: false
  };
  componentDidMount() {
    const { isValid } = this.props.stores.newExperiments;
    const { history } = this.props;

    if (!isValid) {
      history.push(URI_TO_NEW_EXPERIMENT);
    }
  }

  handleModalClose = () => {
    this.setState({ modalOpen: false });
    this.backToExp();
  };

  handleModalOpen = () => {
    this.setState({ modalOpen: true });
  };

  backToExp = () => {
    const { history } = this.props;
    const { appName } = this.props.stores.newExperiments;
    const { appsList } = this.props.stores.apps;

    const activeApp = appsList.find(app => app.name.toString() === appName);
    history.push(urlBuilder("experiments", { id: activeApp.id }));
  };

  render() {
    const steps = ["set up", "details", "variations"];
    const {
      testPage,
      elementForTest,
      variations,
      setVariationName,
      addNewVariation,
      deleteVariation,
      setDescriptionVariant,
      setAppNameVariant
    } = this.props.stores.newExperiments;
    const { history } = this.props;

    const onClickHandler = () => {
      this.handleModalOpen();
      // history.push(URI_TO_EXPERIMENTS);
    };

    const setIcon = variation => file => {
      variation.uploadedIcon = file;
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
                      setIcon={setIcon(variation)}
                      screenshots={variation.uploadedScreenshots}
                      description={variation.description}
                      appName={variation.appName}
                      onDelete={() => deleteVariation(variation.id)}
                      onChange={e => {
                        if (elementForTest === "Description") {
                          setDescriptionVariant(e.target.value, id);
                        }
                        if (elementForTest === "App Name") {
                          setAppNameVariant(e.target.value, id);
                        }
                      }}
                      id={id}
                      elementForTest={elementForTest}
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
                  <div className={classes.butonGroupWrap}>
                    <Button click={onClickHandler} size="small">
                      Publish experiment
                    </Button>
                    <Button click={() => {}} bg="#B0B0B0" size="small">
                      Save and publish later
                    </Button>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
          <SimpleModal
            open={this.state.modalOpen}
            handleClose={this.handleModalClose}
            handleOpen={this.handleModalOpen}
            title="Success!"
            content="Your experiment is published successfully"
          >
            <Button click={this.backToExp}>back to experiments</Button>
          </SimpleModal>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default withRouter(NewExperimentStep3);
