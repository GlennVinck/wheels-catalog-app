import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchBar}>
                <Feather
                    name="search"
                    size={20}
                    color="#808080"
                    style={{ marginLeft: 1 }}
                />
                <TextInput style={styles.input} placeholder="Search wheels" />
            </View>
        </View>
    );
};
export default SearchBar;

const styles = StyleSheet.create({
    container: {
        margin: 16,
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        width: "92%",
    },
    searchBar: {
        padding: 12,
        flexDirection: "row",
        width: "100%",
        backgroundColor: "#eee",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "space-evenly",
    },
    input: {
        fontSize: 16,
        marginLeft: 10,
        width: "90%",
    },
});
