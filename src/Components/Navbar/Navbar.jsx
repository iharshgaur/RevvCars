import React from "react";
import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__Logo}>
        <img
          src="https://www.revv.co.in/grapheneImages/newopen/logo.svg"
          alt="logo"
        />
      </div>
      <div></div>
      <div className={styles.Navbar__Button__Cars}>
        <button>Hyundai Subscription</button>
        <button>Mahindra Subscription</button>
      </div>
      <div className={styles.Navbar__Button__Info}>
        <button>Cars Subscription</button>
        <button>How it works</button>
        <button>FAQs</button>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
