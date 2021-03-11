import React from 'react'
import style from "./SubFooter.module.css"
export const SubscriptionFooter = () => {
    return (
        <div className={style.container}>
            <div className={style.Logobox}>
               <img src="https://www.revv.co.in/grapheneImages/newopen/logo.svg" alt="pic"/> 
               
               <p>2021 Primemover Mobility Technologies Pvt Ltd.</p>
               <p>All rights reserved</p>
            </div>
        <div className={style.contentBox}>
            <p>Home</p>
            <p>FAQ's</p>
            <p>Car Subscription</p>
            <p>About</p>
            <p>Policy</p>
            <p>Blogs</p>
        </div>
        <div className={style.socialBox}>
            <p>Social</p>
            <div>
                <img style={{marginLeft:"40px"}} src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19754.png" alt="pic"/>
                <img src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c53e.png" alt="pic"/>
                <img src="http://assets.stickpng.com/images/5ecec78673e4440004f09e77.png" alt="pic"/>
                <img src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png" alt="pic"/>
                <img src="https://pngimg.com/uploads/linkedIn/linkedIn_PNG38.png" alt="pic"/>
            </div>
            <p>Download the Revv App!</p>
            <div id={style.box}>
            <img style={{marginLeft:"20px"}} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Apple-logo.png" alt="pic"/>
            <p>Download <h style={{color:"black",fontWeight:700}} >App store</h></p>
            </div>
            <div id={style.box}>
            <img style={{marginLeft:"20px"}} src="https://i.pinimg.com/originals/71/42/62/714262829697e9749a4aa86b3c1f5538.png" alt="pic"/>
            <p>Download <h style={{color:"black",fontWeight:700}} >Google Play</h></p>
            </div>
        </div>
        </div>
    )
}
