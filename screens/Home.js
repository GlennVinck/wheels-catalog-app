import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";

import apiKey from "../apiKey";

import WheelCard from "../components/WheelCards";
import SearchBar from "../components/SearchBar";
import ShoppingCartIcon from "../components/ShoppingCart";
import Favouritebutton from "../components/FavouriteButton";

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
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.topBar}>
                    <ShoppingCartIcon />
                </View>
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
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    topBar: {
        width: "100%",
        height: 80,
        flex: 1,
        paddingHorizontal: 20,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
    },
});
export default Home;
