import React from "react";
import styles from "./ProfileContent.module.css";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/Auth/action";
const useStyles = makeStyles({});

function ProfileContent() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log(currentUser);
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
          <h5>Username : {currentUser.username} </h5>
          <h5>Email : {currentUser.email} </h5>
        </div>

        <div className={styles.Container_Right_Mid}>
          <h4>Cars Rented </h4>
        </div>

        <div className={styles.Container_Right_Bottom}>
          <h4>Cars Subscribed </h4>
        </div>
      </div>
    </div>
  );
}

export default ProfileContent;
