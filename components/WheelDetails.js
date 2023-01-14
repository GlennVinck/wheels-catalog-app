import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";

const MovieDetails = (props) => {
    const [movieDetails, setMovieDetails] = useState({});

    const getMovieDetailsById = async () => {
        try {
            const url = encodeURI(
                "https://glennvinck.be/wp-json/wc/v3/products/" +
                    props.wheelId +
                    "/"
            );
            const response = await fetch(url, {
                method: "GET",
                headers: {
                    Authorization:
                        "Basic Y2tfOGQ5M2FjZGI0ZDczMDMwZjdmZDZkMTZiMTJhOWI4ZTMzZjQ3ZTZlNjpjc19hNWM4ZjVlMDZmMzJiYmQ3MDIzNjZiNTU5ZTE0ODM2M2EzOTI4ZjQ1",
                },
            });
            const json = await response.json();
            setMovieDetails(json);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getMovieDetailsById();
    }, []);

    return (
        <ScrollView>
            <Image
                style={styles.filmPoster}
                source={{
                    uri: "https://glennvinck.be/wp-content/uploads/2023/01/victor-zehn.7499.db_.7846.jpg",
                }}
            />
            <Text style={styles.title}>{movieDetails.name}</Text>
            <View style={styles.details}>
                <Text>{movieDetails.name}</Text>
                <Text style={styles.release}>
                    release: {movieDetails.release}
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
    filmPoster: {
        width: "100%",
        height: 300,
    },
    release: {
        fontStyle: "italic",
        fontSize: 12,
        marginTop: 8,
        textAlign: "right",
    },
});
export default MovieDetails;
