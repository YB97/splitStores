import React, { Component } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import moment from "moment";

import classes from "./chart.module.scss";

class Chart extends Component {
  state = {
    isVisible: false
  };

  handleIconClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    const { xAxisName, yAxisName, data, labelText, count } = this.props;
    const { isVisible } = this.state;

    const formattedData = data.map(item => {
      item.date = moment(item.date, "DD/MM/YYYY").format("MMM Do");
      return item;
    });
    const iconClasses = isVisible
      ? `${classes.icon} ${classes["icon-active"]}`
      : classes.icon;
    const smallScreen = window.innerWidth <= 370;

    return (
      <div className={classes["chart-wrapper"]}>
        {labelText && (
          <div className={classes.label} onClick={this.handleIconClick}>
            <div>
              {labelText} <span className={classes.count}>{count}</span>
            </div>
            <div className={iconClasses}>
              <svg
                width="18"
                height="9"
                viewBox="0 0 18 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 0L0 1.57361e-06L9 9L18 0Z"
                  fill="#244BDD"
                />
              </svg>
            </div>
          </div>
        )}
        <div
          className={
            classes.area + " " + (isVisible && classes["area-visible"])
          }
        >
          <AreaChart
            width={!smallScreen ? 280 : 230}
            height={250}
            data={formattedData}
            margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
            style={{ fontSize: "14px" }}
          >
            <XAxis dataKey={xAxisName} />
            {/* <YAxis dataKey={yAxisName} /> */}
            <Tooltip />
            <Area
              type="monotone"
              dataKey={yAxisName}
              stroke="#E3603B"
              fill="#E3603B"
            />
          </AreaChart>
        </div>
      </div>
    );
  }
}

export default Chart;
