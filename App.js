
import React from 'react';
import AuthStackScreens from "./src/navigations/AuthStackScreens";
import MainStackScreens from "./src/navigations/MainStackScreens";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext, AuthProvider } from "./src/providers/AuthProvider";
import * as firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBZzWjJ9-3J1um0iCTOZNQ-zzyl-i1wue4",
    authDomain: "accounts-manager-backend.firebaseapp.com",
    projectId: "accounts-manager-backend",
    storageBucket: "accounts-manager-backend.appspot.com",
    messagingSenderId: "673464184528",
    appId: "1:673464184528:web:55f0f9e22d4e6492b338d5"
};

if(!firebase.apps.length)
    firebase.initializeApp(firebaseConfig);

export default function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {
          (auth) => (
            <NavigationContainer>
              {
                auth.isLoggedIn === false
                  ?
                    <AuthStackScreens /> : <MainStackScreens/>
              }
            </NavigationContainer>
          )
        }
      </AuthContext.Consumer>
    </AuthProvider>
  );
}


