import React from "react";
import styles from "./TestimonialsOpen.module.css";
function Testimonials() {
  return (
    <div className={styles.Testimonials}>
      <div className={styles.Journey}>
        <h4>Our Journey so far</h4>
        <div className={styles.Journey__Icons__Container}>
          <div className={styles.Journey__Icons}>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/ic-happy-cus.svg"
              alt="revvers"
            />
            <div>
              <h4>1Mn+</h4>
              <p>Happy Revvers</p>
            </div>
          </div>
          <div className={styles.Journey__Icons}>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/ic-across-india.svg"
              alt="location"
            />
            <div>
              <h4>22+ Cities</h4>
              <p>Accross India</p>
            </div>
          </div>
          <div className={styles.Journey__Icons}>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/ic-subscription.svg"
              alt="kms travelled"
            />
            <div>
              <h4>50Mn+</h4>
              <p>Kns Travelled</p>
            </div>
          </div>
          <div className={styles.Journey__Icons}>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/ic-customer-rating.svg"
              alt="rating"
            />
            <div>
              <h4>4.8/5</h4>
              <p>20k+ reviewers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
