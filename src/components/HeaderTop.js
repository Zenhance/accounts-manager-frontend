import React from "react";
import { Header } from "react-native-elements";
import { StyleSheet } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Feather from "react-native-vector-icons/Feather";


// import * as firebase from "firebase";
// import "firebase/firestore";

import { AuthContext } from "../providers/AuthProvider";
import { View } from "react-native-animatable";

const HeaderTop = (props) => {
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <Header
                    containerStyle={{
                        backgroundColor: "#009387"
                    }}
                    leftComponent={
                        < Feather
                            name={"user"}
                            color={"#05375a"}
                            size={20}
                        />
                    }
                    centerComponent={{
                        text: "Accounts Manager", style: {
                            marginTop: 5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            fontSize: 20,
                            fontWeight: "bold"
                        }
                    }}
                    rightComponent={
                        < Feather
                            name={"log-out"}
                            color={"#05375a"}
                            size={20}
                            onPress={() => {
                                auth.setIsLoggedIn(false);
                                auth.setCurrentUser({});
                            }}
                        />}
                />

            )}
        </AuthContext.Consumer>
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
export default HeaderTop;