import React from "react";
import Rating from "@material-ui/lab/Rating";
import Button from "../../../../components/Button";
import classes from "./info.module.scss";

export default function({
  variationImgUrl,
  title = "My Icon Variation",
  ageRating = "3+",
  rating = 3.5,
  downloadsCount = 200
}) {
  return (
    <div className={classes.info}>
      <div className={classes["info-content"]}>
        <div className={classes["info-image"]}>
          <div className={classes["img-wrapper"]}>
            <img className={classes.img} src={variationImgUrl} alt="logoapp" />
          </div>
        </div>
        <div className={classes["info-text"]}>
          <h3 className={classes.title}>
            {title} <span className={classes["age-rating"]}>{ageRating}</span>
          </h3>
          <div className={classes.rating}>
            <Rating
              name="simple-controlled"
              precision={0.1}
              value={rating}
              size="small"
              readOnly
            />
            <span className={classes["rating-text"]}>{rating}</span>
          </div>
          <div className={classes.downloads}>
            <span className={classes["downloads-text"]}>
              {downloadsCount} Downloads
            </span>
          </div>
        </div>
      </div>
      <div className={classes["btn-wrap"]}>
        <Button click={() => {}}>Install</Button>
      </div>
    </div>
  );
}
