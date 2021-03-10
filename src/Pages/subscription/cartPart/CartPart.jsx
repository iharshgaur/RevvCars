import React from 'react'
import { CartItems } from '../items/CartItems'
import style from "./CartPart.module.css"

export const CartPart = () => {
    return (
        <div className={style.container}>
            <p className={style.heading}>9 Unboxed cars for subscription</p>
            <CartItems/>
            
           
        </div>
    )
}
