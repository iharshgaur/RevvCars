import React from 'react'
import { useHistory } from 'react-router'
import style from "./CartItems.module.css"
export const CartItems = ({car_specs,car_name,car_images,car_type,car_subscription_price,car_discount,_id}) => {

    const originalPrice = car_subscription_price.toString().split("")
    const dummy = originalPrice.splice(2,0,",").join("")

    let dis = car_subscription_price * (car_discount / 100)
    let price = Math.floor(car_subscription_price - dis)

    const discountPrice = price.toString().split("")
    const dummy2 = discountPrice.splice(2,0,",").join("")

    const history = useHistory()

    const routePage =(id)=>{
        history.push(`/subpay/${id}`)
    }

    return (
            <div className={style.container} onClick={()=>routePage(_id)}>
                <div className={style.imageBox}>
                    <img src={car_images} alt="pic"/>
                </div>
                <div className={style.specBox}>
                    <p>{car_name}</p>
                    <div className={style.specBox_div1}>
                        <img src="https://static.thenounproject.com/png/562247-200.png" alt="pic"/>
                        <p>{car_specs[1]}</p>
                    </div>
                    <div  className={style.specBox_div2}>
                        <img src="https://cdn0.iconfinder.com/data/icons/machnices-repair/64/Untitled-7-03-512.png" alt="pic"/>
                        <p>{car_specs[0]}</p>
                    </div>
                </div>
                <div className={style.priceBox}>
                    <p className={style.discount}>₹ {discountPrice}<span className={style.discount_span}>/month</span></p>
                    <p className={style.originalPrice}>₹ {originalPrice}</p>
                </div>
            </div>            
      
    )
}
