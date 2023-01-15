import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";

const ShoppingCartIcon = () => {
    return (
        <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
            <View
                style={{
                    position: "absolute",
                    top: -20,
                    right: 0,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 2000,
                    backgroundColor: "red",
                }}
            >
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>0</Text>
            </View>
        </View>
    );
};

export default ShoppingCartIcon;
