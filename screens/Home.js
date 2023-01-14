import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";

import WheelCard from "../components/WheelCards";

const Home = ({ navigation }) => {
    const [wheels, setWheels] = useState([]);

    const getWheelsCatalog = async () => {
        try {
            const response = await fetch(
                "https://glennvinck.be/wp-json/wc/v3/products",
                {
                    method: "GET",
                    headers: {
                        Authorization:
                            "Basic Y2tfOGQ5M2FjZGI0ZDczMDMwZjdmZDZkMTZiMTJhOWI4ZTMzZjQ3ZTZlNjpjc19hNWM4ZjVlMDZmMzJiYmQ3MDIzNjZiNTU5ZTE0ODM2M2EzOTI4ZjQ1",
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
            <FlatList
                data={wheels}
                renderItem={({ item }) => (
                    <WheelCard
                        id={item.id}
                        title={item.name}
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
