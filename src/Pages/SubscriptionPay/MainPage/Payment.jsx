import axios from 'axios'
import React from 'react'
import { useHistory, useParams } from 'react-router'
import { SubscriptionFooter } from '../../../Components/footer/SubscriptionFooter'
import style from "./payment.module.css"
import styles from "./rightcomponent.module.css"
export const Payment = () => {

    const location = useParams()
    const id = location.id
    const [dprice,SetDprice] = React.useState(0)

    const [data,setData] = React.useState(null)

    const originalPrice = data?.car_subscription_price.toString().split("")
    const dummy = originalPrice?.splice(2,0,",").join("")

    let dis = data?.car_subscription_price * (data?.car_discount / 100)
    let price = Math.floor(data?.car_subscription_price - dis - dprice)

    let discountPrice = price.toString().split("")
    const dummy2 = discountPrice?.splice(2,0,",").join("")


    React.useState(()=>{
        return axios.get(`http://localhost:1234/subscription/${id}`).then(res=>setData(res.data)).catch(err=>console.log(err))
    },[])

    const [boxActive,SetActive] = React.useState("")
    
    const hanldeActive = (num) =>{
        
        return SetActive(num)
    }
    React.useEffect(()=>{
        if(boxActive==="1")
        {
            SetDprice(0)  
        }
        if(boxActive==="3")
        {
            SetDprice(1299)  
        }
        if(boxActive==="6")
        {
            SetDprice(1899)  
        }
        if(boxActive==="12")
        {
            SetDprice(2299)  
        }
        if(boxActive==="24")
        {
            SetDprice(2499)  
        }
        if(boxActive==="36")
        {
            SetDprice(2699)  
        }
    },[boxActive])

    const history = useHistory()

    const handleRoute = (id,price)=>{
        return history.push(`/payment/${id}/${price}`)
    }

    return (
        <>
        <div>
            {/* top left component to show the details of the car  */}
            <div className={style.topContainer} >
                <div className={style.topLeft}>
                    <img src={data?.car_images} alt="pic"/>
                    <div className={style.topleft_box2}>
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/PDP/product-images/condition.svg" alt="pic"/>
                            <p className={style.topLeftP1}>Condition</p>
                            <p className={style.topLeftP2}>As good as new &#8505;</p>
                        </div>
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/PDP/product-images/variant.svg" alt="pic"/>
                            <p className={style.topLeftP1}>Variant/color</p>
                            <p className={style.topLeftP2}>As per availability </p>
                        </div>
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/PDP/product-images/transmission.svg" alt="pic"/>
                            <p className={style.topLeftP1}>Transmission Type</p>
                            <p className={style.topLeftP2}>{data?.car_specs[0]}</p>
                        </div>
                        <div>
                            <img src="https://www.revv.co.in/grapheneImages/PDP/product-images/fuel.svg" alt="pic"/>
                            <p className={style.topLeftP1}>Fuel Type</p>
                            <p className={style.topLeftP2}>{data?.car_specs[1]}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* the payment details component */}

            <div className={styles.container}>
                <div className={styles.head}>
                    <p>{data?.car_name}</p>
                </div>
                <p className={styles.headP}>Subscription tenure</p>
                <div className={styles.tentureBox}>
                    <div onClick={()=>hanldeActive("1")} className={boxActive==="1"?styles.bg:null}>
                        <p className={styles.tentureBox_p1 }>1</p>
                        <p className={styles.tentureBox_p2}>Month</p>
                    </div>
                    <div onClick={()=>hanldeActive("3")} className={boxActive==="3"?styles.bg:null}>
                        <p className={styles.tentureBox_p1}>3</p>
                        <p className={styles.tentureBox_p2}>Months</p>
                    </div>
                    <div onClick={()=>hanldeActive("6")} className={boxActive==="6"?styles.bg:null}>
                        <p className={styles.tentureBox_p1}>6</p>
                        <p className={styles.tentureBox_p2}>Months</p>
                    </div>
                    <div onClick={()=>hanldeActive("12")} className={boxActive==="12"?styles.bg:null}>
                        <p className={styles.tentureBox_p1}>12</p>
                        <p className={styles.tentureBox_p2}>Months</p>
                    </div>
                    <div onClick={()=>hanldeActive("24")} className={boxActive==="24"?styles.bg:null}>
                        <p className={styles.tentureBox_p1}>24</p>
                        <p className={styles.tentureBox_p2}>Months</p>
                    </div>
                    <div onClick={()=>hanldeActive("36")} className={boxActive==="36"?styles.bg:null}>
                        <p className={styles.tentureBox_p1}>36</p>
                        <p className={styles.tentureBox_p2}>Month</p>
                    </div>
                </div>
                <p className={styles.price}>₹ {discountPrice}<span className={styles.price_span1}>/month</span> 
                <span className={styles.price_span2}>₹ {originalPrice}</span>
                <span className={styles.price_span3}>({data?.car_discount}% off)</span>
                </p>
                <img className={styles.offerImg} src="https://www.revv.co.in/grapheneImages/summary-page/percentage.svg" alt="pic"/>
                <label className={styles.offerImgP}>View the offer</label>
                <div className={styles.payContainer}>
                    <p className={styles.payContainerP} onClick={()=>handleRoute(data?._id,price)}>Proceed &#8883;</p>
                </div>
                <p className={styles.deliveryP}>Expected date of delivery <span className={styles.deliveryspan} >Place of delivery</span></p>
                <img className={styles.deliverySpark} src="https://www.revv.co.in/grapheneImages/PDP/flash.svg" alt="pic"/>
                <label className={styles.deliveryl1}>Within Days</label> 
                <label className={styles.deliveryl2}>At your doorstep</label> 
                <p className={styles.deliverygold}>Due to high demand, delivery timelines may be impacted</p>
                <img className={styles.deliverySpark} src="https://www.revv.co.in/grapheneImages/PDP/green-tick-icon.svg" alt="pic"/>
                <label className={styles.detailsl1}>Extend anytime at normal prices</label> 
                <br/>
                <img className={styles.deliverySpark} src="https://www.revv.co.in/grapheneImages/PDP/green-tick-icon.svg" alt="pic"/>
                <label className={styles.detailsl1}>Return anytime, Just pay fee difference</label> 
                <div className={styles.callBox}>
                  <p>Call us Now to know more</p>
                </div>
            </div>
        </div>
        <SubscriptionFooter/>
        </>
    )
}
