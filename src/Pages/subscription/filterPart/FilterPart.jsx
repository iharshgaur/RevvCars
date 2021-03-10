import React from 'react'
import style from "./Filter.module.css"

export const FilterPart = () => {
    return (
        <div className ={style.container}> 
            <p className={style.heading}>Filter by</p>
            <p className={style.headingForSearch}>City</p>
            <p className={style.filterHead}>Hyderabad</p>
            <hr className ={style.filterHead_line}/>
        </div>
    )
}
