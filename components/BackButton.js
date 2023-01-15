import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Entypo from "react-native-vector-icons/Entypo";

const Backbutton = ({}) => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <Entypo
                    name="chevron-left"
                    style={styles.shoppingcart}
                    onPress={() => navigation.navigate("Home")}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 16,
        backgroundColor: "#eee",
        borderRadius: 10,
    },
    shoppingcart: {
        fontSize: 28,
        color: "#aaa",
    },
});

export default Backbutton;
