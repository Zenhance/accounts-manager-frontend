import React from "react";
import {Text, Button, Image} from "react-native-elements";
import {View, StyleSheet, Dimensions, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";

const SplashScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Animatable.Image
                    animation={"bounceIn"}
                    duration={1500}
                    source={require("../../assets/logo.png")}
                    style={styles.logo}
                    resizeMode="stretch"

                />
            </View>
            <Animatable.View style={styles.footer} animation={"fadeInUpBig"}>
                <Text style={styles.title}>Manage your expenses!</Text>
                <Text>Sign in with your account.</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate("SignInScreen")}>
                        <LinearGradient colors={["#08D4C4", "#01AB9D"]} style={styles.signIn}>
                            <Text style={styles.textSign}>Get Started</Text>
                            <MaterialIcons name={"navigate-next"} color="#fff" size={20}/>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

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
    logo: {
        width: height_logo,
        height: height_logo
    },
    title: {
        color: "#05375A",
        fontSize: 30,
        fontWeight: "bold",
    },
    text: {
        color: "grey",
        marginTop: "30"
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

export default SplashScreen;
