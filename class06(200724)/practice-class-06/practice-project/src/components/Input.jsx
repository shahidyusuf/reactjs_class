import React from 'react'

const InputApp = ({label, type, onChange}) => {
  return (
    <div>
        <label  htmlFor="">{label}</label>
        <input onChange={onChange} type={type} />
    </div>
  )
}

export default InputApp;