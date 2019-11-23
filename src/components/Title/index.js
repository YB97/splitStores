import React from "react";

import classes from "./title.module.scss";

export default function Title({
  title = "",
  subtitle = "",
  color = "",
  bold = false
}) {
  const cls = bold ? classes.bold : classes.normal;

  return (
    <div className={classes.component}>
      <h2 className={`${classes.title} ${color} ${cls}`}>{title}</h2>
      {subtitle && (
        <span className={`${classes.subtitle} ${color}`}>{subtitle}</span>
      )}
    </div>
  );
}
