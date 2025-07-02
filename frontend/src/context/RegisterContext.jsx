import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const registerContext = createContext();
export const RegisterContextProvider = ({children}) => {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: "",
        email : "",
        password: ""
    });

    const submitForm = async (event) => {
        event.preventDefault();
        try {
            const url = process.env.REACT_APP_API_URL;
            const result = await axios.post(`${url}/api/register`, data);
            if (result.data) {
                navigate("/login");
                alert("Registered successfully");
            } else if (result.data && result.data.message) {
                alert(result.data.message);
            } else {
                alert("Register Error");
            }

            setData({
                name: "",
                email: "",
                password: ""
            });
        } catch (error) {
            alert("Server error from frontend");
        }
    }







    const values = {
        submitForm,
        setData,
        data
    }
    return(
        <registerContext.Provider value={values}>
            {children}
        </registerContext.Provider>
    )

}

export const useRegister = () => useContext(registerContext);