import React from 'react'

const ConfirmPasswordField  = ({value,onChange}) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <label for="fpassword">Confirm Password :</label>
        <input name='confirmPassword' type="text"  value={value} onChange={onChange} />
      </div>
    </div>
  )
}

export default ConfirmPasswordField 
