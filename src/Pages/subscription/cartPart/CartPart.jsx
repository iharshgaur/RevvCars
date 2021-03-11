import React from 'react'
import { CartItems } from '../items/CartItems'
import style from "./CartPart.module.css"

import { StepContent } from '@material-ui/core'
export const CartPart = ({data}) => {

    const banner1 = "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/prop-cards/destkop/zreo-down-payment.svg"
    const banner2 = "https://revvselfdrivecar.s3-us-west-2.amazonaws.com/Open/prop-cards/destkop/insurance.svg"


    

    return (
        <div className={style.container}>
            <p className={style.heading}>9 Unboxed cars for subscription</p>
            {
                data?.map(item=>{
                    if(item._id === "6048a69ac5615540b4286f24" )
                    {
                        
                        return<>
                        <img className={style.bannerImg} src={banner1} alt="pic"/>
                         <CartItems {...item}/>
                         </>
                    }
                    if(item._id === "6048a787c5615540b4286f29" )
                    {
                        
                        return<>
                        <img className={style.bannerImg} src={banner2} alt="pic"/>
                         <CartItems {...item}/>
                         </>
                    }
                    else
                    {
                        return <CartItems {...item}/>
                    }
                    
                })
            }
           
            
        </div>
    )
}
