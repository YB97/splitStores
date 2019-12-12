import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import Preview from "./Preview";

import classes from "./dropzone.module.scss";
const MAX_SIZE_FILE = 8e6;
const MAX_NUMBER_FILES = 8;

function Dropzone({ screenshots = [], onUpload = data => {}, error }) {
  const [files, setFiles] = useState([]);
  const [errorText, setError] = useState(null);

  const renderPreviews = () => {
    return screenshots.map(file => {
      return (
        <div className={classes.preview} key={file.file.path}>
          <Preview file={file} />
        </div>
      );
    });
  };

  let message = files.length
    ? `${files.length} files added`
    : "Drag 'n' drop some files here, or click to select files (image)";

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length <= MAX_NUMBER_FILES) {
      setFiles(acceptedFiles);
    }
    Promise.all(acceptedFiles.map(uploadFile))
      .then(data => {
        if (data.length > MAX_NUMBER_FILES) {
          setError(
            `Number of files selected for upload (${data.length}) exceeds maximum allowed limit of 8`
          );
          onUpload({});
        } else {
          setError(false);
          onUpload(data);
        }
      })
      .catch(e => {
        console.log(e);
      });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      className={`${classes.dropzone} ${
        errorText || error ? classes["dropzone_error"] : null
      }`}
      {...getRootProps()}
    >
      <input
        {...getInputProps()}
        size={MAX_SIZE_FILE * MAX_NUMBER_FILES}
        accept="image/*"
      />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <>
          <div className={classes.text}>
            {screenshots.length > 0 &&
            window.innerWidth >= 768 &&
            !errorText ? (
              <div className={classes.previews}>{renderPreviews()}</div>
            ) : null}
            {errorText ? (
              <span className={classes.error}>{errorText}</span>
            ) : (
              message
            )}
          </div>
        </>
      )}
    </div>
  );

  function uploadFile(file) {
    return new Promise((resolve, reject) => {
      if (!validateFile(file)) {
        setError(`file ${file.path} is big. Please, upload another file`);
      }
      const reader = new FileReader();

      reader.onabort = () => reject("file reading was aborted");
      reader.onerror = () => reject("file reading has failed");
      reader.onload = () => {
        const binaryStr = reader.result;
        resolve({ file, src: binaryStr });
      };
      reader.readAsDataURL(file);
    });
  }
}

export default Dropzone;

function validateFile(file) {
  if (file.size > MAX_SIZE_FILE) {
    return false;
  }
  return true;
}
