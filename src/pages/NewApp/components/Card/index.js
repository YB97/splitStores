import React from "react"
import classes from "./card.module.scss"

export default function() {
  return (
    <>
      <div className={classes.card}>
        <div className="img-wrapper">
          <img
            className={classes.img}
            src="../../../../../static/images/newapp/check.svg"
            alt=""
          />
        </div>
      </div>
    </>
  )
}
