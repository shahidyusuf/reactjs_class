import React from 'react'
import { useState } from 'react';
import bulbOn from './Images/bulbon.png'
import bulbOff from './Images/bulboff.png'

// const App = () => {
//   let [name, setName] = useState("Shahid");
//     const upDate = () => {
//       setName("Yusuf");
//     }
//   return (
//     <div>
//       <h1>{name}</h1>
//       <button onClick={upDate}>Update</button>
//     </div>
//   )
// }

// export default App

// const App = () => {
//   let [num, setNum] = useState(0)

//   const increment = () => {
//     setNum (++num)
//   }
//     const decrement = () => {
//       setNum (--num)
//     }
//   return(
//     <div>
//       <h1>
//       {num}
//       </h1>
//       <button onClick={increment}>Increament</button>
//       <button onClick={decrement}>Decrement</button>
      
//     </div>
//   )

// }
// export default App;

// const App = () => {
//   let [change, setChange] = useState("https://img-cdn.pixlr.com/image-generator/history/65bb506dcb310754719cf81f/ede935de-1138-4f66-8ed7-44bd16efc709/medium.webp")

//     return(
//       <div>
//         <h1>

//         </h1>
//         <button>change Pics</button>
//       </div>
//     )


// }

const App = () => {
  let [bulbOn, setBulbOn] = useState("true");

  const bulb = () => {
    setBulbOn (true)
  }
  const bulbOf = () =>{
    setBulbOn (false)
  }

  return(
    <>
    {
      bulbOn? <img src={bulbOn} width={100}  /> :  <img src={bulbOff} width={80} alt="" />
    }
    <div>
      <button onClick={bulb}>ON</button>
      <button onClick={bulbOf}>OFF</button>
    </div>
    </>
  )
} 
export default App;
