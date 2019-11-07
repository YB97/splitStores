import React from "react"
import classes from "./appscard.module.scss"

export default function AppsCard({
  title = "Facebook",
  publishDate = "12/12/2020",
  experimentsCount = "1",
  appsImgUrl = "../../../static/images/apps/facebook.png",
  storeImgUrl = ""
}) {
  return (
    <>
      <div className={classes.card}>
        <div className={classes["main-content"]}>
          <div className={classes["card-image"]}>
            <div className={classes["img-wrapper"]}>
              <img className={classes.img} src={appsImgUrl} alt="logoapp" />
            </div>
          </div>
          <div className={classes["title-wrapper"]}>
            <strong className={classes["title"]}>{title}</strong>
            <small className={classes["publish"]}>created: {publishDate}</small>
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
      </div>
    </>
  )
}
