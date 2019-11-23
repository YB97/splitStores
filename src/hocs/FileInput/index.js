import optimizeImage from "../../helpers/optimizeImage";
import React from "react";


export default function FileInputHOC (ImportComponent) {
  const handleFileAsDataUri = (file) => {
    return new Promise(resolve => {
      const reader = new FileReader();
      reader.onload = (function(file) {
        return function(e) {
          const binaryData = e.target.result;
          const base64String = window.btoa(binaryData);
          const value = `data:${file.type};base64,${base64String}`;
          resolve(value);
        };
      })(file);
      reader.readAsBinaryString(file);
    });
  };

  const changeHandlerWrapper = (setImage, fileInputRef) => () => {
    const file = fileInputRef.current.files[0];
    optimizeImage(file, 0.9, 200, 200).then(blob => {
      handleFileAsDataUri(blob).then(value => {
        const newFile = { name: file.name, value };
        setImage(newFile);
      });
    });
  };


  return (props) => {
    return (
      <ImportComponent
        {...props}
        changeHandlerWrapper={changeHandlerWrapper}
      />
    )
  }
}