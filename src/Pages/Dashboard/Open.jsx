import React from "react";
import CarouselBannerOpen from "../../Components/Dashboard/CarouselBannerOpen";
import FAQ from "../../Components/Dashboard/FAQ";
import FooterOpen from "../../Components/Dashboard/FooterOpen";
import HowItWorks from "../../Components/Dashboard/HowItWorks";
import LastOpen from "../../Components/Dashboard/LastOpen";
import SubscriptionBenefits from "../../Components/Dashboard/SubscriptionBenefits";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Dashboard.module.css";
import TestimonialsOpen from "../../Components/Dashboard/TestimonialsOpen";
import Comparision from "../../Components/Dashboard/Comparision";
import FeaturedOn from "../../Components/Dashboard/FeaturedOn";
function Open() {
  return (
    <div className={styles.Dashboard}>
      <Navbar />
      <CarouselBannerOpen />
      <SubscriptionBenefits />
      <HowItWorks />
      <FAQ />
      <Comparision />
      <TestimonialsOpen />
      <FeaturedOn />
      <FooterOpen />
      <LastOpen />
    </div>
  );
}

export default Open;
