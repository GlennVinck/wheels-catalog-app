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
                    <Text style={styles.pagename}>Cart</Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        alignItems: "flex-end",
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 10,
        flexDirection: "row",
    },
    pagename: {
        marginLeft: 100,
        fontSize: 24,
        fontWeight: "600",
    },
});
export default Cart;
