import React from "react";
import styles from "../styles/MainContainer.module.css";

const MainContainer = () => {
  return (
    <main className={styles.MainContainer}>
      <header className={styles.header}>
        <h1 className={styles.heading1}>Upload a file</h1>
        <p className={styles.subtitle}>Should be Jpeg, Png...</p>
      </header>

      <div className={styles.dropzone}>
        <img src="./images/image.svg" alt="placeholder" />
        <p className={styles.dropzoneText}>Drag & Drop your image here</p>
      </div>
      <div className={styles.last}>
        <p className={styles.p}>Or</p>
        <button className={styles.button}>Choose a file</button>
      </div>
    </main>
  );
};

export default MainContainer;
