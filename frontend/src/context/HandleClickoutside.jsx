import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { useNavigation } from 'react-router-dom';

const HandleClickoutsideContext = createContext();

export const HandleClickoutsideProvider = ({children}) => {
    const [open, setOpen] = useState(true);
    const sidebarRef = useRef(null);
    const openProfile = () => {
        setOpen(!open);
    }
    
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);



    const values = {setOpen,open,sidebarRef,openProfile}
    
    return (
        <HandleClickoutsideContext.Provider value={values}>
           {children}
        </HandleClickoutsideContext.Provider>
  )
  
}

export const useReference = () => useContext(HandleClickoutsideContext);
