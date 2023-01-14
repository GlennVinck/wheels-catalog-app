import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const WheelCard = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        borderColor: "grey",
        borderStyle: "dashed",
        borderWidth: 0.5,
    },
});
export default WheelCard;
