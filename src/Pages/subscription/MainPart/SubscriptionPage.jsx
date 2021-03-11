import React from 'react'
import { SubscriptionFooter } from '../../../Components/footer/SubscriptionFooter'
import { CartPart } from '../cartPart/CartPart'
import { FilterPart } from '../filterPart/FilterPart'
import style from "./SubscriptionPage.module.css"
export const SubscriptionPage = () => {
    return (
        <div>
            <div className={style.mainContainer}>
                <FilterPart/>
                <CartPart/>
                <SubscriptionFooter/>
            </div>
        </div>
    )
}
