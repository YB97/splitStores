import React from "react";

import classes from "./preview.module.scss";

export default function Preview({ file }) {
  const { file: screenshot, src } = file;
  return (
    <div className={classes.preview}>
      <div className={classes["preview-wrapper"]}>
        <img className={classes["image"]} src={src} alt="screenshot" />
      </div>
      <span className={classes["preview-name"]}>{screenshot.name}</span>
    </div>
  );
}
