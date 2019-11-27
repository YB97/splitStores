import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

import classes from "./dropzone.module.scss";

function Dropzone() {
  const [files, setFiles] = useState([]);
  const [errorText, setError] = useState(false);

  let message = files.length
    ? `${files.length} files added`
    : "Drag 'n' drop some files here, or click to select files";

  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles);
    if (acceptedFiles.length > 5) {
      acceptedFiles.length = 0;
      setError("Max number files is six");
    }
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => (message = "file reading was aborted");
      reader.onerror = () => (message = "file reading has failed");
      reader.onload = () => {
        setError(false);
        setFiles(acceptedFiles);
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={classes.dropzone} {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <>
          <div className={classes.text}>
            {message}
            {errorText ? (
              <span className={classes.error}>{errorText}</span>
            ) : null}
          </div>
        </>
      )}
    </div>
  );
}

export default Dropzone;
