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
                <View style={styles.favourite}>
                    <Favouritebutton />
                </View>
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
        alignItems: "flex-start",
        flexDirection: "row",
    },

    info: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        marginTop: 16,
    },

    title: {
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "flex-start",
        marginBottom: 16,
    },
    favourite: {
        marginTop: 16,
    },
});

export default WheelCard;
