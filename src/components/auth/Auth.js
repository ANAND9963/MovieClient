import React from "react";
import axios from "axios";
import "./Auth.css"

import { useState } from "react";
import { apiClient2 } from "../../api/axiosConfig";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleUserNameInput = (e) => {
    e.preventDefault();
    setUserName(e.target.value);
  };
  const handlePasswordInput = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await apiClient2.post("/api/signin", {
        userName,
        password,
      });
      localStorage.setItem("token", userData.data.token);

      if (userData.data.token) {
        navigate(`/movies`);
      }

      setPassword("");
      setUserName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
    <div className="body">
      
        <input className="input"
          placeholder="username"
          value={userName}
          onChange={handleUserNameInput}
        />
        <input className="input"
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordInput}
        />
     
        <button  className="button" onClick={handleSubmit}> Submit</button>
      
    </div>
    </form>
  );
};

export default Auth;
