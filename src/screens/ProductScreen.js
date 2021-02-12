import { createMultiStyleIconSet } from "@expo/vector-icons";
import React, { useState } from "react";
import { Card } from "react-native-elements"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../providers/AuthProvider";
import { Logout } from "../requests/LogoutRequest";
import * as Animatable from "react-native-animatable";
import HeaderTop from "../components/HeaderTop";

const ProductScreen = ({ navigation }) => {

    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.container}>
                        <Animatable.View
                            animation={"fadeInUpBig"}
                            style={styles.footer}
                        >
                            {/* flatlist laagbe */}
                            <Card style={styles.footer}>
                                <Text style={styles.text_footer}>Product One</Text>
                            </Card>
                            <Card style={styles.footer}>
                                <Text style={styles.text_footer}>Product Two</Text>
                            </Card>
                        </Animatable.View>
                    </View>
                )
            }
        </AuthContext.Consumer>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        paddingTop: 15
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        //marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "white"
    }
});

export default ProductScreen;

