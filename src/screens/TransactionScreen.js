import React, { useState, useEffect } from "react";
import { Card } from "react-native-elements";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Platform,
    ToastAndroid,
    LogBox,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../providers/AuthProvider";
import * as firebase from "firebase";
import "firebase/firestore";
import * as Animatable from "react-native-animatable";
import HeaderTop from "../components/HeaderTop";
import {auth} from "firebase";

const TransactionScreen = ({ navigation }) => {
    const [data, setData] = useState({
        customer_name: "",
        customer_contact: "",
        paid_amount: 0,
        due_amount: 0,
        checkTextInputChange: false,
        checkMobileNumber: false,
    });
    const [loading, setLoading] = useState(false);
    const [totalDailyDue,setTotalDailyDue] = useState(0);
    const [totalDailyPaid,setTotalDailyPaid] = useState(0);
    let total_due = 0;
    let total_paid = 0;

    let date = new Date().getDate()+'-'+new Date().getMonth()+'-'+new Date().getFullYear();

    const loadTransactions = () => {
        firebase
            .firestore()
            .collection('users')
            .doc(firebase.auth().currentUser.uid)
            .collection("transactions")
            .where('date', "==", date)
            .onSnapshot((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    total_due += doc.data().total_due_amount;
                    total_paid += doc.data().total_paid_amount;

                });
                setTotalDailyDue(total_due);
                setTotalDailyPaid(total_paid);
            });
    };

    useEffect(() => {
        loadTransactions();
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
        LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
    }, []);

    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.container}>
                    <HeaderTop />
                    <Animatable.View animation={"fadeInUpBig"} style={styles.footer}>
                        <Card style={styles.footer}>
                            <Text style={styles.text_card} fontWeight="bold">
                                Daily Transactions
                            </Text>
                            <Text>{totalDailyPaid}</Text>
                            <Text>{totalDailyDue}</Text>
                        </Card>
                        <Card style={styles.footer}>
                            <Text style={styles.text_card}>Monthly Transactions</Text>

                        </Card>
                        <TouchableOpacity
                            onPress={() => {
                                setLoading(true);
                                firebase
                                    .auth()
                                    .signOut()
                                    .then(() => {
                                        auth.setCurrentAdmin({});
                                        auth.setIsLoggedIn(false);
                                        if (Platform.OS === "android")
                                            ToastAndroid.show("Logged Out", 100);
                                        setLoading(false);
                                    })
                                    .catch((err) => {
                                        console.log(err);
                                    });
                            }}
                            style={styles.button}
                        >
                            <LinearGradient
                                colors={["#08D4C4", "#01AB9D"]}
                                style={styles.signIn}
                            >
                                <Text style={styles.textSign}>Log Out</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </Animatable.View>
                </View>
            )}
        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#009387",
        alignItems: "center",
        justifyContent: "center",
    },
    main_card: {},
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: "#fff",
        borderRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30,
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18,
    },
    text_card: {
        color: "#05375a",
        fontWeight: "bold",
        fontSize: 30,
    },
    action: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
        paddingTop: 15,
    },
    actionError: {
        flexDirection: "row",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#FF0000",
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        //marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: "#05375a",
    },
    errorMsg: {
        color: "#FF0000",
        fontSize: 14,
    },
    button: {
        alignItems: "center",
        marginTop: 50,
    },
    signIn: {
        width: "75%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
    },
});

export default TransactionScreen;
