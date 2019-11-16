import React from "react";

import Input from "../Input";
import Button from "../Button";

import classes from "./testingiconcard.module.scss";

export default function TestingIconCard({
  variationName,
  icon = null,
  onInputChange = () => {},
  onDelete = () => {}
  // icon = "../../../static/images/apps/clash-royale.jpg"
}) {
  const onClickHandler = () => {};

  return (
    <div className={classes.wrapper}>
      <Input
        value={variationName}
        onChange={onInputChange}
        title="Variation name"
        titleCentered
      />
      <div className={classes.iconLabel}>Icon</div>
      <div className={classes.uploadWrapper}>
        <div className={classes.iconWrap}>
          {icon ? (
            <img src={icon} alt="" className={classes.image} />
          ) : (
            <div className={classes.image}></div>
          )}
        </div>
        <div className={classes.buttonWrap}>
          <Button click={onClickHandler} bg="#E3603B" size="small">
            Upload new file
          </Button>
          <div className={classes.buttonHelpText}>
            We recommend using .png 250x250px
          </div>
        </div>
      </div>
      <span className={classes["delete"]} onClick={onDelete}>
        &times;
      </span>
    </div>
  );
}
