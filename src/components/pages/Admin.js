import React, { useState } from "react";
import "./Admin.css";

function Admin({ setIsAdmin }) {
  const [password, setPassword] = useState("");

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    if (password === "test") {
      setIsAdmin(true);
      alert("You are now logged in as admin");
    } else {
      alert("Incorrect password");
    }
  };

  return (
    <div className="admin-container">
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter admin password"
        className="admin-input"
      />
      <button onClick={handleLogin} className="admin-button">Login</button>
    </div>
  );
}

export default Admin;