import React from 'react'
import { FaUser, FaVoicemail } from "react-icons/fa";
import { MdEmail, MdPassword } from 'react-icons/md';
import { RiLockPasswordFill } from "react-icons/ri";
import pics from '../assets/images/signup.jpg'
// import './Login.css'

const SignIn = ({clickFunc}) => {
  return (
    <div className='container'>
      <div className="header">
      <h1>Sign In</h1>
      <div className="input">
      <FaUser />  
      <input type="text" placeholder='NAME' />
      </div>
      {/* <div className="input">
        <MdEmail />
      <input type="text" placeholder='Email' />
      </div> */}
      <div className="input">
        <MdPassword />
      <input type="text" placeholder='Password' />
      </div>

      {/* <div className="input">
        <RiLockPasswordFill />
      <input type="text" placeholder='forgot password' />
      </div> */}
      <div className='input'>
         <input type="checkbox" />
        Remember me
      </div>
      <div className='input'>
        {/* <button className='btn' onClick={clickFunc}>Log In</button> */}
        {/* <button onClick={clickFunc}>LogIn</button> */}
        {/* <a href="#" onClick={clickFunc}>LogIn</a> */}
        <button className='btn' onClick={clickFunc}>fdkldfkl</button>

        </div>

        <div>
            or login with
        </div>
      </div>
      <div className='image'>
        <img src={pics} width={"400px"} alt="" />
      <p>Create an account</p>
      </div>  
      <div>
      </div>

    </div>
  )
}

export default SignIn