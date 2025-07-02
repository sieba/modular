import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { createContext } from "react";


export const AdminContext = createContext();
export const AdminContextProvider = ({ children }) => {

    const [data, setData] = useState([]);



useEffect(() => {
    const fetchData = async () => {
        try {
            const url = process.env.REACT_APP_API_URL;
            const response = await axios.get(`${url}/api/users`);
            if (response.data) {
                setData(response.data);
            } else {
                alert("Error fetching data from frontend");
            }
        } catch (error) {
            alert("Server error from frontend");
        }
    };
    fetchData();
}, []); // Only run once on mount





    const values = {
        data
    };

    return (
        <AdminContext.Provider value={values}>
            {children}
        </AdminContext.Provider>
    );
};


export const useAdmin = () => useContext(AdminContext);