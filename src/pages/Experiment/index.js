import React, { PureComponent } from "react";
import { observer, inject } from "mobx-react";
import { Grid, Container } from "@material-ui/core";
import moment from "moment";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chart from "../../components/Chart";
import Title from "../../components/Title";
import Button from "../../components/Button";

import classes from "./experiment.module.scss";

@inject("stores")
@observer
class Experiment extends PureComponent {
  st = this.props.stores.experiment;

  componentDidMount() {
    const { getExperimentById } = this.st;
    const { id, expId } = this.props.match.params;

    getExperimentById(id, expId);
  }

  render() {
    const { experiment } = this.props.stores.experiment;
    const buttons = [
      {
        name: "Start driving traffic",
        icon: "../../static/images/experiment/power.svg"
      },
      {
        name: "Download emails",
        icon: "../../static/images/experiment/download.svg"
      }
    ];

    return (
      <div className={classes.exp}>
        <div className="header">
          <Header />
        </div>
        <div className={classes["content-header"]}>
          <Container>
            <div className={classes.title}>
              <Title title={experiment.experiment_name} bold />
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
          </Container>
        </div>
        <Container>
          <div className={classes["charts-wrapper"]}>
            <Grid container spacing={3} justify="center">
              <Grid item xs={12} md={4} lg={4}>
                <div className={classes["chart-wrapper-comp"]}>
                  <Chart
                    xAxisName="date"
                    yAxisName="visitors"
                    data={chartDataMock}
                    labelText="Label"
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
                    labelText="Label"
                    count={4}
                  />
                </div>
              </Grid>
              <Grid item xs={12} md={4} lg={4}>
                <div className={classes["chart-wrapper-comp"]}>
                  <Chart
                    xAxisName="date"
                    yAxisName="visitors"
                    data={chartDataMock}
                    labelText="Label"
                    count={4}
                  />
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
        <Footer />
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
