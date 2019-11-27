import React from "react";

import classes from "./cardradiocontrol.module.scss";

export default ({
  title,
  name,
  values,
  currentValue,
  className,
  handleChange,
  error = false
}) => {
  const labelClass = error
    ? classes.label + " " + classes["error-label"]
    : classes.label;
    
  return (
    <fieldset className={className + " " + classes.fieldset}>
      <legend className={classes.legend}>{title}</legend>
      <div className={classes.wrapper}>
        {values.map(({ value, img, text, id }) => {
          return (
            <div key={id} className={classes.inputWrapper}>
              <input
                id={id}
                type="radio"
                name={name}
                value={value}
                className={classes.input}
                checked={currentValue === value}
                onChange={handleChange}
              />
              <label htmlFor={id} className={labelClass}>
                <img src={img} alt="" className={classes.image} />
                <div className={classes.text}>{text}</div>
              </label>
            </div>
          );
        })}
      </div>
    </fieldset>
  );
};
