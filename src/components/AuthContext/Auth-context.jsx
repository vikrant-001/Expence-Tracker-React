import React from "react";
const AuthContext = React.createContext({
    token : '',
    isLoggedIN : false,
    login: (token) => {},
    logout:() => {},
})

export default AuthContext;