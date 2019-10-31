import React from "react"
import { Link } from "react-router-dom"
import "./styles.scss"
import classes from "./styles.module.scss"

export default function({ color = "blue", link = "#" }) {
  return (
    <Link to={link} className={`${classes.logo} ${color}`}>
      <div className={classes["logo-icon"]}>
        <svg
          width="26"
          height="32"
          viewBox="0 0 26 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g className={color}>
            <path
              d="M24.5892 6.72C21.4146 0.592002 13.9066 -1.776 7.82727 1.424L19.3352 23.616C25.4146 20.416 27.7638 12.848 24.5892 6.72Z"
              fill="white"
            />
            <path
              d="M1.44636 25.344C4.66858 31.456 12.1765 33.776 18.24 30.528L6.60509 8.41602C0.541593 11.664 -1.75999 19.248 1.44636 25.344Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
      <div className={`${classes["logo-text"]}`}>
        <span className={color}>Split Stores</span>
      </div>
    </Link>
  )
}
