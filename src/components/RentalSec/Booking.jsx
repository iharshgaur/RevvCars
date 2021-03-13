import React from "react";
import { useSelector, shallowEqual } from "react-redux";
import styles from "./Booking.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Navbar from "../Navbar/Navbar";
import { SubscriptionFooter } from "../footer/SubscriptionFooter";
import { useHistory } from "react-router";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
    },
  },

  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },
}));

const Booking = () => {
  const classes = useStyles();
  const [name, setName] = React.useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };
  const { bookcars, isLoading, isError } = useSelector(
    (state) => state.mybookcars,
    shallowEqual
  );
  const { city, start_date, end_date } = useSelector(
    (state) => state.dashboard,
    shallowEqual
  );
  const { price } = useSelector((state) => state.price, shallowEqual);

  const startDate = start_date.split("T");
  const endDate1 = end_date.split("T");
  const [duration, setDuration] = React.useState("");
  const [sum, setSum] = React.useState(0);
  let total =
    duration === 0 ? price : Math.round(Number(duration) * Number(price));
  React.useEffect(() => {
    if (start_date !== "" && end_date !== "") {
      let start = start_date.split("T")[0];
      let end = end_date.split("T")[0];

      start = start.split("-").map(Number);
      start = new Date(start[0], start[1] - 1, start[2]);

      end = end.split("-").map(Number);
      end = new Date(end[0], end[1] - 1, end[2]);
      setDuration((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
      setSum((prev) => prev + total);
    }
  }, [start_date, end_date, total]);
  // if (total > 0) {
  //   setSum((prev) => prev + total);
  // }
  const history = useHistory();

  const payment = () => {
    const amount = total !== 0 ? total : price;
    console.log(amount);
    history.push(`/payment/${bookcars._id}/${amount}/rental`);
  };
  return (
    <div>
      <Navbar />
      {isLoading ? (
        <div>.</div>
      ) : (
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
                    fontFamily: "Roboto, sans-serif;",
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
                    <p>
                      {startDate[0]}, {startDate[1]} hrs
                    </p>
                    <img src="to.svg" alt="to" />
                    <p>
                      {endDate1[0]}, {endDate1[1]} hrs
                    </p>
                  </div>
                  <p style={{ textAlign: "center", marginTop: "15px" }}>
                    <p
                      style={{
                        textAlign: "center",
                        marginTop: "13px",
                        fontWeight: "500",
                      }}
                    >
                      Duration:&nbsp;
                      <span style={{ fontWeight: "400" }}>{duration}</span> day
                    </p>
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "15px",
                      fontWeight: "600",
                    }}
                  >
                    {city}
                  </p>
                  <p
                    style={{
                      textAlign: "center",
                      marginTop: "13px",
                      fontWeight: "500",
                    }}
                  >
                    Pricing Plan: Include {bookcars.car_rental_price[0]},
                    includes fuel
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
                        The pricing plan (15 kms/hr, with fuel) cannot be
                        changed after the booking is made
                      </p>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p>FUEL: </p>
                    </td>
                    <td>
                      <p>
                        Included. If you need to refuel during your trip, we
                        will reimburse the fuel bills (while returning the car,
                        please let our executive take a pic of them.
                        Hand-written bills are NOT valid)
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
                        delivering the car to you, our executive will verify
                        your original Driving License and ID proof (same as the
                        ones whose details were provided while making the
                        booking). This verification is mandatory. In the
                        unfortunate case where you cannot show these documents,
                        we will not be able to handover the car to you, and it
                        will be treated as a late cancellation (100% of the fare
                        would be payable). Driving license printed on A4 sheet
                        of paper (original or otherwise) will not be considered
                        as a valid document.
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
                <p>₹{price}</p>
                <p>₹ 400</p>
                <p>Included</p>
                <p>₹ 1000 </p>
              </div>
            </div>
            <div
              style={{
                width: "90%",

                marginLeft: "10px",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div className={classes.root}>
                <div>
                  <TextField
                    id="standard-full-width"
                    label="Promo Code"
                    style={{ margin: 8, color: "#2BBABA" }}
                    placeholder=""
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />
                </div>
              </div>
              <button
                style={{
                  width: "30%",
                  height: "36px",
                  cursor: "pointer",
                  color: "white",
                  backgroundColor: "#2BBABA",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                Apply
              </button>
            </div>
            <hr style={{ marginTop: "20%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                fontSize: "20px",
                marginTop: "7%",
              }}
            >
              <p>Total</p>
              <p>{sum}</p>
            </div>
            <hr style={{ marginTop: "7%" }} />
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "4%",
              }}
            >
              <div className={styles.rightBase}>
                <p>Kms limit </p>
                <p>Fuel</p>
                <p>Extra kms charge </p>
                <p>Tolls, Parking & Inter-state taxes</p>
              </div>
              <div className={styles.rightBase2}>
                <p>₹{bookcars.car_rental_price[0]}</p>
                <p>Included</p>
                <p>₹{bookcars.extra_price}</p>
                <p>Paid by you</p>
              </div>
            </div>
            <div style={{ marginTop: "5%" }}>
              <form className={classes.root} noValidate autoComplete="off">
                <FormControl style={{ color: "#2BBABA" }}>
                  <InputLabel htmlFor="component-simple">
                    Delivery Location
                  </InputLabel>
                  <Input
                    id="component-simple"
                    value={name}
                    onChange={handleChange}
                    style={{ width: "150%", color: "#2BBABA" }}
                  />
                </FormControl>
              </form>
            </div>
            <div
              style={{
                width: "90%",
                margin: " 5% auto",
                height: "15%",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "13px",
                  fontFamily: "Roboto, sans-serif;",
                  paddingTop: "4%",
                  lineHeight: "19px",
                }}
              >
                By clicking on “Pay” below, you agree to Revv’s Terms and
                Conditions and Privacy Policy
              </p>
              <button
                style={{
                  width: "30%",
                  height: "3vw",
                  marginTop: "7%",
                  cursor: "pointer",
                  color: "white",
                  backgroundColor: "#2BBABA",
                  border: "none",
                  borderRadius: "5px",
                }}
                onClick={payment}
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      )}
      <SubscriptionFooter />
    </div>
  );
};

export { Booking };
