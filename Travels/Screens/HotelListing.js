import { StyleSheet, Text, View, SafeAreaView, FlatList, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../Constants/COLORS';

export default HotelListing = () => {
    
    const Cards = ({ imageSource }) => {
        return (
            <View style={{ padding: 10, margin: 10, backgroundColor: COLORS.lightGray, borderRadius: 10 }}>
            <Image source={require('../assets/Hotel_logos/Hotel-Hilton.jpg')} style={{ width: '100%', height: 100 }} />
            <Image source={require('../assets/Hotel_logos/hotel-mont-febe.jpg')} style={{ width: '100%', height: 100 }} />
            <Image source={require('../assets/Hotel_logos/hotel-sawa.jpg')} style={{ width: '100%', height: 100 }} />
            <Image source={require('../assets/Hotel_logos/krystal-palace.jpg')} style={{ width: '100%', height: 100 }} />
            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            <View style={style.header}>
                <View style={{ paddingBottom: 20 }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                        Hotels
                    </Text>
                </View>
            </View>
            <FlatList
                data={[1, 2, 3, 4, 5]} // Dummy data for rendering cards
                renderItem={Cards}
                keyExtractor={(item) => item.toString()}
            />
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
});
