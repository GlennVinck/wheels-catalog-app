import { useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.body}>
            <Pressable
                style={styles.container}
                onPress={() => setCount((count) => count - 1)}
            >
                <Entypo name="minus" style={styles.counterIcon} />
            </Pressable>
            <Text style={styles.counter}>{count}</Text>
            <Pressable
                style={styles.container}
                onPress={() => setCount((count) => count + 1)}
            >
                <Entypo name="plus" style={styles.counterIcon} />
            </Pressable>
        </View>
    );
}
const styles = StyleSheet.create({
    body: {
        flexDirection: "row",
        alignItems: "center",
    },
    container: {
        padding: 8,
        backgroundColor: "#eee",
        borderRadius: 10,
        marginHorizontal: 8,
    },
    counterIcon: {
        fontSize: 24,
        color: "#aaa",
    },
    counter: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
