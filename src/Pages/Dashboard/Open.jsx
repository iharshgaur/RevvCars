import React from "react";
import CarouselBannerOpen from "../../Components/Dashboard/CarouselBannerOpen";
import Footer from "../../Components/Dashboard/Footer";
import Last from "../../Components/Dashboard/Last";
import Process from "../../Components/Dashboard/Process";
import Testimonials from "../../Components/Dashboard/Testimonials";
import WhyRev from "../../Components/Dashboard/WhyRev";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Dashboard.module.css";
function Open() {
  return (
    <div className={styles.Dashboard}>
      <Navbar />
      <CarouselBannerOpen />
      <Process />
      <WhyRev />
      <Testimonials />
      <Footer />
      <Last />
    </div>
  );
}

export default Open;
