import React, { useState, useEffect } from "react";
import { StyleSheet, View, Pressable, Text, ScrollView } from "react-native";

import WheelDetails from "../components/WheelDetails";
import Backbutton from "../components/BackButton";

const DetailsScreen = ({ route, navigation }) => {
    const { wheelId } = route.params;

    return (
        <View style={styles.screen}>
            <View style={styles.topBar}>
                <Backbutton />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <WheelDetails wheelId={wheelId} />
            </ScrollView>
            <Pressable style={styles.button1}>
                <Text style={styles.text}>In winkelmandje</Text>
            </Pressable>
            <Pressable
                style={styles.button2}
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.text}>Annuleer</Text>
            </Pressable>
        </View>
    );
};
const styles = StyleSheet.create({
    topBar: {
        width: "100%",
        minHeight: 40,
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    screen: {
        flex: 1,
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#ffffff",
        paddingTop: 50,
    },

    button1: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red",
        margin: 10,
        marginBottom: 0,
        borderRadius: 100,
        maxHeight: 60,
    },
    button2: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "grey",
        margin: 10,
        marginBottom: 40,
        borderRadius: 100,
        maxHeight: 60,
    },
    text: {
        fontSize: 24,
        color: "white",
    },
});
export default DetailsScreen;
