import React from "react";

import Button from "../../../Button";
import FileInput from "../../../../hocs/FileInput";
import classes from "./testingIcon.module.scss";

function TestingIcon({ icon, changeHandlerWrapper, setIcon = () => {} }) {
  const fileInputRef = React.createRef();
  const handleIconWrapped = changeHandlerWrapper(setIcon, fileInputRef);

  return (
    <>
      <div className={classes.iconLabel}>Icon</div>
      <div className={classes.uploadWrapper}>
        <div className={classes.iconWrap}>
          {icon ? (
            <img src={icon.value} className={classes.image} alt="" />
          ) : (
            <div className={classes.imageWait}>
              <span className={classes["file-content"]}>+</span>
              <div className={classes["icon-text"]}>Add icon</div>
            </div>
          )}
        </div>
        <div className={classes.buttonWrap}>
          <Button bg="#E3603B" size="small">
            <label htmlFor="file" className={classes.buttonLabel}>
              Upload new file
            </label>
          </Button>
          <input
            ref={fileInputRef}
            accept=".jpg, .jpeg, .png"
            onChange={handleIconWrapped}
            className={classes.file}
            id="file"
            type="file"
          />
          <div className={classes.buttonHelpText}>
            We recommend using .png 250x250px
          </div>
        </div>
      </div>
    </>
  );
}

export default FileInput(TestingIcon);
