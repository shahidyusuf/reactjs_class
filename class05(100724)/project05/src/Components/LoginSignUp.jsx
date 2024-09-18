import React from 'react'

const LoginSignUp = ({clickFunc}) => {
  return (
    <div>
        <h1>SignUp Form</h1>
        {/* <a href="#" onClick={clickFunc}>Goto Login Page</a> */}
        <button onClick={clickFunc}>Login</button>
    </div>
  )
}

export default LoginSignUp