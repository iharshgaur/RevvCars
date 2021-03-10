import React, { useState } from "react";
import styles from "./Testimonials.module.css";
import Carousel from "react-bootstrap/Carousel";
function Testimonials() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.Testimonials}>
      <div className={styles.Partners}>
        <div className={styles.Partners__Images}>
          <img
            src="https://www.revv.co.in/imgs/company_logo/the-hindu-newpaper.webp"
            alt="The Hindu"
          />
        </div>
        <div className={styles.Partners__Images}>
          <img
            src="https://www.revv.co.in/imgs/company_logo/The-Economic-Times.webp"
            alt="The Economic Times"
          />
        </div>
        <div className={styles.Partners__Images}>
          <img
            src="https://www.revv.co.in/imgs/company_logo/Indian_express.webp"
            alt="The Indian Express"
          />
        </div>
        <div className={styles.Partners__Images}>
          <img
            src="https://www.revv.co.in/imgs/company_logo/BW-logo.png"
            alt="Business World"
          />
        </div>
        <div className={styles.Partners__Images}>
          <img
            src="https://www.revv.co.in/imgs/company_logo/YourStory.webp"
            alt="YourStory"
          />
        </div>
        <div className={styles.Partners__Images}>
          <img
            src="https://www.revv.co.in/imgs/company_logo/businessinsider.png"
            alt="businessinsider"
          />
        </div>
      </div>
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

      <div className={styles.CustomerReviews}>
        <h4>What our Customers are saying</h4>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={500000}>
          <Carousel.Item>
            <h5>SURYA GVS</h5>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Second slide&bg=282c34"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default Testimonials;
