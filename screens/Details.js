import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";

import WheelDetails from "../components/WheelDetails";
import Backbutton from "../components/BackButton";

const DetailsScreen = ({ route, navigation }) => {
    const { wheelId } = route.params;

    return (
        <View style={styles.screen}>
            <View>
                <View style={styles.topBar}>
                    <Backbutton />
                </View>
                <View>
                    <WheelDetails wheelId={wheelId} />
                </View>
            </View>
            <View>
                <View style={styles.buttons}>
                    <Pressable style={styles.button1}>
                        <Text style={styles.text1}>In winkelmandje</Text>
                    </Pressable>
                    <Pressable
                        style={styles.button2}
                        onPress={() => navigation.navigate("Home")}
                    >
                        <Text style={styles.text2}>Annuleer</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        paddingTop: 50,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    topBar: {
        flex: 1,
        minHeight: 80,
        maxHeight: 80,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingHorizontal: 16,
    },

    buttons: {
        position: "inherit",
    },

    button1: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d72f39",
        margin: 10,
        marginBottom: 0,
        borderRadius: 10,
    },
    button2: {
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#eee",
        margin: 10,
        marginBottom: 40,
        borderRadius: 10,
    },
    text1: {
        fontSize: 24,
        color: "#fff",
    },
    text2: {
        fontSize: 24,
        color: "#aaa",
    },
});
export default DetailsScreen;
