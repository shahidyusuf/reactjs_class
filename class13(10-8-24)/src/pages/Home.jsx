import React, { useEffect, useState } from 'react'
import Cards from '../components/Card';
import axios from 'axios';
// import { Cards } from './components/Card';

const Home = () => {

  const [productData, setProductData] = useState([]);
  useEffect(() => {
    getApiData();
  }, []);

//   const getApiData = async () =>
//   {
//     const fetchData = await fetch("https://fakestoreapi.com/products");
//     const response = await fetchData.json();
//         setProductData(response);
//   }

const getApiData = async()=>{
    const res = await axios.get("https://fakestoreapi.com/products");
    setProductData(res.data);
}
  console.log(productData);
  return (
    <>
    <h1>App Page</h1>
    {
      productData.map((e, i) => {

        return(
          <div key={i} style={{display: "inline-block"}}>
            <Cards id={e.id} title={e.title} image={e.image} desc={e.description} />
          </div>
        )
      })
    }
    </>
  )
}

export default Home;


// API INTEGERATION