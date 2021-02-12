import React, { useState } from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet, StatusBar, TouchableOpacity, TextInput, ActivityIndicator, SafeAreaView, ScrollView } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome5";
import Feather from "react-native-vector-icons/Feather";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../providers/AuthProvider";
import { getLoginToken } from "../requests/LoginRequest";
import HeaderTop from "../components/HeaderTop";


const AddCustomerScreen = ({ navigation }) => {

    const [data, setData] = useState({
        name: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true
    });
    const [loading, setLoading] = useState(false);
    const [responseData, setResponseData] = useState({
        id: 0,
        token: null
    });

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                name: val,
                checkTextInputChange: true
            })
        } else {
            setData({
                ...data,
                name: val,
                checkTextInputChange: false
            })
        }
    };
    // const userLogin = async () => {
    //     setLoading(true);
    //     const response = await getLoginToken(data.name, data.password);
    //     if (response.ok) {
    //         setResponseData({
    //             id: response.data.id,
    //             token: response.data.token
    //         })
    //         console.log(responseData);
    //     } else {
    //         alert("Wrong User Credentials!");
    //     }
    //     setLoading(false);
    // };

    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <ScrollView>
                        <View style={styles.container}>
                            <StatusBar backgroundColor={"#009387"} barStyle={"light-content"} />
                            <View style={styles.header}>
                                <Text style={styles.text_header}>Add A Customer</Text>
                            </View>
                            <Animatable.View
                                animation={"fadeInUpBig"}
                                style={styles.footer}
                            >
                                <Text style={styles.text_footer}>Name</Text>
                                <View style={styles.action}>
                                    <FontAwesomeIcon name={"user"}
                                        color={"#05375a"}
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder={"Name"}
                                        style={styles.textInput}
                                        autoCapitalize={"none"}
                                        onChangeText={(val) => {
                                            textInputChange(val)
                                        }}
                                    />

                                    {
                                        data.checkTextInputChange ?
                                            <Animatable.View animation={"bounceIn"}>
                                                <Feather
                                                    name={"check-circle"}
                                                    color={"green"}
                                                    size={20}
                                                />
                                            </Animatable.View> : null
                                    }

                                </View>
                                <Text style={[styles.text_footer, { marginTop: 35 }]}>Contact</Text>
                                <View style={styles.action}>
                                    <Feather name={"lock"}
                                        color={"#05375a"}
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder={"Add Details"}
                                        style={styles.textInput}
                                        autoCapitalize={"none"}
                                    />
                                </View>

                                <Text style={[styles.text_footer, { marginTop: 35 }]}>Amount Due</Text>
                                <View style={styles.action}>
                                    <Feather name={"mail"}
                                        color={"#05375a"}
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder={"Enter Amount"}
                                        style={styles.textInput}
                                        autoCapitalize={"none"}
                                    />
                                </View>

                                <Text style={[styles.text_footer, { marginTop: 35 }]}>Amount Paid</Text>
                                <View style={styles.action}>
                                    <Feather name={"mail"}
                                        color={"#05375a"}
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder={"Enter Amount"}
                                        style={styles.textInput}
                                        autoCapitalize={"none"}
                                    />
                                </View>

                                <View>
                                    <TouchableOpacity
                                        onPress={async () => {
                                        }
                                        }
                                        style={styles.button}
                                    >
                                        <LinearGradient colors={["#08D4C4", "#01AB9D"]}
                                            style={styles.signIn}>
                                            <Text style={styles.textSign}>Add Customer</Text>
                                        </LinearGradient>
                                    </TouchableOpacity>
                                    <ActivityIndicator size={"small"} color={"blue"} animating={loading} />

                                </View>

                            </Animatable.View>
                        </View>
                    </ScrollView>
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

export default AddCustomerScreen;
