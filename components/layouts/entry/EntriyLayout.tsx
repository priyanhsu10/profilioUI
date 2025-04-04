import React from "react";
import styles from "./page.module.css";
export default function EntriyLayout() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <div>logo</div>
          <div>space</div>
          <div>space</div>
          <div>Login</div>
          <div>register</div>
        </div>
      </div>
      <div className={styles.footer}>footer</div>
    </>
  );
}
