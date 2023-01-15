import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";

import Backbutton from "../components/BackButton";

const Cart = ({ navigation }) => {
    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ffffff",
                paddingTop: 50,
            }}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topBar}>
                    <Backbutton />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        width: "100%",
        height: 80,
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
});
export default Cart;
