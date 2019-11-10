import React from "react"
import classes from "./card.module.scss"

export default function({
  title = "Yes, here’s my app’s URL",
  urlImg = "../../../../../static/images/newapp/check.svg"
}) {
  return (
    <>
      <div className={classes.card}>
        <div className={classes["img-wrapper"]}>
          <img className={classes.img} src={urlImg} alt="" />
        </div>
        <h3 className={classes.title}>{title}</h3>
      </div>
    </>
  )
}
