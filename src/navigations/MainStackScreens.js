import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import HomeTabScreen from "./HomeTabScreen"

const MainStack = createStackNavigator();

const MainStackScreens = () => {
    return (
        <MainStack.Navigator headerMode={"none"} initialRouteName={"HomeScreen"}>
            <MainStack.Screen name={"HomeScreen"} component={HomeTabScreen} />
        </MainStack.Navigator>

    );
};

export default MainStackScreens;
