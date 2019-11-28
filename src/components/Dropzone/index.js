import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import Preview from './Preview'

import classes from "./dropzone.module.scss";
const MAX_SIZE_FILE = 8e6;
const MAX_NUMBER_FILES = 6;

function Dropzone() {
  const [files, setFiles] = useState([]);
  const [errorText, setError] = useState(null);
  const [previews, setPreviews] = useState([]);

  const renderPreviews = () => {
    return previews.map(({ src }) => {
      <Preview />
      return <img src={src} alt="" />;
    });
  };

  let message = files.length
    ? `${files.length} files added`
    : "Drag 'n' drop some files here, or click to select files";

  const onDrop = useCallback(acceptedFiles => {
    if (acceptedFiles.length > 5) {
      acceptedFiles.length = 0;
      setError("Max number files is six");
    }
    setFiles(acceptedFiles);
    Promise.all(acceptedFiles.map(uploadFile)).then(data => {
      setPreviews(data);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={classes.dropzone} {...getRootProps()}>
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
            {previews.length > 0 ? (
              <div className={classes.previews}>{renderPreviews()}</div>
            ) : null}
            {message}
            {errorText && <span className={classes.error}>{errorText}</span>}
          </div>
        </>
      )}
    </div>
  );

  function uploadFile(file) {
    return new Promise((resolve, reject) => {
      if (!validateFile(file)) {
        setError(`file ${file.name} is big. Please, upload another file`);
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
