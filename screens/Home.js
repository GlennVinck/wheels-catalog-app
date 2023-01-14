import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, TextInput } from "react-native";

import apiKey from "../apiKey";
import WheelCard from "../components/WheelCards";

const Home = ({ navigation }) => {
    const [movies, setMovies] = useState([]);

    const getMoviesByRating = async () => {
        try {
            const response = await fetch(
                "https://glennvinck.be/wp-json/wp/v2/product?per_page=50",
                {
                    method: "GET",
                    headers: {
                        Authorization: apiKey,
                    },
                }
            );
            const json = await response.json();
            console.log(json);
            setMovies(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMoviesByRating();
    }, []);

    return (
        <View>
            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <WheelCard id={item.id} title={item.title.rendered} />
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
