import React from "react";
import styles from "./Navbar.module.css";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { authUser, logoutUser, createUser } from "../../Redux/Auth/action";
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
  const [email, setEmail] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const [openLogin, setOpenLogin] = React.useState(false);
  const [openSignUp, setOpenSignUp] = React.useState(false);
  const { isAuth, currentUser } = useSelector((state) => state.auth);

  const handleLogin = () => {
    const payload = {
      email,
      password,
    };

    dispatch(authUser(payload));
  };

  const handleCreateUser = () => {
    const payload = {
      username,
      email,
      password,
      cars_booked: [""],
      cars_subscribed: [""],
    };
    dispatch(createUser(payload));
  };
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

  React.useEffect(() => {
    if (isAuth) {
      setToggleLogin(true);
    } else {
      setToggleLogin(false);
    }
  }, [isAuth]);
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
            <button onClick={handleOpenLogin}>Login or Signup</button>
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
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      className={classes.textField}
                      id="standard-basic"
                      label="Enter Password"
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <Button className={classes.LoginBtn} onClick={handleLogin}>
                    Login
                  </Button>

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
                    <Button style={{ position: "relative" }}>
                      {" "}
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBvbHlnb24gcG9pbnRzPSI0NDgsMjI0IDQ0OCwxNjAgNDE2LDE2MCA0MTYsMjI0IDM1MiwyMjQgMzUyLDI1NiA0MTYsMjU2IDQxNiwzMjAgNDQ4LDMyMCA0NDgsMjU2IDUxMiwyNTYgNTEyLDIyNCAgICIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wb2x5Z29uPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMTYwLDIyNHY2NGg5MC41MjhjLTEzLjIxNiwzNy4yNDgtNDguOCw2NC05MC41MjgsNjRjLTUyLjkyOCwwLTk2LTQzLjA3Mi05Ni05NmMwLTUyLjkyOCw0My4wNzItOTYsOTYtOTYgICAgYzIyLjk0NCwwLDQ1LjAyNCw4LjIyNCw2Mi4xNzYsMjMuMTY4bDQyLjA0OC00OC4yNTZDMjM1LjQyNCwxMDkuODI0LDE5OC40MzIsOTYsMTYwLDk2QzcxLjc3Niw5NiwwLDE2Ny43NzYsMCwyNTYgICAgczcxLjc3NiwxNjAsMTYwLDE2MHMxNjAtNzEuNzc2LDE2MC0xNjB2LTMySDE2MHoiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD4KCTwvZz4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8L2c+PC9zdmc+"
                        alt="google"
                        style={{
                          width: "20px",
                          position: "absolute",
                          left: "10px",
                        }}
                      />
                      Google{" "}
                    </Button>
                    <Button style={{ position: "relative" }}>
                      <img
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                        alt="facebook"
                        style={{
                          width: "20px",
                          position: "absolute",
                          left: "10px",
                        }}
                      />
                      Facebook{" "}
                    </Button>
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
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                      className={classes.textField}
                      id="standard-basic"
                      label="Enter Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <TextField
                      className={classes.textField}
                      id="standard-basic"
                      label="Enter Password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <Button
                    className={classes.LoginBtn}
                    onClick={handleCreateUser}
                  >
                    SignUp
                  </Button>
                </div>
              </Fade>
            </Modal>
          </>
        ) : (
          <>
            <button onMouseOver={() => setToggleUser(!toggleUser)}>
              {currentUser.username}
            </button>
            {toggleUser && (
              <div
                className={styles.Login__DropDown}
                onMouseLeave={() => setToggleUser(!toggleUser)}
              >
                <Button style={{ width: "80%" }}>Profile</Button>

                <Button
                  style={{ width: "80%" }}
                  onClick={() => {
                    dispatch(logoutUser());
                  }}
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
