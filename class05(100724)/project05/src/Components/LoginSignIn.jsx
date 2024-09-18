import React from 'react'

const LoginSignIn = ({clickFunc}) => {
  return (
    <div>
        <h1>Sign In Form</h1>
        {/* <a href="#" onClick={clickFunc}>Goto SignUp Page</a> */}
        <button onClick={clickFunc}>create</button>

    </div>
  )
}

export default LoginSignIn