import React from "react";
import styles from "./Navbar.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: 350,
    textAlign: "center",
    borderRadius: 10,
    padding: theme.spacing(2, 4, 3),
  },
  paperSignUp: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    width: 350,
    textAlign: "center",
    borderRadius: 10,
    padding: theme.spacing(2, 4, 3),
  },
  inputs: {
    width: "100%",
    marginTop: 50,
  },
  textField: {
    width: "100%",
    marginTop: 15,
  },
  LoginBtn: {
    marginTop: 50,
    color: "white",
    width: "40%",
    backgroundColor: "#0EBABA",
    "&:hover": {
      color: "black",
    },
  },
}));
function Navbar() {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);

  const handleOpenLogin = () => {
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };
  const handleOpenSignUp = () => {
    setOpenSignUp(true);
  };

  const handleCloseSignUp = () => {
    setOpenSignUp(false);
  };
  const [toggleLogin, setToggleLogin] = React.useState(false);
  const [toggleUser, setToggleUser] = React.useState(false);
  return (
    <div className={styles.Navbar}>
      <div className={styles.Navbar__Logo}>
        <img
          src="https://www.revv.co.in/grapheneImages/newopen/logo.svg"
          alt="logo"
        />
        <p className={styles.Navbar__Logo__Text}>Sanitised. Safe</p>
      </div>
      <div></div>
      <div className={styles.Navbar__Button__Cars}>
        <button>
          <b>Hyundai</b> Subscription
        </button>
        <button>
          <b>Mahindra</b> Subscription
        </button>
      </div>
      <div className={styles.Navbar__Button__Info}>
        <button>Cars Subscription</button>
        <button>How it works</button>
        <button>FAQs</button>
        {!toggleLogin ? (
          <>
            <button onClick={handleOpenLogin}>Login / Sign Up</button>
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openLogin}
              onClose={handleCloseLogin}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openLogin}>
                <div className={classes.paper}>
                  <h4 id="transition-modal-title">Login</h4>
                  <div className={classes.inputs}>
                    <TextField
                      className={classes.textField}
                      id="standard-basic"
                      label="Enter Email"
                    />
                    <TextField
                      className={classes.textField}
                      id="standard-basic"
                      label="Enter Password"
                    />
                  </div>

                  <Button className={classes.LoginBtn}>Login</Button>

                  <div className={styles.SignUp}>
                    <p>Don't have a account yet?</p>
                    <button
                      onClick={() => {
                        handleOpenSignUp();
                        handleCloseLogin();
                      }}
                    >
                      Sign Up
                    </button>
                  </div>
                  <hr />

                  <div className={styles.SocialLogin}>
                    <Button>Google </Button>
                    <Button>Facebook </Button>
                  </div>
                </div>
              </Fade>
            </Modal>

            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={openSignUp}
              onClose={handleCloseSignUp}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
              <Fade in={openSignUp}>
                <div className={classes.paperSignUp}>
                  <h4 id="transition-modal-title">Sign Up</h4>
                  <div className={classes.inputs}>
                    <TextField
                      className={classes.textField}
                      id="standard-basic"
                      label="Enter Username"
                    />
                    <TextField
                      className={classes.textField}
                      id="standard-basic"
                      label="Enter Email"
                    />
                    <TextField
                      className={classes.textField}
                      id="standard-basic"
                      label="Enter Password"
                    />
                  </div>

                  <Button className={classes.LoginBtn}>SignUp</Button>
                </div>
              </Fade>
            </Modal>
          </>
        ) : (
          <>
            <button onMouseOver={() => setToggleUser(!toggleUser)}>
              Harsh Gaur
            </button>
            {toggleUser && (
              <div
                className={styles.Login__DropDown}
                onMouseLeave={() => setToggleUser(!toggleUser)}
              >
                <Button style={{ width: "80%" }}>Profile</Button>

                <Button
                  style={{ width: "80%" }}
                  onClick={() => setToggleLogin(false)}
                >
                  Logout
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
