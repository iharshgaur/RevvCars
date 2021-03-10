import React from "react";
import CarouselBanner from "../../Components/Dashboard/CarouselBanner";
import Footer from "../../Components/Dashboard/Footer";
import Last from "../../Components/Dashboard/Last";
import Process from "../../Components/Dashboard/Process";
import Testimonials from "../../Components/Dashboard/Testimonials";
import WhyRev from "../../Components/Dashboard/WhyRev";
import Navbar from "../../Components/Navbar/Navbar";
import styles from "./Dashboard.module.css";
function Dashboard() {
  return (
    <div className={styles.Dashboard}>
      <Navbar />
      <CarouselBanner />
      <Process />
      <WhyRev />
      <Testimonials />
      <Footer />
      <Last />
    </div>
  );
}

export default Dashboard;
