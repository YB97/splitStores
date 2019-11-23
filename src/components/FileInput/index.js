import FileInput from "../../hocs/FileInput";
import classes from "./fileinput.module.scss";
import React from "react";


let Component = ({ changeHandlerWrapper, setImage, image }) => {
  const fileInputRef = React.createRef();
  const handleImageWrapped = changeHandlerWrapper(setImage, fileInputRef);

  return (
    <div className="icon">
      <div className="input-wrapper">
        <label
          htmlFor="file"
          className={`${classes["file-label"]} ${
            image.name ? classes["file-add"] : ""
            }`}
        >
          {image.value ? (
            <img src={image.value} alt="" />
          ) : (
            <>
              <span className={classes["file-content"]}>+</span>
              <div className={classes["icon-text"]}>
                {image.name || "Add icon"}
              </div>
            </>
          )}
        </label>
        <input
          ref={fileInputRef}
          accept=".jpg, .jpeg, .png"
          onChange={handleImageWrapped}
          className={classes.file}
          id="file"
          type="file"
        />
      </div>
    </div>
  )
};

export default FileInput(Component);