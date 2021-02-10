import React,{useState} from "react";
import {View, Text, StyleSheet, Button} from "react-native";
import {AuthContext} from "../providers/AuthProvider";
import {Logout} from "../requests/LogoutRequest";

const HomeScreen = () => {

    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.container}>
                        <Text>Logged In</Text>
                        <Button
                            title={"Log Out"}
                            onPress={async () => {
                                await Logout(auth.token).then((response) => {
                                    if(response.ok && response.data.status==="success")
                                    {
                                        console.log(response.data);
                                        auth.setIsLoggedIn(false);
                                        auth.setToken(null);
                                        auth.setCurrentAdmin(0);
                                    }
                                    else
                                    {
                                        alert("Token Manipulated!");
                                    }
                                });

                            }}
                        />

                    </View>
                )
            }
        </AuthContext.Consumer>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});

export default HomeScreen;

