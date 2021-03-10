import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Switch from "@material-ui/core/Switch";

import styles from "./RentalSec.module.css";
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
            <div>
              <p>FILTERS</p>
              <p>RESET ALL</p>
            </div>
          </div>
          <div className={styles.containerWrap__right}>
            <div>
              <p>Car Rental in {city}</p>
              <Switch
                checked={check}
                onChange={handleChange}
                color="green"
                name="check"
              />
              <p>Prices exclude fuel cost</p>
              <p>
                Sort by:
                <div className={styles.cont__sort}>
                  <select
                    name="sort"
                    value={sortOpt}
                    onChange={(e) => handleSort(e.target.value)}
                  >
                    <option value="Low to High">Low to High</option>
                    <option value="High to Low">High to Low</option>
                  </select>
                </div>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { RentalSec };
