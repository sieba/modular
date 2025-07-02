import { createContext, useContext, useState } from "react";

const SidebarContext = createContext();

export const SidebarContextProvider = ({children}) => {
   const [openSidebar, setOpenSidebar] = useState(false) ;
   

    return(
        <SidebarContext.Provider value={{
           setOpenSidebar,
           openSidebar
        }}>
            {children}
        </SidebarContext.Provider>
    )
}
export const useSidebar = () => useContext(SidebarContext);
