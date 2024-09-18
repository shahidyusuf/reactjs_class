import React from 'react'
import AppCard from './Cards'
// import dataProduct from '../components/Data'
import { dataProduct } from '../components/Data'

const Home = () => {
  return (
    <>
    <h1>
        Home Page
    </h1>
        {
            dataProduct.map((e, i) => {
                return(
                    <div key={i} style={{ display: "inline-block"}}>
                    <AppCard  
                        image={e.image} 
                        id={e.id}
                        title={e.title}
                        desc={e.description}
                        key={i}
                     />

                    </div>
                )
            })
        }
    </>
)
}

export default Home