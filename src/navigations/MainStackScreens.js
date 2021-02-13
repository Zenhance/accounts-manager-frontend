import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import HomeTabScreen from "./HomeTabScreen"

const MainStack = createStackNavigator();

const MainStackScreens = () => {
    return (
        <MainStack.Navigator
            screenOptions={{
                headerStyle:{
                    backgroundColor:"#009387"
                },
                headerTintColor:"#fff"
            }}
        >
            <MainStack.Screen name={"Accounts Manager"} component={HomeTabScreen} />
        </MainStack.Navigator>

    );
};

export default MainStackScreens;
