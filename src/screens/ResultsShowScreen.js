import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image, FlatList, ActivityIndicator } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ route }) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(false);
    const { id } = route.params;

    const getResult = async (id) => {
        try {
            const response = await yelp.get(`/${id}`);
            setResult(response.data);
        } catch (err) {
            setError(true);
            console.error("Error fetching result:", err);
        }
    };

    useEffect(() => {
        getResult(id);
    }, []);

    if (error) {
        return (
            <View style={styles.container}>
                <Text style={styles.errorText}>Something went wrong. Please try again later.</Text>
            </View>
        );
    }

    if (!result) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (!result.photos || result.photos.length === 0) {
        return (
            <View style={styles.container}>
                <Text>No photos available.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{result.name}</Text>
            <FlatList
    data={result.photos}
    keyExtractor={(photo, index) => `${photo}-${index}`} 
    renderItem={({ item }) => {
        if (typeof item === "string") {
            return <Image style={styles.image} source={{ uri: item }} />;
        } else {
            console.warn("Unexpected item format:", item); 
            return null;
        }
    }}
/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    errorText: {
        fontSize: 16,
        color: "red",
        textAlign: "center",
        marginTop: 20,
    },
});

export default ResultsShowScreen;
