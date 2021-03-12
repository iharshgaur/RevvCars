import React from "react";
import styles from "./HowItWorks.module.css";
function HowItWorks() {
  return (
    <div className={styles.Container}>
      <div className={styles.Container__Top}>
        <h3>How it works</h3>
        <p>
          Call <b>+91-8860035555</b> to know more
        </p>
      </div>
      <div className={styles.Container__Icons}>
        <div>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-1@2x.png"
            alt="one"
            className={styles.Container__Icons__Background}
          />
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-1.svg"
            alt="One"
          />
          <div>
            <h5>Select & Researve</h5>
            <p>Pick your car model and reserve online</p>
          </div>
        </div>
        <div>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-2@2x.png"
            alt="one"
            className={styles.Container__Icons__Background}
          />
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-2.svg"
            alt="One"
          />
          <div>
            <h5>Super Fast Processing</h5>
            <p>
              We will call you to understand your preferences, basic KYC,
              Refundable Security Deposit etc. (No CIBIL Check Required)
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-3@2x.png"
            alt="one"
            className={styles.Container__Icons__Background}
          />
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-3.svg"
            alt="One"
          />
          <div>
            <h5>Preparing Your Car</h5>
            <p>
              After detailed quality checks and deep cleaning, your car is ready
              for delivery within 10-14 days
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-4@2x.png"
            alt="one"
            className={styles.Container__Icons__Background}
          />
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-4.svg"
            alt="One"
          />
          <div>
            <h5>Home Delivery</h5>
            <p>Get your car delivered at your doorstep</p>
          </div>
        </div>
        <div>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-5@2x.png"
            alt="one"
            className={styles.Container__Icons__Background}
          />
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-5.svg"
            alt="One"
          />
          <div>
            <h5>Hassle Free Experience</h5>
            <p>
              Enjoy your car! We'll take care of routine service & insurance
              claims with doorstep service
            </p>
          </div>
        </div>
        <div>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-howit-work-6@2x.png"
            alt="one"
            className={styles.Container__Icons__Background}
          />
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/ic-web-x-6.svg"
            alt="One"
          />
          <div>
            <h5>Return Anytime or Extend</h5>
            <p>Continue using the car or return it anytime.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
