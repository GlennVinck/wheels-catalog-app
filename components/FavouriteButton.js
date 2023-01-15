import React, { useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";

import Entypo from "react-native-vector-icons/Entypo";

const Favouritebutton = ({}) => {
    const [liked, setLiked] = useState(false);

    return (
        <View>
            <Pressable
                style={styles.container}
                onPress={() => setLiked((isLiked) => !isLiked)}
            >
                <Entypo
                    name="star"
                    size={24}
                    color={liked ? "#f9a43c" : "white"}
                />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 8,
        backgroundColor: "#eee",
        borderRadius: 10,
    },
});

export default Favouritebutton;
