import React from "react";

import {createStackNavigator} from "@react-navigation/stack";

import SplashScreen from "../screens/SplashScreen";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";

const AuthStack = createStackNavigator();

const AuthStackScreens = ({navigation}) => {
    return (
        <AuthStack.Navigator headerMode={"none"} initialRouteName={SplashScreen}>
            <AuthStack.Screen name={"SplashScreen"} component={SplashScreen}/>
            <AuthStack.Screen name={"SignInScreen"} component={SignInScreen}/>
            <AuthStack.Screen name={"SignUpScreen"} component={SignUpScreen}/>
        </AuthStack.Navigator>
    );
};

export default AuthStackScreens;
