import React from "react";
import Switch from "@material-ui/core/Switch";
import axios from "axios";
import styles from "./RentalSec.module.css";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import {
  getCar,
  getCarHatch,
  getCarSedan,
  getCarSuv,
  getCarMuv,
  getCarHatchSedan,
  getCarHatchSuv,
  getCarSedanSuv,
  getCarPetrol,
  getCarDiesel,
  getCarManual,
  getCarAutomatic,
  getCarSSeats,
  getCarFSeats,
  getCarBrand,
} from "../../Redux/RentalSec/action";
import { useParams } from "react-router-dom";
import { CarsDesc } from "./CarsDesc";
import Navbar from "../Navbar/Navbar";
import { SubscriptionFooter } from "../footer/SubscriptionFooter";
const RentalSec = () => {
  // const [city, setCity] = React.useState();
  // const [startdate, setStartDate] = React.useState();
  // const [enddate, setEndDate] = React.useState();
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

  const { city, start_date, end_date } = useSelector(
    (state) => state.dashboard,
    shallowEqual
  );
  const startDate = start_date.split("T");
  const endDate1 = end_date.split("T");
  let { location } = useParams();

  React.useEffect(() => {
    dispatch(getCar(location));
  }, []);
  //for the sedan types
  const [segment, setSegment] = React.useState({
    HatchBack: false,
    Sedan: false,
    Suv: false,
    Muv: false,
  });
  const handleChangeSegment = (event) => {
    setSegment({ ...segment, [event.target.name]: event.target.checked });
  };

  React.useEffect(() => {
    if (
      segment.HatchBack === false &&
      segment.Sedan === false &&
      segment.Suv === false &&
      segment.Muv === false
    ) {
      dispatch(getCar());
    }

    if (
      segment.HatchBack === true &&
      segment.Sedan === true &&
      segment.Suv === true &&
      segment.Muv === true
    ) {
      dispatch(getCar());
    }
    if (segment.HatchBack === true && segment.Sedan === true) {
      dispatch(getCarHatchSedan());
    }
    if (segment.HatchBack === true && segment.Suv === true) {
      dispatch(getCarHatchSuv());
    }
    if (segment.Sedan === true && segment.Suv === true) {
      dispatch(getCarSedanSuv());
    }
    if (segment.HatchBack === true) {
      dispatch(getCarHatch());
    }
    if (segment.Sedan === true) {
      dispatch(getCarSedan());
    }
    if (segment.Muv === true) {
      dispatch(getCarMuv());
    }
    if (segment.Suv === true) {
      dispatch(getCarSuv());
    }
  }, [segment]);
  //done for the all the segment types

  //done for all the fuel type
  const [fuel, setFuel] = React.useState({
    Petrol: false,
    Diesel: false,
  });

  const handleChangeFuel = (event) => {
    setFuel({ ...fuel, [event.target.name]: event.target.checked });
    console.log("sef", fuel);
  };

  React.useEffect(() => {
    if (fuel.Petrol === true && fuel.Diesel === true) {
      dispatch(getCar());
    }
    if (fuel.Petrol === false && fuel.Diesel === false) {
      dispatch(getCar());
    }
    if (fuel.Petrol === true) {
      dispatch(getCarPetrol());
    }
    if (fuel.Diesel === true) {
      dispatch(getCarDiesel());
    }
  }, [fuel]);
  //for the transmission
  const [trans, setTrans] = React.useState({
    Auto: false,
    Manual: false,
  });

  const handleChangeTrans = (event) => {
    setTrans({ ...trans, [event.target.name]: event.target.checked });
  };

  React.useEffect(() => {
    if (trans.Auto === true && trans.Manual === true) {
      dispatch(getCar());
    }
    if (trans.Auto === false && trans.Manual === false) {
      dispatch(getCar());
    }
    if (trans.Auto === true) {
      dispatch(getCarAutomatic());
    }
    if (trans.Manual === true) {
      dispatch(getCarManual());
    }
  }, [trans]);
  //filtering with Seats
  const [seats, setSeats] = React.useState({
    Five: false,
    Seven: false,
  });

  const handleChangeSeats = (event) => {
    setSeats({ ...seats, [event.target.name]: event.target.checked });
  };

  React.useEffect(() => {
    if (seats.Five === true && seats.Seven === true) {
      dispatch(getCar());
    }
    if (seats.Five === false && seats.Seven === false) {
      dispatch(getCar());
    }
    if (seats.Five === true) {
      dispatch(getCarFSeats());
    }
    if (seats.Seven === true) {
      dispatch(getCarSSeats());
    }
  }, [seats]);
  //filtering with brand (toyota)
  const [toyota, setToyota] = React.useState({
    Innova: false,
  });
  const handleChangeBrand = (event) => {
    setToyota({ ...toyota, [event.target.name]: event.target.checked });
  };
  React.useEffect(() => {
    if (toyota.Innova === false) {
      dispatch(getCar());
    }
    if (toyota.Innova === true) {
      dispatch(getCarBrand());
    }
  }, [toyota]);
  const handleReset = () => {
    dispatch(getCar());
  };

  return (
    <div>
      {/* Navpart Start*/}
      <Navbar />
      <div className={styles.container}>
        <div className={styles.container__first}>
          <input
            type="text"
            value={city}
            className={styles.input}
            // onChange={(e) => setCity(e.target.value)}
          />
          <p className={styles.city}>CITY</p>
          <img
            src="https://www.revv.co.in/assets/RentalImages/HomeScreen/locationIcon.png"
            alt="map"
            className={styles.map}
          />
          <input
            type="text"
            value={startDate[0]}
            className={styles.input}
            // onChange={(e) => setStartDate(e.target.value)}
          />
          <p className={styles.startDate}>START DATE</p>
          <img
            src="https://www.revv.co.in/assets/RentalImages/HomeScreen/dateIcon.svg"
            alt="dateIcon"
            className={styles.date}
          />
          <input
            type="text"
            value={endDate1[0]}
            className={styles.input}
            // onChange={(e) => setEndDate(e.target.value)}
          />
          <p className={styles.endDate}>END DATE</p>
          <img
            src="https://www.revv.co.in/assets/RentalImages/HomeScreen/dateIcon.svg"
            alt="dateIcon"
            className={styles.enddateImg}
            width="10px"
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
              <p
                onClick={handleReset}
                style={{ cursor: "pointer", color: "#2BBABA" }}
              >
                RESET ALL
              </p>
            </div>
            <div className={styles.containerWrap__left__second}>
              <div
                style={{
                  width: "50%",
                  height: "26vh",
                  marginTop: "20px",
                  marginLeft: "12px",
                  textAlign: "center",
                }}
              >
                {/* for the segment style */}
                <h3
                  style={{
                    marginLeft: "0vw",
                    marginBottom: "0.8vh",
                    fontSize: "25px",
                  }}
                >
                  Segment
                </h3>
                <div
                  style={{
                    height: "80%",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ marginBottom: "2.4vh" }}
                    name="HatchBack"
                    value={segment.HatchBack}
                    onClick={handleChangeSegment}
                  />
                  &nbsp;
                  <label htmlFor="">Hatchback</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-4vw", marginBottom: "2.4vh" }}
                    name="Suv"
                    value={segment.Suv}
                    onClick={handleChangeSegment}
                  />
                  &nbsp;
                  <label htmlFor="">SUV</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-3.6vw", marginBottom: "2.4vh" }}
                    name="Muv"
                    value={segment.Muv}
                    onClick={handleChangeSegment}
                  />
                  &nbsp;
                  <label htmlFor="">MUV</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-2.8vw", marginBottom: "2.4vh" }}
                    name="Sedan"
                    value={segment.Sedan}
                    onClick={handleChangeSegment}
                  />
                  &nbsp;
                  <label htmlFor="">Sedan</label>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "35vh",
                  marginTop: "20px",
                  marginLeft: "12px",
                  textAlign: "center",
                }}
              >
                {/* for the brand type */}
                <p
                  style={{
                    fontSize: "25px",
                    marginLeft: "-3vw",
                    marginBottom: "0.8vh",
                  }}
                >
                  Brand
                </p>
                <div
                  style={{
                    height: "80%",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ marginBottom: "2.4vh", marginLeft: "-2.6vw" }}
                  />
                  &nbsp;
                  <label htmlFor="">Maruti</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-1.7vw", marginBottom: "2.4vh" }}
                  />
                  &nbsp;
                  <label htmlFor="">Hyundai</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-1.1vw", marginBottom: "2.4vh" }}
                  />
                  &nbsp;
                  <label htmlFor="">Mahindra</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-2.8vw", marginBottom: "2.4vh" }}
                  />
                  &nbsp;
                  <label htmlFor="">Honda</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-2.8vw", marginBottom: "2.4vh" }}
                    name="Innova"
                    value={segment.Innova}
                    onClick={handleChangeBrand}
                  />
                  &nbsp;
                  <label htmlFor="">Toyota</label>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "16vh",
                  marginTop: "20px",
                  marginLeft: "12px",
                  textAlign: "center",
                }}
              >
                {/* for the fuel type */}
                <h3
                  style={{
                    marginLeft: "0vw",
                    marginBottom: "0.8vh",
                    fontSize: "25px",
                  }}
                >
                  Fuel Type
                </h3>
                <div
                  style={{
                    height: "80%",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ marginBottom: "2.4vh", marginLeft: "-3.6vw" }}
                    name="Diesel"
                    value={segment.Diesel}
                    onClick={handleChangeFuel}
                  />
                  &nbsp;
                  <label htmlFor="">Disel</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-3vw", marginBottom: "2.4vh" }}
                    name="Petrol"
                    value={segment.Petrol}
                    onClick={handleChangeFuel}
                  />
                  &nbsp;
                  <label htmlFor="">Petrol</label>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "16vh",
                  marginTop: "20px",
                  marginLeft: "8px",
                  textAlign: "center",
                }}
              >
                {/* for the Transmission Type */}
                <h3
                  style={{
                    marginLeft: "2vw",
                    marginBottom: "0.8vh",
                    fontSize: "25px",
                  }}
                >
                  Transmission
                </h3>
                <div
                  style={{
                    height: "80%",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ marginBottom: "2.4vh" }}
                    name="Auto"
                    value={segment.Auto}
                    onClick={handleChangeTrans}
                  />
                  &nbsp;
                  <label htmlFor="">Automatic</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-2vw", marginBottom: "2.4vh" }}
                    name="Manual"
                    value={segment.Manual}
                    onClick={handleChangeTrans}
                  />
                  &nbsp;
                  <label htmlFor="">Manual</label>
                </div>
              </div>
              <div
                style={{
                  width: "50%",
                  height: "16vh",
                  marginTop: "20px",
                  marginLeft: "12px",
                  textAlign: "center",
                }}
              >
                {/* for the seating capacity */}
                <h3
                  style={{
                    marginBottom: "2.1vh",
                    marginLeft: "0vw",
                    marginBottom: "0.8vh",
                    fontSize: "25px",
                  }}
                >
                  Segment
                </h3>
                <div
                  style={{
                    height: "80%",
                    textAlign: "center",
                  }}
                >
                  <input
                    type="checkbox"
                    style={{ marginBottom: "2.4vh", marginLeft: "-2vw" }}
                    name="Five"
                    value={segment.Five}
                    onClick={handleChangeSeats}
                  />
                  &nbsp;
                  <label htmlFor="">5 Seats</label>
                  <br />
                  <input
                    type="checkbox"
                    style={{ marginLeft: "-2vw", marginBottom: "2.4vh" }}
                    name="Seven"
                    value={segment.Seven}
                    onClick={handleChangeSeats}
                  />
                  &nbsp;
                  <label htmlFor="">7 Seats</label>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.containerWrap__right}>
            <div className={styles.containerWrap__right__first}>
              <div style={{ width: "20vw", textAlign: "left" }}>
                <p style={{ marginLeft: "-20%" }}>
                  Car Rental in <b>{city}</b>
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <Switch
                  checked={check}
                  onChange={handleChange}
                  color="primary"
                  name="check"
                />
                <p style={{ marginTop: "2%" }}>Prices exclude fuel cost</p>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <p style={{ marginTop: "5px" }}>Sort by:</p>
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
      <SubscriptionFooter />
    </div>
  );
};

export { RentalSec };
