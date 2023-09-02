import { useState } from "react";
import AuthContext from "./Auth-context"

const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem('token')
    const [token,setToken] = useState(initialToken);

    const userLoggedIn = !!token;

    const loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token',token);
    } 

    const logOutHandler = () => {
        setToken(null);
        localStorage.removeItem('token');
    }

    const contextValue = {
        token:token,
        isLoggedIN:userLoggedIn,
        login:loginHandler,
        logout:logOutHandler,
    }
    
    return (<AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>)
} 
export default AuthContextProvider;