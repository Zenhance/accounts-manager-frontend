import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Feather from "react-native-vector-icons/Feather"; import { StyleSheet } from "react-native";

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import { View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const HomeTab = createMaterialTopTabNavigator();

const HomeTabScreen = () => {
    return (
        <View style={styles.container}>
            <HomeTab.Navigator initialRouteName="SignInScreen">
                <HomeTab.Screen
                    name="Sign In"
                    component={SignInScreen}
                    options={{
                        tabBarLabel: "Transactions",
                        style: styles.text,
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Feather name="dollar-sign" color="white" size={26} />
                            ) : (
                                    <Feather name="dollar-sign" color="white" size={22} />
                                ),
                    }}
                />
                <HomeTab.Screen
                    name="SignUp"
                    component={SignUpScreen}
                    options={{
                        tabBarLabel: "Customer List",
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Feather name="users" size={26} color="white" />
                            ) : (
                                    <Feather
                                        name="users"
                                        size={22}
                                        color="white"
                                    />
                                ),
                    }}
                />

                <HomeTab.Screen
                    name="SignUp2"
                    component={SignInScreen}

                    options={{
                        tabBarLabel: "Add Customer",
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Feather name="user-plus" size={26} color="white" />
                            ) : (
                                    <Ionicons
                                        name="user-plus"
                                        size={22}
                                        color="white"
                                    />
                                ),
                    }}
                />
            </HomeTab.Navigator>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387"
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },
    title: {
        color: "#05375A",
        fontSize: 30,
        fontWeight: "bold",
    },
    text: {
        color: "black",
        marginTop: "30",
        fontWeight: "bold"
    },
    button: {
        alignItems: "flex-end",
        marginTop: 30,
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        flexDirection: "row"
    },
    textSign: {
        color: "white",
        fontWeight: "bold"
    },
});

export default HomeTabScreen;