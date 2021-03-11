import React from "react";
import style from "./Searchbox.module.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
  const [duration, setDuration] = React.useState(0);
  const [end_date, setEndDate] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const currentDate = new Date();
  const dispatch = useDispatch();
  const history = useHistory();
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
    if (duration >= 0) dispatch(setUserRequest(payload));
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
          style={{
            width: 180,
            margin: "1%",
            fontSize: "18px",
            fontWeight: "bold",
            height: "50px",
            borderRadius: "15px",
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "0 0 2px",
            color: "white",
            backgroundImage: "linear-gradient(270deg, #1caba2 25%, #1c7fab)",
          }}
        >
          Rentals
        </button>
        <button
          style={{
            width: 180,
            margin: "1%",
            fontSize: "18px",
            fontWeight: "bold",
            height: "50px",
            borderRadius: "15px",
            border: "none",
            backgroundColor: "transparent",
            boxShadow: "0 0 2px",
          }}
          onClick={() => {
            history.push("/open");
          }}
        >
          Subscriptions
        </button>
      </div>

      <div className={style.SearchBox__MidRow}>
        <img src="https://www.revv.co.in/imgs/logo-rentals.svg" alt="Banner" />
        <h5>Self drive car rentals in India</h5>
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

        <h5 style={{ color: "grey" }}>City</h5>
        <Button
          onClick={handleClickOpen}
          style={{
            width: "100%",
            borderBottom: "2px solid black",
            justifyContent: "flex-start",
            borderRadius: 0,
          }}
          disableAnimation={true}
        >
          {city}
        </Button>
        <div className={style.SearchBox__Dropdowns__Date}>
          <div>
            <label htmlFor="">
              <h5 style={{ color: "grey" }}>Start Date</h5>
            </label>
            <input
              type="datetime-local"
              className={style.DateTime}
              step={1800}
              onChange={(e) => setStartDate(e.target.value)}
              min={
                currentDate.getMonth() < 10
                  ? `${
                      currentDate.getFullYear() +
                      "-0" +
                      (currentDate.getMonth() + 1) +
                      "-" +
                      currentDate.getDate()
                    }T00:00:00`
                  : `${
                      currentDate.getFullYear() +
                      "-" +
                      (currentDate.getMonth() + 1) +
                      "-" +
                      currentDate.getDate()
                    }T00:00:00`
              }
            />
          </div>
          <div>
            <label htmlFor="">
              <h5 style={{ color: "grey" }}>End Date</h5>
            </label>
            <br />
            <input
              type="datetime-local"
              className={style.DateTime}
              onChange={(e) => setEndDate(e.target.value)}
              min={start_date}
            />
          </div>
        </div>
      </div>

      <div className={style.SearchBox__Submit}>
        {duration >= 0 && start_date !== "" && end_date !== "" && (
          <p>
            Duration :
            {duration === 1
              ? ` ${duration} Day`
              : duration === 0
              ? " Today"
              : ` ${duration} Days`}
          </p>
        )}
        <button onClick={handleSubmit}>Search</button>
      </div>
    </div>
  );
}

export default Searchbox;
