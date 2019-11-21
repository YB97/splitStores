import React, { Component } from "react";
import { AreaChart, Area, XAxis, YAxis, Tooltip } from "recharts";
import moment from "moment";

import classes from "./chart.module.scss";

class Chart extends Component {
  render() {
    const { xAxisName, yAxisName, data, labelText, count } = this.props;

    const formattedData = data.map(item => {
      item.date = moment(item.date, "DD/MM/YYYY").format("MMM Do");
      return item;
    });

    return (
      <div className={classes["chart-wrapper"]}>
        {labelText && (
          <div className={classes.label}>
            {labelText}: <span className={classes.count}>{count}</span>
          </div>
        )}
        <AreaChart
          width={280}
          height={250}
          data={formattedData}
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          style={{ fontSize: "14px" }}
        >
          <XAxis dataKey={xAxisName} />
          <YAxis dataKey={yAxisName} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey={yAxisName}
            stroke="#E3603B"
            fill="#E3603B"
          />
        </AreaChart>
      </div>
    );
  }
}

export default Chart;
