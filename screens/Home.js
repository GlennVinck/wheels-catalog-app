import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

import apiKey from "../apiKey";

import WheelCard from "../components/WheelCards";
import SearchBar from "../components/SearchBar";
import ShoppingCartIcon from "../components/ShoppingCart";

const Home = ({ navigation }) => {
    const [wheels, setWheels] = useState([]);

    const getWheelsCatalog = async () => {
        try {
            const response = await fetch(
                "https://glennvinck.be/wp-json/wc/v3/products",
                {
                    method: "GET",
                    headers: {
                        Authorization: apiKey,
                    },
                }
            );
            const json = await response.json();
            console.log(json);
            setWheels(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getWheelsCatalog();
    }, []);

    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "#ffffff",
                paddingTop: 50,
            }}
        >
            <View style={styles.topBar}>
                <Text style={styles.pagename}>Victor Zehn Catalog</Text>
                <ShoppingCartIcon />
            </View>
            <View showsVerticalScrollIndicator={false}>
                <SearchBar />
                <FlatList
                    data={wheels}
                    renderItem={({ item }) => (
                        <WheelCard
                            id={item.id}
                            title={item.name}
                            price={item.price}
                            navigation={navigation}
                            onSelectWheel={(selectedId) => {
                                navigation.navigate("Details", {
                                    wheelId: selectedId,
                                });
                            }}
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        alignItems: "flex-end",
        width: "100%",
        paddingHorizontal: 20,
        marginTop: 10,
        flexDirection: "row",
    },
    pagename: {
        marginRight: "auto",
        fontSize: 24,
        fontWeight: "600",
    },
});
export default Home;
