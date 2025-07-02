import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginContext = createContext();

export const LoginContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleChangeInout = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const url = process.env.REACT_APP_API_URL;
      axios.defaults.withCredentials = true;
      const result = await axios.post(`${url}/api/login`, data);



      
      if (result.status === 200 && result.data.message === "Login successful") {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: 'Welcome back!',
        });
        navigate("/");
        setData({ email: "", password: "" });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: result.data.message || 'Unknown error',
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: error.response?.data?.message || "Server error from frontend",
      });
    }
  };

  const values = {
    submitForm,
    data,
    handleChangeInout,
  };

  return (
    <LoginContext.Provider value={values}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => useContext(LoginContext);
