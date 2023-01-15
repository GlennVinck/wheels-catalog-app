import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import Favouritebutton from "../components/FavouriteButton";

const WheelCard = (props) => {
    return (
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => props.onSelectWheel(props.id)}
        >
            <View style={styles.listItem}>
                <Image
                    source={{
                        uri: "https://glennvinck.be/wp-content/uploads/2023/01/victor-zehn.7499.db_.7846.jpg",
                    }}
                    style={{
                        width: 130,
                        height: 120,
                        borderRadius: 10,
                        marginRight: 20,
                    }}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>{"€ " + props.price}</Text>
                </View>
                <Favouritebutton />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
        alignItems: "center",
        backgroundColor: "white",
        flexDirection: "row",
    },

    info: {
        flex: 1,
        flexDirection: "column",
    },

    title: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "flex-start",
        marginBottom: 10,
    },
});

export default WheelCard;
