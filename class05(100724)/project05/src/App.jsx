// import React, { useState } from "react";
// import Login from "./SignUp/Login";
// import SignIn from "./SignIn/SignIn";

// const App = () => {
//   const [isloggedIn, setIsloggedIn] = useState(false);

//   const toggle = () => {
//     setIsloggedIn(!setIsloggedIn);
//   };
//   return (
//     <div>
//       {
//       isloggedIn ? <Login clickFunc={toggle} /> : <SignIn clickFunc={toggle} />
//       }
//     </div>
//   );
// };

// export default App;

import React, { useState } from 'react'
import LoginSignIn from './Components/LoginSignIn'
import LoginSignUp from './Components/LoginSignUp'

const App = () => {
  const [isloggedIn, setIsloggedIn] = useState(true)

  const toogle = () => {
    setIsloggedIn (!isloggedIn)
  }
  return (
    <div>
      {
        isloggedIn ? <LoginSignIn clickFunc={toogle} /> : 
          
      <LoginSignUp clickFunc = {toogle} />
      }
      
    </div>
  )
}

export default App