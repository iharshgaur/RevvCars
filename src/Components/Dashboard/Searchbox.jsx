import React from "react";
import style from "./Searchbox.module.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useSelector, useDispatch } from "react-redux";

import { setUserRequest } from "../../Redux/Dashboard/action";
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
  const [start_date, setStartDate] = React.useState("");
  const [duration, setDuration] = React.useState(1);
  const [end_date, setEndDate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [rental, setRental] = React.useState(true);
  const [subscription, setSubscription] = React.useState(false);
  // const storeCity = useSelector((state) => state.dashboard.city);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (start_date !== "" && end_date !== "") {
      let start = start_date.split("T")[0];
      let end = end_date.split("T")[0];

      start = start.split("-").map(Number);
      start = new Date(start[0], start[1] - 1, start[2]);

      end = end.split("-").map(Number);
      end = new Date(end[0], end[1] - 1, end[2]);
      setDuration((end.getTime() - start.getTime()) / (1000 * 3600 * 24));
    }
  }, [start_date, end_date]);

  const handleSubmit = () => {
    const payload = {
      city,
      start_date,
      end_date,
    };
    dispatch(setUserRequest(payload));
  };

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
          <input
            type="datetime-local"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <input
            type="datetime-local"
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      <div className={style.SearchBox__Submit}>
        {duration > 0 && start_date !== end_date && (
          <p>
            Duration : {duration} {duration === 1 ? "Day" : "Days"}
          </p>
        )}
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default Searchbox;
