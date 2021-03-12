import { InputAdornment, TextField } from '@material-ui/core'
import {  AccountBalance, AccountBalanceWallet, CreditCard, Email, PhoneAndroid } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import style from "./Finalpayment.module.css"

const useStyles = makeStyles(()=>({
    icon:{
        marginTop:"20px",
        marginLeft:"20px"
    }
}))



export const FinalPayment = () => {

    const {currentUser} = useSelector(state=>state.auth)
    

    const classes = useStyles();
    const l = useParams()
    let id = l.id
    let amount = l.amount
    let type = l.type
    
    let d = ((amount*1) * (0.18/100))?.toFixed(2)

    let total = Math.round(amount*1 + d*1)

    const [data,setData] = React.useState(null)
    const [data2,setData2] = React.useState(null)
    

    React.useState(()=>{
        return axios.get(`http://localhost:1234/payment/${id}`).then(res=>setData(res.data)).catch(err=>console.log(err))
    },[])

    React.useState(()=>{
        return axios.get(`http://localhost:1234/users/${currentUser._id}`).then(res=>setData2(res.data)).catch(err=>console.log(err))
    },[])

    const [active,SetActive] =React.useState("1")

    const handleActive = (num)=>{
        return SetActive(num)
    }

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
                cars_booked:[data2?.cars_booked,data],
                cars_subscribed:currentUser.cars_subscribed
            }
             axios.patch(`http://localhost:1234/usersPatching/${currentUser._id}`,payload)
        }
 
        history.push("/profile")
    }


    const month = type==="rental"?"day":"month"


    return (
        <div>
            <div className={style.container}>
                <div className={style.headBox}>
                    <img className={style.headBoxImg} src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" alt="pic"/>
                    <p className={style.headBoxP}>Self car Rentals | Sanitized and Safe</p>
                </div>
                <p className={style.p}>Original Price - ₹ {data?.car_subscription_price} /{month}</p>
                <p className={style.p}>Choosen Price - ₹ {amount} /{month}</p>
                <p className={style.p}>Tax - ₹ {d} /{month}</p>
                <p className={style.p}>Total - ₹ {total} /{month}</p>
                <hr/>
                <TextField label="Phone" className={classes.icon}
            InputProps={{
            startAdornment: (
            <InputAdornment position="start">
              <PhoneAndroid />
            </InputAdornment>
          ),
        }}>
                </TextField>
                <TextField label="Email"  className={classes.icon} value = {currentUser.email}
            InputProps={{
            startAdornment: (
            <InputAdornment position="start">
              <Email  className={style.c} />
            </InputAdornment>
          ),
        }}>
                </TextField>
        <div className={style.cardBox}>
            <div onClick={()=>handleActive("1")} className={active==="1"?style.bg:null}><CreditCard style={{fontSize:"45px"}} className={style.credit}/></div>
            <div onClick={()=>handleActive("2")} className={active==="2"?style.bg:null}><AccountBalance style={{fontSize:"45px"}} className={style.credit}/></div>
            <div onClick={()=>handleActive("3")} className={active==="3"?style.bg:null}><AccountBalanceWallet style={{fontSize:"45px"}} className={style.credit}/></div>
        </div>
        <div className={style.payBox} onClick={hanldePay}>
            <p  className={style.payP}>Pay the amount with {active==="1"?"Credit Card": active==="2"?"Net Banking":active==="3"?"Wallet":""}</p>
        </div>
            </div>
        
        </div>
    )
}
