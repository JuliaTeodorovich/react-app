import React, { useState } from "react";
import "./Login.css";
import Card from "../../components/Card/Card";

function Login() {
  const API_USERS = `http://localhost:${process.env.REACT_APP_DATA}/api/users`;
  const [fetchedUsers, setFetchedUsers] = useState([]);
  const handleLogin = () => {
    fetch(API_USERS)
      .then((res) => res.json())
      .then((users) => {
        setFetchedUsers(users);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };
  return (
    <div className="Login">
      <header className="Login-header">
        <Card onLogin={handleLogin} users={fetchedUsers} />
      </header>
    </div>
  );
}

export default Login;
