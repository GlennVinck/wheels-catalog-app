import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

import apiKey from "../apiKey";

import { Counter } from "./Counter";

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
        <View style={styles.detailscontainer}>
            <ScrollView>
                <View style={styles.body}>
                    <View style={styles.title}>
                        <Text style={styles.titlebrand}>Victor Zehn</Text>
                        <Text style={styles.titlespecs}>
                            {wheelDetails.name}
                        </Text>
                    </View>
                    <Image
                        style={styles.image}
                        source={{
                            uri: "https://glennvinck.be/wp-content/uploads/2023/01/victor-zehn.7499.db_.7846.jpg",
                        }}
                    />
                    <View style={styles.details}>
                        <Text>Brand: Victor Zehn</Text>
                        <Text>Specifications: {wheelDetails.name}</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.pricecounter}>
                <Text style={styles.price}>€ {wheelDetails.price}</Text>
                <Counter />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1,
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
    },
    detailscontainer: {
        flexDirection: "column",
        justifyContent: "space-between",
        height: 530,
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
        color: "#d72f39",
    },
    titlespecs: {
        fontSize: 20,
        fontWeight: "600",
        color: "black",
    },
    details: {
        width: "100%",
        padding: 16,
        margin: 8,
    },
    price: {
        fontSize: 18,
        fontWeight: "600",
    },
    pricecounter: {
        width: "100%",
        paddingHorizontal: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});
export default WheelDetails;
