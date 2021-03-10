import React from 'react'
import { CartPart } from '../cartPart/CartPart'
import { FilterPart } from '../filterPart/FilterPart'
import style from "./SubscriptionPage.module.css"
export const SubscriptionPage = () => {
    return (
        <div>
            <div className={style.mainContainer}>
                <FilterPart/>
                <CartPart/>
            </div>
        </div>
    )
}
