import React from "react";
import classes from "./tags.module.scss";

export default function({ tags }) {
  const tagList = tags.map(tag => {
    return (
      <li className={classes["tag-item"]} key={tag}>
        <span className={classes.tag}>{tag}</span>
      </li>
    );
  });
  return (
    <>
      Tags:
      <ul className={classes["tag-list"]}>{tagList}</ul>
    </>
  );
}
