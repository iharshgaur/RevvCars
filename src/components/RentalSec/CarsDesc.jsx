import React from "react";
import styles from "./CarsDesc.module.css";
import { useDispatch } from "react-redux";
import { getCarById } from "../../Redux/Booking/action";
import { Link } from "react-router-dom";
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
  const dispatch = useDispatch();
  const handleCheckOut = (id) => {
    dispatch(getCarById(id));
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
              <img src="automatic.svg" alt="automatic" />
              &nbsp;
              {car_specs[0]}
            </div>
            <div>
              <img src="petrol.svg" alt="petrol" />
              &nbsp;{car_specs[1]}
            </div>
            <div>
              <img src="seat.svg" alt="seat" />
              &nbsp;{car_specs[2]}
            </div>
          </div>
        </div>
        <div className={styles.container3}>
          <div
            className={styles.container3__a}
            style={{ backgroundColor: divcolor, color: divText }}
            onClick={handleChangeColor}
          >
            <p
              style={{
                paddingTop: "10px",
                fontSize: "18px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              ₹{car_rental_price[0]}
            </p>
            <p
              style={{
                paddingTop: "2px",
                fontSize: "9px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              1085 kms
            </p>
          </div>
          <div
            className={styles.container3__a}
            style={{ backgroundColor: divcolor, color: divText }}
            onClick={() => handleChangeColor(car_rental_price[1])}
          >
            <p
              style={{
                paddingTop: "10px",
                fontSize: "18px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              ₹{car_rental_price[1]}
            </p>
            <p
              style={{
                paddingTop: "2px",
                fontSize: "9px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              3255 kms
            </p>
          </div>
          <div className={styles.container3__a}>
            <p
              style={{
                paddingTop: "10px",
                fontSize: "18px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              ₹{car_rental_price[2]}
            </p>
            <p
              style={{
                paddingTop: "2px",
                fontSize: "9px",
                fontFamily: "'Roboto', sans-serif",
              }}
            >
              5425 kms
            </p>
          </div>
        </div>
        <div className={styles.container4}>
          <p>
            Extra km charge @ <br /> ₹{extra_price}/km
          </p>
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
              {car_is_booked ? <p>SOLD OUT</p> : <p>BOOK</p>}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export { CarsDesc };
