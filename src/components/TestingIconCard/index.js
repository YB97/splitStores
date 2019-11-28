import React from "react";

import Input from "../Input";
import Button from "../Button";
import FileInput from "../../hocs/FileInput";

import classes from "./testingiconcard.module.scss";

const TestingIconCard = ({
  variationName,
  icon = null,
  screenshots = null,
  description = "",
  appName = "",
  setIcon,
  id,
  onInputChange = () => {},
  onChange = () => {},
  onDelete = () => {},
  elementForTest,
  changeHandlerWrapper
}) => {
  const fileInputRef = React.createRef();
  const handleIconWrapped = changeHandlerWrapper(setIcon, fileInputRef);

  const onClickHandler = () => {};

  return (
    <div className={classes.wrapper}>
      <Input
        value={variationName}
        onChange={onInputChange}
        title="Variation name"
        titleCentered
      />
      {elementForTest === "Icon" && (
        <>
          <div className={classes.iconLabel}>Icon</div>
          <div className={classes.uploadWrapper}>
            <div className={classes.iconWrap}>
              {icon.value ? (
                <img src={icon.value} className={classes.image} alt="" />
              ) : (
                <div className={classes.imageWait}>
                  <span className={classes["file-content"]}>+</span>
                  <div className={classes["icon-text"]}>
                    {icon.name || "Add icon"}
                  </div>
                </div>
              )}
            </div>
            <div className={classes.buttonWrap}>
              <Button bg="#E3603B" size="small">
                <label
                  htmlFor={"file" + (id !== undefined ? `_${id}` : "")}
                  className={classes.buttonLabel}
                >
                  Upload new file
                </label>
              </Button>
              <input
                ref={fileInputRef}
                accept=".jpg, .jpeg, .png"
                onChange={handleIconWrapped}
                className={classes.file}
                id={"file" + (id !== undefined ? `_${id}` : "")}
                type="file"
              />
              <div className={classes.buttonHelpText}>
                We recommend using .png 250x250px
              </div>
            </div>
          </div>
        </>
      )}
      {elementForTest === "Screenshots" && <>Drag and drop</>}
      {elementForTest === "Description" && (
        <div className={classes["desc-wrapper"]}>
          <div className={classes["item-title"]}>Description</div>
          <Input
            value={description}
            onChange={onChange}
            multiline
            placeholder="Your app description"
          />
        </div>
      )}
      {elementForTest === "App Name" && (
        <div className={classes["desc-wrapper"]}>
          <div className={classes["item-title"]}>App Name</div>
          <Input
            value={appName}
            onChange={onChange}
            placeholder="Your app name"
          />
        </div>
      )}
      <span className={classes["delete"]} onClick={onDelete}>
        &times;
      </span>
    </div>
  );
};

export default FileInput(TestingIconCard);
