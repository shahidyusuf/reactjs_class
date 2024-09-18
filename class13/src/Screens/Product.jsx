// Params
// import React from 'react'
// import { useParams } from 'react-router-dom'

// const Product = () => {
//     const {id, name} = useParams()
//     console.log(name)
    
//   return (
//     <div>
//         <h1>Product</h1>
//         {id}{name}
//     </div>
//   )
// }

// export default Product

// Query Params;

// import React from 'react'
// import { useSearchParams } from 'react-router-dom'
// const Product = () => {
//     const [getValue, useGetValue] = useSearchParams()
//     const data = getValue.get("name")
//     console.log(data)
//   return (
//     <div>
//     <h1>Product</h1>
//     Name = {data}
    
//     </div>
//   )
// }

// export default Product

import React from 'react'
import { useLocation } from 'react-router-dom'

const Product = () => {
    const location = useLocation()
        console.log("obj-->",location.state)
    
  return (
    <div>Product Page
    {/* <h1>{location.state.}</h1> */}
    </div>
  )
}

export default Product