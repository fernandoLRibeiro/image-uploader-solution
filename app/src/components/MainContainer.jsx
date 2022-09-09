import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styles from "../styles/MainContainer.module.css";

const MainContainer = () => {
  const [imageUrl, setImageUrl] = useState();
  const inputRef = useRef();
  const baseUrl = "https://image-uploader-solution-production.up.railway.app/";

  const uploadFile = async (file) => {
    const fd = new FormData();
    fd.append("image", file, file.name);

    try {
      axios.post(baseUrl, fd).then((res) => {
        console.log(res);
        setImageUrl(baseUrl + res.data);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();

    const file = e.dataTransfer.files[0];

    await uploadFile(file);
  };

  return (
    <main className={styles.MainContainer}>
      <header className={styles.header}>
        <h1 className={styles.heading1}>Upload a file</h1>
        <p className={styles.subtitle}>Should be Jpeg, Png...</p>
      </header>

      <div
        className={styles.dropzone}
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => handleDrop(e)}
      >
        <img
          src={imageUrl ? imageUrl : "./images/image.svg"}
          alt="placeholder"
        />
        <p className={styles.dropzoneText}>Drag & Drop your image here</p>
      </div>
      <div className={styles.last}>
        <p className={styles.p}>Or</p>
        <input
          type="file"
          className={styles.input}
          ref={inputRef}
          onInput={async (e) => await uploadFile(e.target.files[0])}
        />
        <button
          className={styles.button}
          onClick={() => inputRef.current.click()}
        >
          Choose a file
        </button>
      </div>
    </main>
  );
};

export default MainContainer;
