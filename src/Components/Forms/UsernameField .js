import React from "react";

const UsernameField = ({ value, onChange }) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
        <label for="fname">First name:</label>
        <input
          name="username"
          style={{
            display: "flex",
            flexDirection: "column",

          }}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default UsernameField;
