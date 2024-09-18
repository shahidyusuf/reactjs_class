import React from 'react'
import style from './Cards.module.css'

const Card = ({Title, description, Image}) => {
    // console.log(props)
  return (
    <div className={style.main}>
        <img src={Image} alt="" />
        <h2>{Title}</h2>
        <p>{description}</p>
        <button>Purchase</button>
    </div>
  )
}

export default Card