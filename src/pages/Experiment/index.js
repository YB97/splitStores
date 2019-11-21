import React, { PureComponent } from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Chart from "../../components/Chart";

import classes from "./experiment.module.scss";

class Experiment extends PureComponent {
  render() {
    return (
      <div className={classes.exp}>
        <div className="header">
          <Header />
        </div>
        <div className={classes["charts-wrapper"]}>
          <div className={classes["chart-wrapper-comp"]}>
            <Chart
              xAxisName="date"
              yAxisName="visitors"
              data={chartDataMock}
              labelText="Label"
              count={4}
            />
          </div>
          <div className={classes["chart-wrapper-comp"]}>
            <Chart
              xAxisName="date"
              yAxisName="visitors"
              data={chartDataMock}
              labelText="Label"
              count={4}
            />
          </div>
          <div className={classes["chart-wrapper-comp"]}>
            <Chart
              xAxisName="date"
              yAxisName="visitors"
              data={chartDataMock}
              labelText="Label"
              count={4}
            />
          </div>
        </div>
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
