import React from "react";
import Rating from "@material-ui/lab/Rating";
import Tooltip from "@material-ui/core/Tooltip";

import classes from "./rating.module.scss";

export default function({ reviews = [], rating = 0, reviewsCount = 0 }) {
  const bars = reviews
    .map((statValue, index) => {
      return (
        <div className={classes["bar-item"]} key={`${index}_${statValue}`}>
          <Tooltip
            title={`Percentage of users who rated ${index + 1}`}
            placement="top"
          >
            <div className={classes["stars-count"]}>
              <Rating
                name="star-ratings"
                max={index + 1}
                value={index + 1}
                size="small"
                readOnly
              />
            </div>
          </Tooltip>

          <div className={classes["bar"]}>
            <Tooltip
              title={`${statValue} users rated ${index + 1}`}
              placement="top"
            >
              <div
                className={classes["bar-active"]}
                style={{
                  width: `${(statValue / reviewsCount) * 100}%`
                }}
              ></div>
            </Tooltip>
          </div>
        </div>
      );
    })
    .reverse();

  return (
    <div className={classes.ratings}>
      <div className={classes["ratings-title"]}>
        <span className={classes.title}>Ratings and reviews</span>
      </div>
      <div className={classes.content}>
        <div className={classes["ratings-block"]}>
          <h2 className={classes["ratings-number"]}>{rating.toFixed(1)}</h2>
          <Tooltip title={`The average rating is ${rating}`} placement="top">
            <div className={classes["star-ratings"]}>
              <Rating
                name="star-ratings"
                precision={0.1}
                value={rating}
                size="small"
                readOnly
              />
            </div>
          </Tooltip>
          <Tooltip title="Number of users who rated">
            <div className={classes["reviews"]}>{reviewsCount} reviews</div>
          </Tooltip>
        </div>
        <div className={classes["bars-wrap"]}>{bars}</div>
      </div>
    </div>
  );
}
