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

  state = {
    errors: {
      appSelect: null,
      testPage: null,
      testElem: null,
      expName: null,
      deviceSelect: null,
      installAction: null,
      customLink: null
    }
  };

  componentDidMount() {
    const { getAllApps } = this.props.stores.apps;
    const { app } = this.props.stores.app;
    const { appStore, appName } = this.st;

    getAllApps();
    if (app) {
      this.st.setAppName(app.name || appName)
      this.st.setAppStore(app.store || appStore);
    }
  }

  onClickHandler = () => {
    const {
      appName,
      testPage,
      elementForTest,
      experimentName,
      device,
      actionOnInstall,
      customLink,
      setIsValid
    } = this.st;

    this.setState(
      {
        errors: {
          appSelect: !Boolean(appName),
          testPage: !Boolean(testPage),
          testElem: !Boolean(elementForTest),
          expName: !Boolean(experimentName),
          deviceSelect: !Boolean(device),
          installAction: !Boolean(actionOnInstall),
          customLink:
            actionOnInstall === "custom_link" ? !Boolean(customLink) : false
        }
      },
      () => {
        if (Object.values(this.state.errors).every(error => error === false)) {
          setIsValid(true);
          this.props.history.push(URI_TO_NEW_EXPERIMENT_STEP_2);
        }
      }
    );
  };

  render() {
    const {
      appName,
      setAppName,
      appStore,
      setAppStore,
      device,
      setDevice,
      testPage,
      setTestPage,
      elementForTest,
      setElementForTest,
      experimentName,
      setExperimentName,
      actionOnInstall,
      setActionOnInstall,
      customLink,
      setCustomLink
    } = this.st;
    const { errors } = this.state;
    const { appsList } = this.props.stores.apps;
    const steps = ["set up", "details", "variations"];
    const appsOptions =
      appsList &&
      appsList.map(item => ({
        name: item.name,
        icon: item.icon,
        store: item.store
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
                  setAsDefault={this.props.stores.app.app.name || appName}
                  onClickHandler={val => {
                    setAppName(val);
                    const appSt = appsList.find(item => item.name === val);

                    setAppStore(appSt.store);
                    this.setState({
                      errors: { ...this.state.errors, appSelect: false }
                    });
                  }}
                  error={errors.appSelect}
                  noBlankValue
                />
                <CardRadioControl
                  name="deviceSelect"
                  title={
                    <div className={classes.inputLabel}>
                      Define platform device
                    </div>
                  }
                  error={errors.deviceSelect}
                  values={[
                    {
                      value: "phone",
                      id: "phone",
                      img: `../../../static/images/devices/${
                        appStore === "Google Play" ? "android" : "apple"
                      }-phone.svg`,
                      text:
                        appStore === "Google Play"
                          ? "Android Phone"
                          : "Apple Phone"
                    },
                    {
                      value: "tablet",
                      id: "tablet",
                      img: `../../../static/images/devices/${
                        appStore === "Google Play" ? "android" : "apple"
                      }-tablet.svg`,
                      text:
                        appStore === "Google Play"
                          ? "Android Tablet"
                          : "Apple Tablet"
                    }
                  ]}
                  currentValue={device}
                  className={classes.formControl}
                  handleChange={e => {
                    setDevice(e.target.value);

                    this.setState({
                      errors: { ...this.state.errors, deviceSelect: false }
                    });
                  }}
                />
                <div className={classes["select-wrapper"]}>
                  <StyledSelect
                    width="100%"
                    title="Define the page you’d like to test"
                    titleCenter
                    data={selectPageData}
                    setAsDefault={testPage}
                    onClickHandler={val => {
                      setTestPage(val);

                      this.setState({
                        errors: { ...this.state.errors, testPage: false }
                      });
                    }}
                    noBlankValue
                    error={errors.testPage}
                  />
                </div>
                <div className={classes["select-wrapper"]}>
                  <StyledSelect
                    width="100%"
                    title="Define the element you’d like to test"
                    titleCenter
                    data={selectElementData}
                    setAsDefault={elementForTest}
                    onClickHandler={val => {
                      setElementForTest(val);

                      this.setState({
                        errors: { ...this.state.errors, testElem: false }
                      });
                    }}
                    noBlankValue
                    error={errors.testElem}
                  />
                </div>
                <div className={classes.formControl}>
                  <Input
                    title="Set the name to your experiment"
                    titleCentered
                    value={experimentName}
                    onChange={e => {
                      setExperimentName(e.target.value);

                      this.setState({
                        errors: { ...this.state.errors, expName: false }
                      });
                    }}
                    placeholder="Name..."
                    helpText="This name will only be displayed on the dashboard"
                    error={errors.expName}
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
                  error={errors.installAction}
                  handleChange={e => {
                    setActionOnInstall(e.target.value);

                    // if (e.target.value === "user_email") {
                    // }
                    this.setState({
                      errors: {
                        ...this.state.errors,
                        installAction: false,
                        customLink:
                          e.target.value !== "user_email"
                            ? this.state.errors.customLink
                            : false
                      }
                    });
                  }}
                />
                <div className={classes["link-input"]}>
                  {actionOnInstall === "custom_link" && (
                    <Input
                      placeholder="https://example.com"
                      value={customLink}
                      type="url"
                      onChange={e => {
                        setCustomLink(e.target.value);

                        this.setState({
                          errors: {
                            ...this.state.errors,
                            customLink:
                              actionOnInstall === "custom_link" &&
                              !Boolean(e.target.value)
                          }
                        });
                      }}
                      error={errors.customLink}
                    />
                  )}
                </div>
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
