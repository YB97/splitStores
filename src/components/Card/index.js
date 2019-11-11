import React from "react";

import classes from "./card.module.scss";

export default function Card({
  type = "apps",
  title = "Facebook",
  publishDate = "12/12/2020",
  experimentsCount = "1",
  variationsCount = "0",
  visitorsCount = "0",
  clicksCount = "0",
  appsImgUrl = "../../../static/images/apps/facebook.png",
  storeImgUrl = "../../../static/images/google-play-bw.svg",
  onClickHandler
}) {
  return (
    <>
      <div className={classes.card} onClick={onClickHandler}>
        {type === "apps" && (
          <>
            <div className={classes["main-content"]}>
              <div className={classes["card-image"]}>
                <div className={classes["img-wrapper"]}>
                  <img className={classes.img} src={appsImgUrl} alt="logoapp" />
                </div>
              </div>
              <div className={classes["title-wrapper"]}>
                <strong className={classes["title"]}>{title}</strong>
                <small className={classes["publish"]}>
                  created: {publishDate}
                </small>
              </div>
            </div>
            <div className={classes["info"]}>
              <div className={classes["experiments"]}>
                <span className={classes["experiments-count"]}>
                  {experimentsCount}
                </span>{" "}
                experiments
              </div>
              <div className={classes["card-image"]}>
                <div className={classes["img-wrapper"]}>
                  <img className={classes.img} src={appsImgUrl} alt="logoapp" />
                </div>
              </div>
            </div>
            <span className={classes["delete"]}>&times;</span>
          </>
        )}
        {type === "experiments" && (
          <>
            <div className={classes["main-content"]}>
              <div className={classes["card-image"]}>
                <div className={classes["img-wrapper"]}>
                  <img className={classes.img} src={appsImgUrl} alt="logoapp" />
                </div>
              </div>
              <div className={classes["title-wrapper"]}>
                <strong className={classes["title"]}>{title}</strong>
                <small
                  className={`${classes["publish"]} ${classes["exp-publish"]}`}
                >
                  <img
                    className={classes["store-img"]}
                    src={storeImgUrl}
                    alt="store"
                  />
                  &nbsp; {publishDate}
                </small>
              </div>
            </div>
            <div className={`${classes["info"]} ${classes["exp-info"]}`}>
              <span className={classes["exp-stat"]}>
                <strong>{variationsCount}</strong>
                <br /> variations
              </span>
              <span className={classes["exp-stat"]}>
                <strong>{visitorsCount}</strong>
                <br />
                visitors
              </span>
              <span className={classes["exp-stat"]}>
                <strong>{clicksCount}</strong>
                <br />
                clicks
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
}