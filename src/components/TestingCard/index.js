import React from "react";

import Input from "../Input";
import Button from "../Button";
import TestingIcon from "./components/TestingIcon";
import optimizeImage from "../../helpers/optimizeImage";

import classes from "./testingiconcard.module.scss";

const TestingCard = ({
  variationName,
  onInputChange = () => {},
  onDelete = () => {},
  testingItem = null,
  setTestingItem = id => {},
  elementForTest
}) => {
  const testingIconSettings = {
    icon: testingItem,
    setIcon: setTestingItem
  };

  return (
    <div className={classes.wrapper}>
      <Input
        value={variationName}
        onChange={onInputChange}
        title="Variation name"
        titleCentered
      />
      {elementForTest === "Icon" && <TestingIcon {...testingIconSettings} />}
      <span className={classes["delete"]} onClick={onDelete}>
        &times;
      </span>
    </div>
  );
};

export default TestingCard;
