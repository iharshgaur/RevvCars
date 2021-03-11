import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import styles from "./Booking.module.css";
const Booking = () => {
  const { bookcars, isLoading, isError } = useSelector(
    (state) => state.mybookcars,
    shallowEqual
  );
  console.log("bookcars", bookcars);
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.left__first}>
            <div className={styles.left__first__left}>
              <p
                style={{
                  textAlign: "center",
                  paddingTop: "4%",
                  fontSize: "18px",
                  fontWeight: "600",
                  fontFamily: "oboto, sans-serif;",
                }}
              >
                {bookcars.car_name}
              </p>

              <div className={styles.container2__b_a}>
                <img src={bookcars.car_images} alt="car_image" />
              </div>
              <div className={styles.left__third}>
                <div style={{ textAlign: "center" }}>
                  <img src="automatic.svg" alt="automatic" />
                  <p style={{ fontSize: "10px" }}>{bookcars.car_specs[0]}</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img src="petrol.svg" alt="petrol" />
                  <p style={{ fontSize: "10px" }}>{bookcars.car_specs[1]}</p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <img src="seat.svg" alt="seat" />
                  <p style={{ fontSize: "10px" }}>
                    {bookcars.car_specs[2]}seat
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.left__first__second}>
              <div className={styles.left__first__second__heading}>
                <p className={styles.heading}>
                  <span>BOOKING DETAILS</span>
                </p>
              </div>
              <div className={styles.left__first__second__bodyPart}>
                <div className={styles.left__first__second__bodyPart__a}>
                  <p>start_date</p>
                  <img src="to.svg" alt="to" />
                  <p>end_date</p>
                </div>
                <p style={{ textAlign: "center", marginTop: "15px" }}>
                  Duartion
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "15px",
                    fontWeight: "600",
                  }}
                >
                  city
                </p>
                <p
                  style={{
                    textAlign: "center",
                    marginTop: "13px",
                    fontWeight: "500",
                  }}
                >
                  Pricing Plan: Include {bookcars.car_rental_price[0]}, includes
                  fuel
                </p>
              </div>
            </div>
          </div>
          <div className={styles.left__second}>
            <div className={styles.left__first__second__heading}>
              <p className={styles.heading1}>
                <span>IMPORTANT POINTS TO REMEMBER</span>
              </p>
            </div>
            <table>
              <tbody>
                <tr>
                  <td>
                    <p>CHANGE IN PRICING PLAN:</p>
                  </td>
                  <td>
                    <p>
                      The pricing plan (15 kms/hr, with fuel) cannot be changed
                      after the booking is made
                    </p>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>FUEL: </p>
                  </td>
                  <td>
                    <p>
                      Included. If you need to refuel during your trip, we will
                      reimburse the fuel bills (while returning the car, please
                      let our executive take a pic of them. Hand-written bills
                      are NOT valid)
                    </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>TOLLS, PARKING, INTER-STATE TAXES:</p>
                  </td>
                  <td>
                    <p>To be paid by you.</p>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>ID VERIFICATION:</p>
                  </td>
                  <td>
                    <p>
                      Please keep your original Driving License handy. While
                      delivering the car to you, our executive will verify your
                      original Driving License and ID proof (same as the ones
                      whose details were provided while making the booking).
                      This verification is mandatory. In the unfortunate case
                      where you cannot show these documents, we will not be able
                      to handover the car to you, and it will be treated as a
                      late cancellation (100% of the fare would be payable).
                      Driving license printed on A4 sheet of paper (original or
                      otherwise) will not be considered as a valid document.
                    </p>{" "}
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>PRE-HANDOVER INSPECTION:</p>
                  </td>
                  <td>
                    <p>
                      Please inspect the car (including the fuel gauge and
                      odometer) thoroughly before approving the checklist.
                    </p>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className={styles.right}>
          <p className={styles.heading3}>
            <span>FARE DETAILS</span>
          </p>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <div className={styles.rightBase}>
              <p>Base fare</p>
              <p>Doorstep delivery & pickup</p>
              <p>Insurance & GST</p>
              <p>Refundable security deposit</p>
            </div>
            <div className={styles.rightBase2}>
              <p>₹{bookcars.car_rental_price[0]}</p>
              <p>₹ 400</p>
              <p>Included</p>
              <p>₹ 1000 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Booking };
