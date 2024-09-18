import React from 'react'
import { useNavigate } from 'react-router-dom'

const AppHome = () => {
    const navigate = useNavigate();

    let obj = {
        name: "Shahid",
        city: "Karachi"
    }
  return (
    <div>
    Home Page
    {/* <button onClick={() =>navigate("/products")>Go To Product Page</button> */}
    <button onClick={() => navigate("/products", { state:obj })}>go to product Page</button>
    </div>
  )
}

export default AppHome