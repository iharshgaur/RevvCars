import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router'
import style from "./payment.module.css"
import styles from "./rightcomponent.module.css"
export const Payment = () => {

    const location = useParams()
    const id = location.id

    const [data,setData] = React.useState(null)

    React.useState(()=>{
        return axios.get(`http://localhost:1234/subscription/${id}`).then(res=>setData(res.data)).catch(err=>console.log(err))
    },[])

    console.log(data)

    return (
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
                    <div>
                        <p className={styles.tentureBox_p1}>1</p>
                        <p className={styles.tentureBox_p2}>Month</p>
                    </div>
                    <div>
                        <p className={styles.tentureBox_p1}>3</p>
                        <p className={styles.tentureBox_p2}>Months</p>
                    </div>
                    <div>
                        <p className={styles.tentureBox_p1}>6</p>
                        <p className={styles.tentureBox_p2}>Months</p>
                    </div>
                    <div>
                        <p className={styles.tentureBox_p1}>12</p>
                        <p className={styles.tentureBox_p2}>Months</p>
                    </div>
                    <div>
                        <p className={styles.tentureBox_p1}>24</p>
                        <p className={styles.tentureBox_p2}>Months</p>
                    </div>
                    <div>
                        <p className={styles.tentureBox_p1}>36</p>
                        <p className={styles.tentureBox_p2}>Month</p>
                    </div>
                </div>
                <p className={styles.price}>₹ 12,252<span className={styles.price_span1}>/month</span> </p>
            </div>

        </div>
    )
}
