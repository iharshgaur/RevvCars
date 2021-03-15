import React from "react";
import style from "./SearchboxOpen.module.css";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();

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
          }}
          onClick={() => {
            history.push("/");
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
            color: "white",
            backgroundImage: "linear-gradient(270deg, #1caba2 25%, #1c7fab)",
          }}
        >
          Subscriptions
        </button>
      </div>

      <div className={style.SearchBox__MidRow}>
        <img
          src="https://www.revv.co.in/grapheneImages/newopen/logo_subscription.png"
          alt="Banner"
        />
        <h5>Car Subscriptions in {city}</h5>
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
      </div>

      <div className={style.SearchBox__Submit}>
        <button onClick={() => history.push(`/subscription/${city}`)}>
          <button>Explore Cars</button>
          <p>
            Starting at <b>Rs. 11,099/</b> month
          </p>
        </button>
      </div>
    </div>
  );
}

export default Searchbox;
