import { useState, useRef } from "react";
import classNames from "classnames/bind";
import styles from "./upload.module.scss";

const cx = classNames.bind(styles);
const DragDropFiles = () => {
  const [files, setFiles] = useState(null);
  const [file, setFile] = useState(null);
  const inputRef = useRef();

  const handleFileChange = (e) => {
    setFiles(e.target.files)

  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event)
    setFiles(event.dataTransfer.files)
  };
  
  // send files to the server // learn from my other video
  const handleUpload = () => {
    const formData = new FormData();
    formData.append("Files", files);
    console.log(formData,file,files)
  };

  if (files) return (
    <div className={cx("uploads")}>
        <ul>
            {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li> )}
        </ul>
        <div className={cx("actions")}>
            <button onClick={() => setFiles(null)}>Cancel</button>
            <button onClick={handleUpload}>Upload</button>
        </div>
    </div>
  )

  return (
    <>
        <div 
            className={cx("dropzone")}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >
          <h1>Drag and Drop Files to Upload</h1>
          <h1>Or</h1>
          <input 
            type="file"
            multiple
            onChange={handleFileChange}
            hidden

            ref={inputRef}
          />
          <button onClick={() => inputRef.current.click()}>Select Files</button>
        </div>
    </>
  );
};

export default DragDropFiles;
