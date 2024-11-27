import React from 'react'

const EmailField = ({value,onChange}) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <label for="fmail">Email  :</label>
        <input name='email' type="text"  value={value} onChange={onChange} />
      </div>
      
    </div>
  )
}

export default EmailField
