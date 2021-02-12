import React, {useState} from "react";
import {Card} from "react-native-elements"
import {View, Text, StyleSheet, TouchableOpacity, Platform, ToastAndroid} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {AuthContext} from "../providers/AuthProvider";
import * as firebase from "firebase";
import "firebase/firestore";
import * as Animatable from "react-native-animatable";


const TransactionScreen = ({navigation}) => {

    const [loading, setLoading] = useState(false);

    return (
        <AuthContext.Consumer>
            {
                (auth) => (

                        <View style={styles.container}>
                            <Animatable.View
                                animation={"fadeInUpBig"}
                                style={styles.footer}
                            >
                                <Card style={styles.footer}>
                                    <Text style={styles.text_card} fontWeight="bold">Daily Transactions</Text>
                                </Card>
                                <Card style={styles.footer}>
                                    <Text style={styles.text_card}>Monthly Transactions</Text>
                                </Card>
                                <TouchableOpacity
                                    onPress={()=> {
                                        setLoading(true);
                                        firebase.auth().signOut().then(()=>{
                                            auth.setCurrentAdmin({});
                                            auth.setIsLoggedIn(false);
                                            if(Platform.OS==='android')
                                                ToastAndroid.show("Logged Out",100);
                                            setLoading(false);
                                        })
                                            .catch((err)=>{console.log(err)})
                                    }}
                                    style={styles.button}
                                >
                                    <LinearGradient colors={["#08D4C4", "#01AB9D"]}
                                                    style={styles.signIn}>
                                        <Text style={styles.textSign}>Log Out</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </Animatable.View>

                        </View>

                )
            }
        </AuthContext.Consumer>

    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: '#009387',
        alignItems: 'center',
        justifyContent: 'center'
    },
    main_card: {},
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderRadius: 20,
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
    text_card: {
        color: '#05375a',
        fontWeight: 'bold',
        fontSize: 30,
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
        width: '75%',
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

export default TransactionScreen;

