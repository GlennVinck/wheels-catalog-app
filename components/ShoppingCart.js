import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AntDesign from "react-native-vector-icons/AntDesign";

const ShoppingCartIcon = ({}) => {
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity style={styles.container}>
                <AntDesign
                    name="shoppingcart"
                    style={styles.shoppingcart}
                    onPress={() => navigation.navigate("Cart")}
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

export default ShoppingCartIcon;
