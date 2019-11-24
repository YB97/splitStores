import React from "react";
import classes from "./overview.module.scss";

function Overview({
  screenshots = ["../../../../../static/images/variations/1.jpg"],
  descriptionPreview = "Some title with some words",
  descriptionText = ""
}) {
  const images = screenshots.map(href => {
    return (
      <div className={classes["img-block"]} key={href}>
        <div className={classes["img-wrapper"]}>
          <img className={classes.img} src={href} />
        </div>
      </div>
    );
  });

  return (
    <>
      <div className={classes.overview}>
        <div className={classes["overview-title"]}>
          <span className={classes.title}>Overview</span>
        </div>
        <div className={classes.content}>
          <div className={classes.wrapper}>{images}</div>
        </div>
        <div className={classes.description}>
          <div className={classes["description-preview"]}>
            {descriptionPreview}
          </div>
          <p className={classes.text}>{descriptionText}</p>
        </div>
      </div>
    </>
  );
}

export default Overview;
