// import React, { useEffect, useState } from 'react'
// import { Cards } from './components/Card';

// const App = () => {

//   const [productData, setProductData] = useState([]);
//   useEffect(() => {
//     getApiData();
//   }, []);

//   const getApiData = async () =>
//   {
//     const fetchData = await fetch("https://fakestoreapi.com/products");
//     const response = await fetchData.json();
//         setProductData(response);
//   }
//   console.log(productData);
//   return (
//     <>
//     <h1>App Page</h1>
//     {
//       productData.map((e, i) => {

//         return(
//           <div key={i} style={{display: "inline-block"}}>
//             <Cards title={e.title} image={e.image} desc={e.description} />
//           </div>
//         )
//       })
//     }
//     </>
//   )
// }

// export default App;


// // API INTEGERATION


import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import  Cards  from './components/Card'
import Products from './components/SingleProduct'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/cards' element={<Cards />} />
      <Route path='/products/:id' element={<Products />} />
    </Routes>
    </>
  )
}

export default App