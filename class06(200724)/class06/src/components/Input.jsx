import React from 'react'

const Input = ({label, type, onChange, value}) => {
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input type={type} value={value} onChange={onChange} />
    </div>
  )
}

export default Input