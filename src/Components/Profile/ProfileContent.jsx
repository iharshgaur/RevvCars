import React from "react";
import styles from "./ProfileContent.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/Auth/action";
const useStyles = makeStyles({});

function ProfileContent() {
  const { email, username, cars_subscribed, cars_booked } = useSelector(
    (state) => state.auth.currentUser
  );

  React.useEffect(() => {}, []);

  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <div className={styles.Container}>
      <div className={styles.Container_Left}>
        <div></div>
        <Button className={classes.RightButton}>My profile</Button>
        <Button
          className={classes.RightButton}
          onClick={() => dispatch(logoutUser())}
        >
          Log out
        </Button>
        <div></div>
      </div>
      <div className={styles.Container_Right}>
        <div className={styles.Container_Right_Top}>
          <h5>Username : {username} </h5>
          <h5>Email : {email} </h5>
        </div>

        <div className={styles.Container_Right_Mid}>
          <h4>Cars Rented </h4>
          <div className={styles.Container_Right_Bottom_List}>
            {cars_booked.length === 0 && (
              <div>
                {" "}
                <h5 style={{ color: "grey" }}>Nothing to Show</h5>{" "}
              </div>
            )}
            {cars_booked?.map((car) => (
              <div className={styles.Container_Right_Bottom_List_Car}>
                <img src={car.car_images} alt={car.car_name} />

                <div className={styles.Cars_Info}>
                  <h4>{car.car_name}</h4>
                  <h4>Monthly rental is Rs. {car.car_subscription_price}/-</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.Container_Right_Bottom}>
          <h4>Cars Subscribed </h4>

          <div className={styles.Container_Right_Bottom_List}>
            {cars_subscribed.length === 0 && (
              <div>
                {" "}
                <h5 style={{ color: "grey" }}>Nothing to Show</h5>
              </div>
            )}
            {cars_subscribed?.map((car) => (
              <div className={styles.Container_Right_Bottom_List_Car}>
                <img src={car.car_images} alt={car.car_name} />

                <div className={styles.Cars_Info}>
                  <h4>{car.car_name}</h4>
                  <h4>Monthly payment is Rs. {car.car_subscription_price}/-</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
