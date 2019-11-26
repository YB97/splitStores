import React, { PureComponent } from "react";
import { Container, Grid } from "@material-ui/core";
import { inject, observer } from "mobx-react";
import { withRouter } from "react-router-dom";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Input from "../../components/Input";
import Stepper from "../../components/Stepper";
import Button from "../../components/Button";
import StyledSelect from "../../components/StyledSelect";
import CardRadioControl from "../../components/CardRadioControl";
import Footer from "../../components/Footer";
import { URI_TO_NEW_EXPERIMENT_STEP_2 } from "../../constants";

import classes from "./newexperiment.module.scss";

@inject("stores")
@observer
class NewExperiment extends PureComponent {
  st = this.props.stores.newExperiments;

  componentDidMount() {
    const { getAllApps, appsList } = this.props.stores.apps;

    getAllApps();
  }

  onClickHandler = () => {
    this.props.history.push(URI_TO_NEW_EXPERIMENT_STEP_2);
  };

  render() {
    const {
      setAppName,
      device,
      setDevice,
      testPage,
      setTestPage,
      elementForTest,
      setElementForTest,
      experimentName,
      setExperimentName,
      actionOnInstall,
      setActionOnInstall
    } = this.st;
    const { appsList } = this.props.stores.apps;
    const steps = ["set up", "details", "variations"];
    const appsOptions =
      appsList &&
      appsList.map(item => ({
        name: item.name,
        icon: item.icon
      }));
    const selectPageData = [{ name: "Landing Pages" }];
    const selectElementData = [
      { name: "Icon" },
      { name: "Screenshots" },
      { name: "Description" },
      { name: "App Name" }
    ];

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
                <Stepper activeStep={0} steps={steps} />
                <StyledSelect
                  width="100%"
                  title="Select the app"
                  titleCenter
                  data={appsOptions}
                  setAsDefault={this.props.stores.app.app.name}
                  onClickHandler={val => setAppName(val)}
                  noBlankValue
                  required
                />
                <CardRadioControl
                  name="deviceSelect"
                  title={
                    <div className={classes.inputLabel}>
                      Define platform device
                    </div>
                  }
                  values={[
                    {
                      value: "phone",
                      id: "phone",
                      img: "../../../static/images/devices/android-phone.svg",
                      text: "Android phone"
                    },
                    {
                      value: "tablet",
                      id: "tablet",
                      img: "../../../static/images/devices/android-tablet.svg",
                      text: "Android tablet"
                    }
                  ]}
                  currentValue={device}
                  className={classes.formControl}
                  handleChange={e => setDevice(e.target.value)}
                />
                <div className={classes["select-wrapper"]}>
                  <StyledSelect
                    width="100%"
                    title="Define the page you’d like to test"
                    titleCenter
                    data={selectPageData}
                    setAsDefault={testPage}
                    onClickHandler={val => setTestPage(val)}
                    noBlankValue
                  />
                </div>
                <div className={classes["select-wrapper"]}>
                  <StyledSelect
                    width="100%"
                    title="Define the element you’d like to test"
                    titleCenter
                    data={selectElementData}
                    setAsDefault={elementForTest}
                    onClickHandler={val => setElementForTest(val)}
                    noBlankValue
                  />
                </div>
                <div className={classes.formControl}>
                  <Input
                    title="Set the name to your experiment"
                    titleCentered
                    value={experimentName}
                    onChange={e => setExperimentName(e.target.value)}
                    placeholder="Name..."
                    helpText="This name will only be displayed on the dashboard"
                  />
                </div>
                <CardRadioControl
                  name="install_action"
                  title={
                    <div className={classes.inputLabel}>
                      What to do, when the user wants to install your
                      application?
                    </div>
                  }
                  values={[
                    {
                      value: "user_email",
                      id: "user_email",
                      img:
                        "../../../static/images/user-actions/e-mail-envelope.svg",
                      text: "Collect user’s email"
                    },
                    {
                      value: "custom_link",
                      id: "custom_link",
                      img: "../../../static/images/user-actions/link.svg",
                      text: "Go to custom link"
                    }
                  ]}
                  currentValue={actionOnInstall}
                  className={classes.formControl}
                  handleChange={e => setActionOnInstall(e.target.value)}
                />
                <div className={classes.buttonWrap}>
                  <Button click={this.onClickHandler}>Next</Button>
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

export default withRouter(NewExperiment);
