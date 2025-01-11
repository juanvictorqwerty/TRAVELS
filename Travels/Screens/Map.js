import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const Map = () => {
    return (
    <View style={styles.container}>
        <WebView 
        source={{ uri: 'https://www.bing.com/maps?cp=3.823149%7E11.755371&lvl=10.0' }} 
        style={styles.webview}
        />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
    flex: 1,
    },
    webview: {
    flex: 1,
    },
});

export default Map;
