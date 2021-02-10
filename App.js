
import React from 'react';
import AuthStackScreens from "./src/navigations/AuthStackScreens";
import MainStackScreens from "./src/navigations/MainStackScreens";
import {NavigationContainer} from "@react-navigation/native";
import {AuthContext, AuthProvider} from "./src/providers/AuthProvider";

export default function App() {
    return (
        <AuthProvider>
            <AuthContext.Consumer>
              {
                (auth) => (
                    <NavigationContainer>
                      {
                        auth.isLoggedIn===true
                            ?
                            <MainStackScreens/>:<AuthStackScreens/>
                      }
                    </NavigationContainer>
                )
              }
            </AuthContext.Consumer>
        </AuthProvider>
    );
}


