import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
// import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { NavigationProvider } from "./context/NavigationContext";
import { HandleClickoutsideProvider } from "./context/HandleClickoutside";
import { SidebarContextProvider } from "./context/SidebarContext";
import { RegisterContextProvider } from "./context/RegisterContext";
import { LoginContextProvider } from "./context/LoginContext";
import { AdminContextProvider } from "./context/AdminContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <HandleClickoutsideProvider>
      <SidebarContextProvider>
        <RegisterContextProvider>
            <NavigationProvider>
                
              <AdminContextProvider>
                <LoginContextProvider> 
                  <App />
                </LoginContextProvider>
              </AdminContextProvider>
        
            </NavigationProvider>
        </RegisterContextProvider>
      </SidebarContextProvider>
    </HandleClickoutsideProvider>
  </BrowserRouter>
);
