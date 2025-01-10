import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Map = () => {
    return (
        <View style={styles.container}>
            <Text>Map</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', // Optional: Set a background color
    },
});

export default Map;
