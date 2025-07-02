import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const navigationContext = createContext();

export const NavigationProvider = ({children}) => {
    const location = useLocation();
    
    const autoActiveMenu = () => {
        switch(location.pathname){
            case 'home'  : return 'home'
            case 'about' : return 'about'
            case 'tech'  : return 'tech'
            default      : return 'home';
        }
    }
    const [activeMenu, setActiveMenu] = useState(autoActiveMenu());

    useEffect(() => {
        const letChageActiveMenu = localStorage.setItem("activeMenu", activeMenu);
        if(letChageActiveMenu){
            setActiveMenu(letChageActiveMenu);
        }
    }, [activeMenu]);

    useEffect(() => {
        localStorage.getItem("activeMenu");
    }, []);
        console.log("is active?  ",activeMenu)


    useEffect(() => {
        setActiveMenu(autoActiveMenu());
    }, []);

    const [active, setActive] = useState('home');





    // HIDE AND SHOW LOGIN BUTTON

    const [show, setShow] = useState(false);













    
    const values = {
        show,
        setShow,
        active,
        setActive,
        activeMenu,
        setActiveMenu
    }


    return (
        <navigationContext.Provider value={values}>
            {children}
        </navigationContext.Provider>
    );
}

export const useNavigation = () => useContext(navigationContext);