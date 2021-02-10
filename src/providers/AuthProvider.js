import React,{useState} from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [currentAdmin,setCurrentAdmin] = useState({});
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [token,setToken] = useState(null);
    const [tokenType,setTokenType] = useState(null);

    return(
        <AuthContext.Provider value={{
            currentAdmin:currentAdmin,
            setCurrentAdmin:setCurrentAdmin,
            isLoggedIn: isLoggedIn,
            setIsLoggedIn:setIsLoggedIn,
            token:token,
            setToken:setToken
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export {AuthContext,AuthProvider};
