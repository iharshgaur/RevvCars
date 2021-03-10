import React from 'react'
import style from "./CartItems.module.css"
export const CartItems = () => {
    return (
            <div className={style.container}>
                <div className={style.imageBox}>
                    <img src="https://s3-us-west-2.amazonaws.com/revvselfdrivecar/Open/Hatchback_new/Maruti_suzuki_alto_k10.jpg" alt="pic"/>
                </div>
                <div className={style.specBox}>
                    <p>Maruthi Alto</p>
                    <div className={style.specBox_div1}>
                        <img src="https://static.thenounproject.com/png/562247-200.png" alt="pic"/>
                        <p>Petrol</p>
                    </div>
                    <div  className={style.specBox_div2}>
                        <img src="https://cdn0.iconfinder.com/data/icons/machnices-repair/64/Untitled-7-03-512.png" alt="pic"/>
                        <p>Manual</p>
                    </div>
                </div>
                <div className={style.priceBox}>
                    <p className={style.discount}>₹ 12,121<span className={style.discount_span}>/month</span></p>
                    <p className={style.originalPrice}>₹ 12,121</p>
                </div>

            </div>            
      
    )
}
