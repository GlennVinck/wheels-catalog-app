import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import apiKey from "../apiKey";

const WheelDetails = (props) => {
    const [wheelDetails, setWheelDetails] = useState({});

    const getWheelDetailsById = async () => {
        try {
            const url = encodeURI(
                "https://glennvinck.be/wp-json/wc/v3/products/" +
                    props.wheelId +
                    "/"
            );
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization: apiKey,
                },
            });
            const json = await response.json();
            setWheelDetails(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getWheelDetailsById();
    }, []);

    return (
        <ScrollView>
            <Image
                style={styles.image}
                source={{
                    uri: "https://glennvinck.be/wp-content/uploads/2023/01/victor-zehn.7499.db_.7846.jpg",
                }}
            />
            <Text style={styles.title}>{wheelDetails.name}</Text>
            <View style={styles.details}>
                <Text>{wheelDetails.name}</Text>
                <Text style={styles.release}>
                    release: {wheelDetails.release}
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    title: {
        margin: 16,
        fontSize: 24,
        textAlign: "center",
    },
    details: {
        borderWidth: 1,
        padding: 16,
        margin: 8,
    },
    image: {
        width: "100%",
        height: 360,
    },
    release: {
        fontStyle: "italic",
        fontSize: 12,
        marginTop: 8,
        textAlign: "right",
    },
});
export default WheelDetails;
