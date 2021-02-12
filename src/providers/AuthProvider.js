import React,{useState} from "react";

const AuthContext = React.createContext();

const AuthProvider = (props) => {
    const [currentAdmin,setCurrentAdmin] = useState({});
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return(
        <AuthContext.Provider value={{
            currentAdmin:currentAdmin,
            setCurrentAdmin:setCurrentAdmin,
            isLoggedIn: isLoggedIn,
            setIsLoggedIn:setIsLoggedIn,
        }}>
            {props.children}
        </AuthContext.Provider>
    );
};

export {AuthContext,AuthProvider};
