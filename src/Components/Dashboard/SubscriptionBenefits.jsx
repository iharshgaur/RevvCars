import React from "react";
import styles from "./SubscriptionBenefits.module.css";
import { Button } from "@material-ui/core";
function SubscriptionBenefits() {
  return (
    <div className={styles.Subscriptions}>
      <h4>Subscription Benefits</h4>
      <div className={styles.Subscriptions__Icons}>
        <div>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/zero.svg"
            alt="zero"
          />
          <h5>No Down Payment</h5>
        </div>
        <div>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/cheaper.svg"
            alt="zero"
          />
          <h5>Cheaper than EMI</h5>
        </div>
        <div>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/maintainance.svg"
            alt="zero"
          />
          <h5>Free Service & maintainance</h5>
        </div>
        <div>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/return.svg"
            alt="zero"
          />
          <h5>Extend or return anytime</h5>
        </div>
      </div>
      <div className={styles.Subscriptions__Information}>
        <div className={styles.Subscriptions__Information__Left}>
          <h4>What is Revv Subscription? </h4>
          <p>
            It’s a different way of owning a car, without any down payment or
            car loan. Your monthly fee covers insurance, service & maintenance.
            Plus, there are no long term commitments - you can return, extend or
            buy-out the car when you want. And all this at a price cheaper than
            an EMI!
          </p>
          <Button className={styles.Subscriptions__Information__Button}>
            Know More
          </Button>
        </div>
        <div className={styles.Subscriptions__Information__Right}>
          <iframe
            title="video"
            width="515"
            height="266"
            src="https://www.youtube.com/embed/1YvzeCxiJn0"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default SubscriptionBenefits;
