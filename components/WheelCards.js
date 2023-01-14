import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

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
                        width: 150,
                        height: 150,
                        marginBottom: 10,
                        borderRadius: 10,
                    }}
                />
                <Text>{props.title}</Text>
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
    },
});

export default WheelCard;
