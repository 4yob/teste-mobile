import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const itens = [
    { id: '1', title: 'Item 1' },
    { id: '2', title: 'Item 2' },
    { id: '3', title: 'Item 3' },
    { id: '4', title: 'Item 4' },
    { id: '5', title: 'Item 5' },
    { id: '6', title: 'Item 6' },
    { id: '7', title: 'Item 7' },
    { id: '8', title: 'Item 8' },
    { id: '9', title: 'Item 9' },
    { id: '10', title: 'Item 10' },
]

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.bar}></View>
                <View style={styles.circle}></View>
            </View>
            <View style={styles.section}>
                <FlatList
                    style={styles.horizontalScrollView}
                    data={itens}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <View style={styles.item}>
                            </View>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                        </View>
                    )}
                    />
            </View>
            <View style={styles.card}>
                <View style={styles.cardTop}>
                    <View style={styles.circle}></View>
                    <Text style={styles.cardText}>Treino de Mobile</Text>
                </View>
                <Image style={styles.cardImage} source={require('../assets/image.png')} />
                <View style={styles.bar}>
                    <View style={styles.cardCircle}></View>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Alejandra")}>
                    <Text style={styles.buttonText}>Navegar</Text>
                </TouchableOpacity>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        width: '100%',
        height: 65,
        paddingTop: 20,
        gap: 20,
    },
    bar: {
        display: 'flex',
        alignItems: 'flex-end',
        width: 250,
        height: 45,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 50,
    },
    circle: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 50,
    },
    section: {
        display: 'flex',
        width: '100%',
        height: 120,
    },
    horizontalScrollView: {
        paddingLeft: 50,
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 45,
    },
    item: {
        width: 60,
        height: 60,
        backgroundColor: '#000',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    itemTitle: {
        marginTop: 10,
        fontSize: 14,
    },
    card: {
        width: 300,
        height: 425,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 25,
        padding: 22,
        marginTop: 10,
    },
    cardTop: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    cardText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    cardImage: {
        width: 250,
        height: 250,
        borderRadius: 20,
        marginTop: 20,
        marginBottom: 20,
    },
    cardCircle: {
        width: 42,
        height: 42,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 50,
    },
    button: {
        width: 225,
        height: 55,
        backgroundColor: '#000',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});