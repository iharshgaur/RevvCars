import React from "react";
import styles from "./FeaturedOn.module.css";
function FeaturedOn() {
  return (
    <div className={styles.Featured}>
      <h2 style={{ color: "grey" }}>
        As <b style={{ color: "black" }}> Featured On</b>
      </h2>
      <div className={styles.Cards}>
        <div className={styles.Cards__Card}>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/logo-fortune-india@2x.jpg"
            alt="banner"
          />
          <div>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/left-quote.svg"
              alt="quote"
            />
            <h5>Indians are moving away from car ownership</h5>
          </div>
        </div>
        <div className={styles.Cards__Card}>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/logo-business-standard@2x.jpg"
            alt="banner"
          />{" "}
          <div>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/left-quote.svg"
              alt="quote"
            />
            <h5>
              Car-sharing partnership with Revv: Hyundai Motor India to launch
              subscription model in 6 cities
            </h5>
          </div>
        </div>
        <div className={styles.Cards__Card}>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/logo-et-prime@2x.jpg"
            alt="banner"
          />{" "}
          <div>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/left-quote.svg"
              alt="quote"
            />
            <h5>Why Hyundai & Mahindra are chasing this car-rental startup</h5>
          </div>
        </div>
        <div className={styles.Cards__Card}>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/logo-tech-crunch@2x.jpg"
            alt="banner"
          />{" "}
          <div>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/left-quote.svg"
              alt="quote"
            />
            <h5>
              Mahindra partners Revv to bring subscription-based plan for retail
              customers
            </h5>
          </div>
        </div>
        <div className={styles.Cards__Card}>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/logo-auto-car@2x.jpg"
            alt="banner"
          />{" "}
          <div>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/left-quote.svg"
              alt="quote"
            />
            <h5>
              Hyundai leads $14.3M investment in Indian car rental startup Revv
            </h5>
          </div>
        </div>
        <div className={styles.Cards__Card}>
          <img
            src="https://www.revv.co.in/grapheneImages/newopen/logo-busi-insider@2x.jpg"
            alt="banner"
          />{" "}
          <div>
            <img
              src="https://www.revv.co.in/grapheneImages/newopen/left-quote.svg"
              alt="quote"
            />
            <h5>
              Revv lets users keep a car for up to 4 years for a monthly
              subscription fee
            </h5>
          </div>
        </div>
      </div>

      <div className={styles.CardsInvestors__Container}>
        <h2 style={{ color: "grey" }}>
          Our <b style={{ color: "black" }}>Investors</b>
        </h2>
        <div className={styles.CardsInvestors}>
          <div className={styles.CardsInvestors__Card}>
            <div className={styles.CardsInvestors__Card__Img}>
              <img
                src="https://www.revv.co.in/grapheneImages/newopen/test-logo-hyundai@2x.png"
                alt="banner"
              />
            </div>
            <div>
              <h5>Hyundai Motor Company</h5>
            </div>
          </div>
          <div className={styles.CardsInvestors__Card}>
            <div className={styles.CardsInvestors__Card__Img}>
              <img
                src="https://www.revv.co.in/grapheneImages/newopen/test-logo-edelweiss@2x.png"
                alt="banner"
              />
            </div>
            <div>
              <h5>Edelweiss Financial Services</h5>
            </div>
          </div>
          <div className={styles.CardsInvestors__Card}>
            <div className={styles.CardsInvestors__Card__Img}>
              <img
                src="https://www.revv.co.in/grapheneImages/newopen/test-logo-di@2x.png"
                alt="banner"
              />
            </div>
            <div>
              <h5>Dream Incubator</h5>
            </div>
          </div>
          <div className={styles.CardsInvestors__Card}>
            <div className={styles.CardsInvestors__Card__Img}>
              <img
                src="https://www.revv.co.in/grapheneImages/newopen/test-logo-beenext.png"
                alt="banner"
              />
            </div>
            <div>
              <h5>Beenext</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedOn;
