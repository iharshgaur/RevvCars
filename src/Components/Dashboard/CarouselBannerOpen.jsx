import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./CarouselBanner.module.css";
import SearchboxOpen from "./SearchboxOpen";
function CarouselBanner() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <SearchboxOpen />
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className={style.CarouselBanner}
        prevIcon={false}
        nextIcon={false}
        controls={false}
        interval={3000}
      >
        <Carousel.Item
          className={style.CarouselItem}
          style={{ backgroundColor: "#FFF7E2" }}
        >
          <img
            src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_1_FG.webp"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item
          className={style.CarouselItem}
          style={{ backgroundColor: "#DDFFEC" }}
        >
          <img
            src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_2_FG.webp"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item
          className={style.CarouselItem}
          style={{ backgroundColor: "#DEF8FF" }}
        >
          <img
            src="https://www.revv.co.in/assets/RentalImages/HomeScreen/heroCarousel/ST_Desktop_3_FG.webp"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default CarouselBanner;
