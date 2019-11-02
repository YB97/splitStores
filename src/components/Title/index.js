import React from "react"
import classes from "./title.module.scss"

export default function Title({ title = "", subtitle = "", color }) {
  return (
    <div className={classes.component}>
      <h2 className={`${classes.title} ${color}`}>{title}</h2>
      <span className={`${classes.subtitle} ${color}`}>{subtitle}</span>
    </div>
  )
}
