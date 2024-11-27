import React from "react";

const PasswordField = ({ value, onChange }) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <label for="fconfirmpassword">Password :</label>
        <input name="password" style={{color:"red"}} type="text" value={value} onChange={onChange} />
      </div>
    </div>
  );
};

export default PasswordField;
