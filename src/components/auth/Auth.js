import React from "react";
import axios from "axios";
import "./Auth.css"

import { LockOutlined, UserOutlined } from '@ant-design/icons';

import {   Input, message } from 'antd';

import { useState } from "react";
import { apiClient2 } from "../../api/axiosConfig.js";
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
      const response = await apiClient2.post("/api/signin", {
        userName,
        password,
      });
  
      if (response && response.data && response.data.token) {
        const userData = response.data;
        message.success("Login Successful");
        localStorage.setItem("token", userData.token);
  
        // Navigate to movies page after login success
        navigate(`/movies`);
      } else {
        message.error("Invalid response from server");
      }
  
      setPassword("");
      setUserName("");
    } catch (error) {
      // Log the error message and handle it
      message.error(error.response ? error.response.data.message : "Login failed");
      console.error(error);
    }
  };
  return (
    <form>
    <div className="body">
      
        <Input className="input"
          placeholder="username"
          prefix={<UserOutlined />}
          value={userName}
          onChange={handleUserNameInput}
          required
        />
        <Input className="input"
          type="password"
          placeholder="password"
          prefix={<LockOutlined />}
          value={password}
          onChange={handlePasswordInput}
          required
        />
     
        <button  className="button" onClick={handleSubmit}> Submit</button>
      
    </div>
    </form>
  );
};

export default Auth;
