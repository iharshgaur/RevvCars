<<<<<<< HEAD
import { InputAdornment, TextField } from "@material-ui/core";
import {
  AccountBalance,
  AccountBalanceWallet,
  CreditCard,
  Email,
  PhoneAndroid,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import style from "./Finalpayment.module.css";

const useStyles = makeStyles(() => ({
  icon: {
    marginTop: "20px",
    marginLeft: "20px",
  },
}));
=======
import { InputAdornment, TextField } from '@material-ui/core'
import {  AccountBalance, AccountBalanceWallet, CreditCard, Email, PhoneAndroid } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import style from "./Finalpayment.module.css"
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme)=>({
    icon:{
        marginTop:"20px",
        marginLeft:"20px"
    },
    modal: {
        display: 'flex',
        marginLeft:"33%",
        marginTop:"50px"
      },
      paper: {
          marginLeft:"20px",
          height:"450px",
        width:"410px",          
        backgroundColor:"#fff",
        borderRadius:"4px"
      },
}))


>>>>>>> Manish

export const FinalPayment = () => {
  const { currentUser } = useSelector((state) => state.auth);

  const classes = useStyles();
  const l = useParams();
  let id = l.id;
  let amount = l.amount;
  let type = l.type;

  let d = (amount * 1 * (0.18 / 100))?.toFixed(2);

  let total = Math.round(amount * 1 + d * 1);

  const [data, setData] = React.useState(null);
  const [data2, setData2] = React.useState(null);

  React.useState(() => {
    return axios
      .get(`http://localhost:1234/payment/${id}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  React.useState(() => {
    return axios
      .get(`http://localhost:1234/users/${currentUser._id}`)
      .then((res) => setData2(res.data))
      .catch((err) => console.log(err));
  }, []);

  const [active, SetActive] = React.useState("1");

  const handleActive = (num) => {
    return SetActive(num);
  };

  const history = useHistory();

  const hanldePay = () => {
    if (type === "subs") {
      const payload = {
        username: currentUser.username,
        email: currentUser.email,
        password: currentUser.password,
        cars_booked: currentUser.cars_booked,
        cars_subscribed: [...data2?.cars_subscribed, data],
      };

      axios.patch(
        `http://localhost:1234/usersPatching/${currentUser._id}`,
        payload
      );
    }
<<<<<<< HEAD
    if (type === "rental") {
      const payload = {
        username: currentUser.username,
        email: currentUser.email,
        password: currentUser.password,
        cars_booked: [data2?.cars_booked, data],
        cars_subscribed: currentUser.cars_subscribed,
      };
      axios.patch(
        `http://localhost:1234/usersPatching/${currentUser._id}`,
        payload
      );
    }

    history.push("/profile");
  };
  const originalPrice =
    type === "rental" ? amount : data?.car_subscription_price;
  const month = type === "rental" ? "day" : "month";

  return (
    <div>
      <div className={style.container}>
        <div className={style.headBox}>
          <img
            className={style.headBoxImg}
            src="https://www.revv.co.in/grapheneImages/newopen/logo.svg"
            alt="pic"
          />
          <p className={style.headBoxP}>
            Self car Rentals | Sanitized and Safe
          </p>
        </div>
        <p className={style.p}>
          Original Price - ₹ {originalPrice} /{month}
        </p>
        <p className={style.p}>
          Choosen Price - ₹ {amount} /{month}
        </p>
        <p className={style.p}>
          Tax - ₹ {d} /{month}
        </p>
        <p className={style.p}>
          Total - ₹ {total} /{month}
        </p>
        <hr />
        <TextField
          label="Phone"
          className={classes.icon}
          InputProps={{
=======

    
    const originalPrice = type==="rental"?amount:data?.car_subscription_price
    const month = type==="rental"?"ride":"month"
    
    const [open, setOpen] = React.useState(false);
    
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };
    
    const history = useHistory()

    const hanldePay = ()=>{

        if(type==="subs")
        {
            const payload={
                username:currentUser.username,
                email:currentUser.email,
                password:currentUser.password,
                cars_booked:currentUser.cars_booked,
                cars_subscribed:[...data2?.cars_subscribed,data]
            }
            
            axios.patch(`http://localhost:1234/usersPatching/${currentUser._id}`,payload)
        }
        if(type==="rental")
        {
            const payload={
                username:currentUser.username,
                email:currentUser.email,
                password:currentUser.password,
                cars_booked:[...data2?.cars_booked,data],
                cars_subscribed:currentUser.cars_subscribed
            }
            console.log(payload)
             axios.patch(`http://localhost:1234/usersPatching/${currentUser._id}`,payload)
        }
        handleOpen()
    }

    const hanldeRoute =()=>{
        history.push("/profile")
    }

    return (
        <div>
            <div className={style.container}>
                <div className={style.headBox}>
                    <img className={style.headBoxImg} src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" alt="pic"/>
                    <p className={style.headBoxP}>Self car Rentals | Sanitized and Safe</p>
                </div>
                <p className={style.p}>Original Price - ₹ {originalPrice} /{month}</p>
                <p className={style.p}>Choosen Price - ₹ {amount} /{month}</p>
                <p className={style.p}>Tax - ₹ {d} /{month}</p>
                <p className={style.p}>Total - ₹ {total} /{month}</p>
                <hr/>
                <TextField label="Phone" className={classes.icon}
            InputProps={{
>>>>>>> Manish
            startAdornment: (
              <InputAdornment position="start">
                <PhoneAndroid />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <TextField
          label="Email"
          className={classes.icon}
          value={currentUser.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email className={style.c} />
              </InputAdornment>
            ),
          }}
        ></TextField>
        <div className={style.cardBox}>
<<<<<<< HEAD
          <div
            onClick={() => handleActive("1")}
            className={active === "1" ? style.bg : null}
          >
            <CreditCard style={{ fontSize: "45px" }} className={style.credit} />
          </div>
          <div
            onClick={() => handleActive("2")}
            className={active === "2" ? style.bg : null}
          >
            <AccountBalance
              style={{ fontSize: "45px" }}
              className={style.credit}
            />
          </div>
          <div
            onClick={() => handleActive("3")}
            className={active === "3" ? style.bg : null}
          >
            <AccountBalanceWallet
              style={{ fontSize: "45px" }}
              className={style.credit}
            />
          </div>
        </div>
        <div className={style.payBox}>
          <p className={style.payP}>
            Pay the amount with{" "}
            {active === "1"
              ? "Credit Card"
              : active === "2"
              ? "Net Banking"
              : active === "3"
              ? "Wallet"
              : ""}
          </p>
=======
            <div onClick={()=>handleActive("1")} className={active==="1"?style.bg:null}><CreditCard style={{fontSize:"45px"}} className={style.credit}/></div>
            <div onClick={()=>handleActive("2")} className={active==="2"?style.bg:null}><AccountBalance style={{fontSize:"45px"}} className={style.credit}/></div>
            <div onClick={()=>handleActive("3")} className={active==="3"?style.bg:null}><AccountBalanceWallet style={{fontSize:"45px"}} className={style.credit}/></div>
        </div>
        <div className={style.payBox} onClick={handleOpen}>
            <p  className={style.payP} onClick={hanldePay}>Pay the amount with {active==="1"?"Credit Card": active==="2"?"Net Banking":active==="3"?"Wallet":""}</p>
        </div>
            </div>
        

            <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          <div className={style.headBox}>
                <img className={style.headBoxImg} src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" alt="pic"/>
                <p className={style.headBoxP}>Self car Rentals | Sanitized and Safe</p>
            </div> 
            <p style={{color:"#1caba2"}} className={style.modelP}>Payment Successfull</p>
            <div className={style.payBox} onClick={hanldeRoute}>
            <p  className={style.payP}>ok</p>
        </div>
          </div>
        </Fade>
      </Modal>

>>>>>>> Manish
        </div>
      </div>
    </div>
  );
};
