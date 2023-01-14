import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button } from "react-native";

import WheelDetails from "../components/WheelDetails";

const DetailsScreen = ({ route, navigation }) => {
    const { wheelId } = route.params;

    return (
        <View style={styles.screen}>
            <WheelDetails wheelId={wheelId} />
            <Button
                title="Go to Movies"
                onPress={() => navigation.navigate("Home")}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
    },
});
export default DetailsScreen;
