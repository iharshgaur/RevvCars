import React from "react";
import Switch from "@material-ui/core/Switch";
import axios from "axios";
import styles from "./RentalSec.module.css";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { getCar } from "../../Redux/RentalSec/action";
import { CarsDesc } from "./CarsDesc";
const RentalSec = () => {
  const [city, setCity] = React.useState();
  const [startdate, setStartDate] = React.useState();
  const [enddate, setEndDate] = React.useState();
  const [check, setCheck] = React.useState();
  const handleChange = (event) => {
    setCheck(event.target.checked);
  };
  const [sortOpt, setSortOpt] = React.useState("Low To High");
  const handleSort = () => {};
  // for the carsComponent
  const dispatch = useDispatch();
  const { cars, isLoading, isError } = useSelector(
    (state) => state.mycars,
    shallowEqual
  );
  React.useEffect(() => {
    dispatch(getCar());
  }, []);

  //for the color of rental price

  return (
    <div>
      {/* Navpart Start*/}
      <div className={styles.container}>
        <div className={styles.container__first}>
          <input
            type="text"
            value={city}
            className={styles.input}
            onChange={(e) => setCity(e.target.value)}
          />
          <p className={styles.city}>CITY</p>
          <img src="./locationIcon.png" alt="map" className={styles.map} />
          <input
            type="text"
            value={startdate}
            className={styles.input}
            onChange={(e) => setStartDate(e.target.value)}
          />
          <p className={styles.startDate}>START DATE</p>
          <img src="./dateIcon.svg" alt="dateIcon" className={styles.date} />
          <input
            type="text"
            value={enddate}
            className={styles.input}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <p className={styles.endDate}>END DATE</p>
          <img
            src="./dateIcon.svg"
            alt="dateIcon"
            className={styles.enddateImg}
          />
          <button className={styles.button}>Modify Search</button>
        </div>
      </div>
      {/* end of Navpart */}

      {/* Layout Page */}
      <div className={styles.containerSecond}>
        <div className={styles.pageLink}>
          <span>Car Rental {">"} </span>
          <span>Reant a Car {">"} </span>
          <span>Car Rental in Bangalore {">"} </span>
          <span>Car Rental in Bangalore </span>
        </div>
        <div className={styles.containerWrap}>
          <div className={styles.containerWrap__left}>
            <div className={styles.containerWrap__left__first}>
              <p style={{ marginLeft: "50px" }}>FILTERS</p>
              <p>RESET ALL</p>
            </div>
            <div className={styles.containerWrap__left__second}>
              <div
                style={{
                  width: "50%",
                  height: "26vh",
                  marginTop: "20px",
                  marginLeft: "12px",
                }}
              >
                {/* for the segment style */}
                <h3 style={{ marginBottom: "2.1vh" }}>Segment</h3>
                <div
                  style={{
                    border: "1px solid red",
                    height: "80%",
                    textAlign: "center",
                  }}
                >
                  <input type="checkbox" style={{ marginBottom: "2.4vh" }} />
                  <label htmlFor="">Hatchback</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-4vw", marginBottom: "2.4vh" }}
                  />
                  <label htmlFor="">SUV</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-3.6vw", marginBottom: "2.4vh" }}
                  />
                  <label htmlFor="">MUV</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-2.8vw", marginBottom: "2.4vh" }}
                  />
                  <label htmlFor="">Sedan</label>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "35vh",
                  marginTop: "20px",
                  marginLeft: "12px",
                }}
              >
                {/* for the brand type */}
                <h3 style={{ marginBottom: "2.1vh" }}>Brand</h3>
                <div
                  style={{
                    border: "1px solid red",
                    height: "80%",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ marginBottom: "2.4vh", marginLeft: "-2.6vw" }}
                  />
                  <label htmlFor="">Maruti</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-1.7vw", marginBottom: "2.4vh" }}
                  />
                  <label htmlFor="">Hyundai</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-1.1vw", marginBottom: "2.4vh" }}
                  />
                  <label htmlFor="">Mahindra</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-2.8vw", marginBottom: "2.4vh" }}
                  />
                  <label htmlFor="">Honda</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-2.8vw", marginBottom: "2.4vh" }}
                  />
                  <label htmlFor="">Toyota</label>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "16vh",
                  marginTop: "20px",
                  marginLeft: "12px",
                }}
              >
                {/* for the fuel type */}
                <h3 style={{ marginBottom: "2.1vh" }}>Fuel Type</h3>
                <div
                  style={{
                    border: "1px solid red",
                    height: "80%",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ marginBottom: "2.4vh", marginLeft: "-3.6vw" }}
                  />
                  <label htmlFor="">Disel</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-3vw", marginBottom: "2.4vh" }}
                  />
                  <label htmlFor="">Petrol</label>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "16vh",
                  marginTop: "20px",
                  marginLeft: "12px",
                }}
              >
                {/* for the Transmission Type */}
                <h3 style={{ marginBottom: "2.1vh" }}>Transmission</h3>
                <div
                  style={{
                    border: "1px solid red",
                    height: "80%",
                    textAlign: "center",
                  }}
                >
                  <input type="checkbox" style={{ marginBottom: "2.4vh" }} />
                  <label htmlFor="">Automatic</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-2vw", marginBottom: "2.4vh" }}
                  />
                  <label htmlFor="">Manual</label>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "16vh",
                  marginTop: "20px",
                  marginLeft: "12px",
                }}
              >
                {/* for the seating capacity */}
                <h3 style={{ marginBottom: "2.1vh" }}>Segment</h3>
                <div
                  style={{
                    border: "1px solid red",
                    height: "80%",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ marginBottom: "2.4vh", marginLeft: "-2vw" }}
                  />
                  <label htmlFor="">5 Seats</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-2vw", marginBottom: "2.4vh" }}
                  />
                  <label htmlFor="">7 Seats</label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.containerWrap__right}>
            <div className={styles.containerWrap__right__first}>
              <div style={{ width: "20vw" }}>
                <p style={{}}>
                  Car Rental in <b>{city}</b>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Switch
                  checked={check}
                  onChange={handleChange}
                  color="primary"
                  name="check"
                />
                <p>Prices exclude fuel cost</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <p>Sort by:</p>
                <div className={styles.cont__sort}>
                  <select
                    name="sort"
                    value={sortOpt}
                    onChange={(e) => handleSort(e.target.value)}
                  >
                    <option value="Low to High">Low to High</option>
                    <option value="High to Low">High to Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.containerWrap__right__second}>
              {isLoading ? (
                <div>....isLoading</div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {cars.map((ele) => (
                    <CarsDesc key={ele._id} {...ele} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RentalSec };
