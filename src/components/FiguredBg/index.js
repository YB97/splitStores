import React from "react"
import classes from "./styles.module.scss"

export default function GradientBg({ children }) {
  return (
    <div className={classes.mainWrapper}>
      <div className={classes.bgFigureWrapper}>
        {children}
      </div>
    </div>
  )
}
