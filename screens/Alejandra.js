import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Alejandra() {
    return (
        <View style={styles.container}>
            <Image
                source={require("../assets/alejandra.jpg")}
                style={styles.image}
            />
            <Text style={styles.description}>
                Esta página foi desenvolvida por Alejandra Barros.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#B0C4DE",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: "#fff",
    },
    description: {
        fontSize: 16,
        textAlign: "center",
        paddingHorizontal: 20,
        marginTop: 30,
    },
});