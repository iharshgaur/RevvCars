import React from "react";
import styles from "./CarsDesc.module.css";
import { useDispatch } from "react-redux";
import { getCarById } from "../../Redux/Booking/action";
import { Link } from "react-router-dom";
import { getcarPrice } from "../../Redux/carPrice/action";
const CarsDesc = ({
  car_name,
  car_images,
  car_rental_price,
  car_specs,
  extra_price,
  car_is_booked,
  _id,
}) => {
  //for the color of rental price
  const [divcolor, setDivColor] = React.useState("white");
  const [divText, setDivText] = React.useState("#1caba2");
  const [trueDiv, setTrueDiv] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const handleChangeColor = (price) => {
    setValue(price);
    setTrueDiv((prev) => !prev);
    if (trueDiv) {
      setDivColor("white");
      setDivText("#1caba2");
    } else {
      setDivColor("#E3E3E3");
      setDivText("black");
    }
  };
  const [boxActive, SetActive] = React.useState("");

  const hanldeActive = (num) => {
    return SetActive(num);
  };
  const dispatch = useDispatch();
  const handleCheckOut = (id) => {
    dispatch(getCarById(id));
  };
  const handlePrice = (e) => {
    dispatch(getcarPrice(e));
  };
  const handlePrice1 = (e) => {
    dispatch(getcarPrice(e));
  };
  const handlePrice2 = (e) => {
    dispatch(getcarPrice(e));
  };

  return (
    <div>
      <div className={styles.container1}>
        <div className={styles.container2}>
          <div className={styles.container2__a}>
            <p
              style={{
                textAlign: "center",
                paddingTop: "4%",
                fontSize: "18px",
                fontWeight: "600",
                fontFamily: "oboto, sans-serif;",
              }}
            >
              {car_name}
            </p>
          </div>
          <div className={styles.container2__b}>
            <div className={styles.container2__b_a}>
              <img src={car_images} alt="car_image" />
            </div>
          </div>
          <div className={styles.container2__c}>
            <div>
              <img
                src="https://www.revv.co.in/imgs/car-card/automatic.svg"
                alt="automatic"
              />
              &nbsp;
              {car_specs[0]}
            </div>
            <div>
              <img
                src="https://www.revv.co.in/imgs/car-card/petrol.svg"
                alt="petrol"
              />
              &nbsp;{car_specs[1]}
            </div>
            <div>
              <img
                src="https://www.revv.co.in/imgs/car-card/seat.svg"
                alt="seat"
              />
              &nbsp;{car_specs[2]}
            </div>
          </div>
        </div>
        <div className={styles.container3}>
          <div
            onClick={() => hanldeActive("1")}
            className={boxActive === "1" ? styles.bg : styles.container3__a}
          >
            <p
              style={{
                paddingTop: "10px",
                fontSize: "18px",
                fontFamily: "'Roboto', sans-serif",
              }}
              onClick={() => handlePrice(car_rental_price[0])}
            >
              ₹{car_rental_price[0]}
            </p>
            <p
              style={{
                marginTop: "-20%",
                fontSize: "9px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              1085 kms
            </p>
          </div>
          <div
            onClick={() => hanldeActive("3")}
            className={boxActive === "3" ? styles.bg : styles.container3__a}
          >
            <p
              style={{
                paddingTop: "10px",
                fontSize: "18px",
                fontFamily: "'Roboto', sans-serif",
              }}
              onClick={() => handlePrice1(car_rental_price[1])}
            >
              ₹{car_rental_price[1]}
            </p>
            <p
              style={{
                marginTop: "-20%",
                fontSize: "9px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              3255 kms
            </p>
          </div>
          <div
            onClick={() => hanldeActive("6")}
            className={boxActive === "6" ? styles.bg : styles.container3__a}
          >
            <p
              style={{
                paddingTop: "10px",
                fontSize: "18px",
                fontFamily: "'Roboto', sans-serif",
              }}
              onClick={() => handlePrice2(car_rental_price[2])}
            >
              ₹{car_rental_price[2]}
            </p>
            <p
              style={{
                marginTop: "-20%",
                fontSize: "9px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              5425 kms
            </p>
          </div>
        </div>
        <div className={styles.container4}>
          <p style={{ marginTop: "10%", fontSize: "12px", color: "#767676" }}>
            Extra km charge @ <br /> ₹{extra_price}/km
          </p>
          {car_is_booked ? (
            <button
              style={{
                width: "8vw",
                height: "5vh",
                backgroundColor: "white",
                color: "red",
                border: "1px solid blue",
                borderRadius: "5px",
                fontFamily: "Roboto,sans-serif",
                fontWeight: "700",
                fontStretch: "normal",
              }}
            >
              SOLD OUT
            </button>
          ) : (
            <Link to="/bookcars">
              <button
                style={{
                  width: "8vw",
                  height: "5vh",
                  backgroundColor: "#0ebaba",
                  color: "white",
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "5px",
                  fontFamily: "Roboto,sans-serif",
                  fontWeight: "700",
                  fontStretch: "normal",
                }}
                onClick={() => handleCheckOut(_id)}
              >
                BOOK
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export { CarsDesc };
