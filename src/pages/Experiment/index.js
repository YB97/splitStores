import React, { PureComponent } from "react";
import { observer, inject } from "mobx-react";
import { Grid, Container, Tooltip } from "@material-ui/core";
import moment from "moment";
import { CopyToClipboard } from "react-copy-to-clipboard";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chart from "../../components/Chart";
import Title from "../../components/Title";
import Button from "../../components/Button";
import NavBar from "../../components/NavBar";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";
import { URI_TO_NEW_EXPERIMENT } from "../../constants";
import { urlBuilder } from "../../routes";

import classes from "./experiment.module.scss";

@inject("stores")
@observer
class Experiment extends PureComponent {
  st = this.props.stores.experiment;

  state = {
    value: "some value",
    copied: false
  };

  timer = null;

  componentDidMount() {
    this.props.stores.setLoading(true);
    const { getExperimentById } = this.st;
    const { id, expId } = this.props.match.params;

    getExperimentById(id, expId).then(() => {
      this.props.stores.setLoading(false);
    });
  }

  createClickHandler = () => {
    this.props.history.push(URI_TO_NEW_EXPERIMENT);
  };

  onCardClickHandler = varId => {
    const { id, expId } = this.props.match.params;

    this.props.history.push(urlBuilder("variation", { id, expId, varId }));
  };

  onCopy = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.setState({ copied: true });
    this.timer = setTimeout(() => {
      this.setState({ copied: false });
    }, 2000);
  };

  render() {
    const { experiment } = this.props.stores.experiment;
    const buttons = [
      {
        name: "Start driving traffic",
        icon: "../../static/images/experiment/power.svg",
        onClick: () => {
          console.log("started");
        }
      },
      {
        name: "Download emails",
        icon: "../../static/images/experiment/download.svg",
        onClick: () => {
          window.open("https://google.com", "_blank");
        }
      }
    ];

    const item1 = (
      <>
        <div className={classes["charts-wrapper"]}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes["chart-wrapper-comp"]}>
                <Chart
                  xAxisName="date"
                  yAxisName="visitors"
                  data={chartDataMock}
                  labelText="Unique visitors"
                  count={4}
                  withDropdown
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes["chart-wrapper-comp"]}>
                <Chart
                  xAxisName="date"
                  yAxisName="visitors"
                  data={chartDataMock}
                  labelText="Filtered visitors"
                  count={6}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={4} lg={4}>
              <div className={classes["chart-wrapper-comp"]}>
                <Chart
                  xAxisName="date"
                  yAxisName="visitors"
                  data={chartDataMock}
                  labelText="Average time on page"
                  count={"4s"}
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <div className={classes["var-list-wrapper"]}>
          <div className={classes["var-list-title"]}>
            <Title title="Your Variations List" />
          </div>
          <div className={classes["var-cards"]}>
            {experiment.variations &&
              experiment.variations.map(variation => (
                <Card
                  key={`${variation.name} ${variation.variation_id}`}
                  type="variations"
                  title={variation.name}
                  data={[
                    {
                      rowName: "install rate",
                      value: variation.install_rate
                    },
                    {
                      rowName: "visitors",
                      value: variation.visitors_count
                    },
                    {
                      rowName: "clicks",
                      value: variation.clicks_count
                    },
                    {
                      rowName: "engagement rate",
                      value: variation.eng_rate
                    }
                  ]}
                  onClickHandler={e =>
                    this.onCardClickHandler(variation.variation_id)
                  }
                />
              ))}
          </div>
        </div>
      </>
    );

    const item2 = (
      <div className={classes["develop-wrapper"]}>
        <div className={classes["develop-icon"]}>
          <img src="../../static/images/experiment/settings.svg" />
        </div>
        <div className={classes["develop-text"]}>
          <b>Under development</b>
        </div>
      </div>
    );

    const items = [
      { data: item1, label: "Overview" },
      { data: item2, label: "Behavior" },
      { data: item2, label: "Install Button" },
      { data: item2, label: "Screenshots" },
      { data: item2, label: "Read More" },
      { data: item2, label: "Scroll Depth" },
      { data: item2, label: "Audience" }
    ];

    return (
      <div className={classes.exp}>
        <div className="header">
          <Header />
        </div>
        <Spinner page>
          <div className={classes["content-header"]}>
            <Container>
              <div className={classes.title}>
                <div className={classes["title-text"]}>
                  <Title title={experiment.experiment_name} bold />
                </div>
                <div className={classes["title-control"]}>
                  <Button click={this.createClickHandler}>
                    NEW EXPERIMENT
                  </Button>
                </div>
              </div>
              <div className={classes.subtitle}>
                <span className={classes["subtitle-app"]}>App Name: </span>
                {experiment.app_name}
                <span className={classes["subtitle-date"]}>
                  {moment(experiment.creation_date).format("MMM Do YYYY")}
                </span>
              </div>
              <div className={classes["btn-wrapper"]}>
                <Button bg="#aeaeae" isGroupButton btns={buttons} />
              </div>
              <div className={classes.link}>
                <h4 className={classes["link-title"]}>Link for testing:</h4>
                <CopyToClipboard
                  text={experiment.traffic_link}
                  onCopy={this.onCopy}
                >
                  <Tooltip title="Click to copy" placement="top">
                    <div className={classes["link-text-copy"]}>
                      {this.state.copied ? "Copied" : experiment.traffic_link}
                    </div>
                  </Tooltip>
                </CopyToClipboard>
              </div>
            </Container>
          </div>
          <NavBar items={items} />
          <Footer />
        </Spinner>
      </div>
    );
  }
}

export default Experiment;

const chartDataMock = [
  { date: "10/10/2019", visitors: 1 },
  { date: "11/10/2019", visitors: 10 },
  { date: "12/10/2019", visitors: 0 },
  { date: "13/10/2019", visitors: 14 },
  { date: "14/10/2019", visitors: 14 },
  { date: "15/10/2019", visitors: 7 },
  { date: "16/10/2019", visitors: 4 },
  { date: "17/10/2019", visitors: 8 },
  { date: "18/10/2019", visitors: 35 },
  { date: "19/10/2019", visitors: 5 }
];
