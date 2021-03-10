import React from "react";
import style from "./Searchbox.module.css";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
const cities = [
  {
    value: "Delhi-NCR",
    label: "Delhi-NCR",
  },
  {
    value: "Mumbai",
    label: "Mumbai",
  },
  {
    value: "Bangalore",
    label: "Bangalore",
  },
  {
    value: "Chennai",
    label: "Chennai",
  },
  {
    value: "Hydrabad",
    label: "Hydrabad",
  },
  {
    value: "Pune",
    label: "Pune",
  },
  {
    value: "Kolkata",
    label: "Kolkata",
  },
];

function Searchbox() {
  const [city, setCity] = React.useState("Delhi-NCR");
  const [open, setOpen] = React.useState(false);
  const [rental, setRental] = React.useState(true);
  const [subscription, setSubscription] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={style.SearchBox}>
      <div className={style.SearchBox__TopRow}>
        <button
          style={
            rental
              ? {
                  width: 180,
                  margin: "1%",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "70px",
                  borderRadius: "15px",
                  border: "none",
                  backgroundColor: "transparent",
                  boxShadow: "0 0 2px",
                  color: "white",
                  backgroundImage:
                    "linear-gradient(270deg, #1caba2 25%, #1c7fab)",
                }
              : {
                  width: 180,
                  margin: "1%",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "70px",
                  borderRadius: "15px",
                  border: "none",
                  backgroundColor: "transparent",
                  boxShadow: "0 0 2px",
                }
          }
          onClick={() => {
            setSubscription(false);
            setRental(true);
          }}
        >
          Rentals
        </button>
        <button
          style={
            subscription
              ? {
                  width: 180,
                  margin: "1%",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "70px",
                  borderRadius: "15px",
                  border: "none",
                  backgroundColor: "transparent",
                  boxShadow: "0 0 2px",
                  color: "white",
                  backgroundImage:
                    "linear-gradient(270deg, #1caba2 25%, #1c7fab)",
                }
              : {
                  width: 180,
                  margin: "1%",
                  fontSize: "18px",
                  fontWeight: "bold",
                  height: "70px",
                  borderRadius: "15px",
                  border: "none",
                  backgroundColor: "transparent",
                  boxShadow: "0 0 2px",
                }
          }
          onClick={() => {
            setSubscription(true);
            setRental(false);
          }}
        >
          Subscriptions
        </button>
      </div>

      <div className={style.SearchBox__MidRow}>
        <img src="https://www.revv.co.in/imgs/logo-rentals.svg" alt="Banner" />
        <h4>Self drive car rentals in India</h4>
      </div>

      <div className={style.SearchBox__Dropdowns}>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Select your city </DialogTitle>
          <DialogActions className={style.SearchBox__Dropdowns__List}>
            {cities.map((option) => (
              <Button
                key={option.value}
                value={option.value}
                onClick={() => {
                  setCity(option.value);
                  handleClose();
                }}
              >
                {option.label}
              </Button>
            ))}
          </DialogActions>
        </Dialog>

        <Button onClick={handleClickOpen} className={style.Cities}>
          {city}
        </Button>
        <div className={style.SearchBox__Dropdowns__Date}>
          <input type="datetime-local" />
          <input type="datetime-local" />
        </div>
      </div>

      <div className={style.SearchBox__Submit}>
        <button>Search</button>
      </div>
    </div>
  );
}

export default Searchbox;
