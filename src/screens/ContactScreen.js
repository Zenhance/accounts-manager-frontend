import React, { useState, useEffect } from "react";
import { Button, Card } from "react-native-elements";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    LogBox,
    FlatList,
} from "react-native";
import { AuthContext } from "../providers/AuthProvider";
import * as Animatable from "react-native-animatable";
import HeaderTop from "../components/HeaderTop";
import * as firebase from "firebase";
import "firebase/firestore";

const ContactScreen = ({ navigation }) => {
    const [contacts, setContacts] = useState({});

    let tempContacts = {};
    let allContacts = [];

    const loadContacts = (adminID) => {
        firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid)
            .collection("contacts")
            .get()
            .then((querySnapshot) => {
                allContacts = [];
                querySnapshot.forEach((doc) => {
                    tempContacts = doc.data();
                    tempContacts.id = doc.id;
                    allContacts.push(tempContacts);
                });
                setContacts(allContacts);
            });
    };

    useEffect(() => {
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
        LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
        loadContacts(firebase.auth().currentUser.uid);
    }, []);

    return (
        <AuthContext.Consumer>
            {(auth) => (
                <ScrollView style={styles.container} on>
                    <HeaderTop />
                    <Animatable.View animation={"fadeInUpBig"} style={styles.footer}>
                        <FlatList
                            data={contacts}
                            onRefresh={loadContacts}
                            refreshing={true}
                            renderItem={({ item }) => {
                                return (
                                    <View>
                                        <Card>
                                            <Text>{item.customer_name}</Text>
                                        </Card>
                                    </View>
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </Animatable.View>
                </ScrollView>
            )}
        </AuthContext.Consumer>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387",
    },
    header: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
        width: "50%",
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

export default ContactScreen;
