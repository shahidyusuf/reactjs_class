import React from 'react'
import { ProductData } from '../components/Data'
import CardApp from './Card'

const Home = () => {
    console.log(ProductData)
    return(
        <>
    <h1>Home Page</h1>
    {
        ProductData.map((e, i)=>{
            return(
                <div key={i} style={{display: "inline-block"}}>
                    <CardApp image={e.image} title = {e.title} desc = {e.categorydescription} />
                </div>
            )
        })
    }
    </>
  )
}

export default Home