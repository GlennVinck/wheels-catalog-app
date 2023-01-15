import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";

import apiKey from "../apiKey";

import WheelCard from "../components/WheelCards";
import SearchBar from "../components/SearchBar";

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
        <View>
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
    );
};

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
});
export default Home;
