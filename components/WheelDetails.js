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
            <View style={styles.body}>
                <View style={styles.title}>
                    <Text style={styles.titlebrand}>
                        {wheelDetails.type}&nbsp;
                        {wheelDetails.type}
                    </Text>
                    <Text style={styles.titlespecs}>{wheelDetails.type}</Text>
                </View>
                <Image
                    style={styles.image}
                    source={{
                        uri: "https://glennvinck.be/wp-content/uploads/2023/01/victor-zehn.7499.db_.7846.jpg",
                    }}
                />
                <View style={styles.details}>
                    <Text>
                        Brand: {wheelDetails.name}&nbsp;
                        {wheelDetails.name}
                        Price: € {wheelDetails.price}
                    </Text>
                    <Text>Specifications</Text>
                    <Text>Material: {wheelDetails.name}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
    },
    image: {
        width: 260,
        height: 240,
    },
    title: {
        width: "100%",
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginBottom: 8,
    },
    titlebrand: {
        fontSize: 16,
        fontWeight: "500",
        color: "red",
    },
    titlespecs: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
    },
    details: {
        width: "100%",
        borderWidth: 1,
        padding: 16,
        margin: 8,
    },
    release: {
        fontStyle: "italic",
        fontSize: 12,
        marginTop: 8,
        textAlign: "right",
    },
});
export default WheelDetails;
