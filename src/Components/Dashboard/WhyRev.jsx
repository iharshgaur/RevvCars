import React from "react";
import styles from "./WhyRev.module.css";

function WhyRev() {
  return (
    <div>
      <h1>Why Revv</h1>
      <div className={styles.Cards}>
        <div className={styles.Cards__Card}>
          <h3>100% Delivery and Pickup</h3>
        </div>
        <div className={styles.Cards__Card}>
          <h3>100% Delivery and Pickup</h3>
        </div>
        <div className={styles.Cards__Card}>
          <h3>100% Delivery and Pickup</h3>
        </div>
        <div className={styles.Cards__Card}>
          <h3>100% Delivery and Pickup</h3>
        </div>
        <div className={styles.Cards__Card}>
          <h3>100% Delivery and Pickup</h3>
        </div>
        <div className={styles.Cards__Card}>
          <h3>100% Delivery and Pickup</h3>
        </div>
      </div>
    </div>
  );
}

export default WhyRev;
