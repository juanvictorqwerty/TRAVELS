import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, Button } from 'react-native';
import Communications from 'react-native-communications';
import COLORS from '../Constants/COLORS';

const hotels = [
    {
    name: "Hotel Hilton",
    logo: require('../assets/Hotel_logos/Hotel-Hilton.jpg'),
    website: 'https://www.hilton.com/fr/hotels/yaohitw-hilton-yaounde/',
    phone: '650565596',
    description: "Hotel Hilton Yaounde offers luxury accommodations, top-notch amenities, and an unmatched location in the heart of the city.",
    },
    {
    name: "Hotel Mont-Febe",
    logo: require('../assets/Hotel_logos/hotel-mont-febe.jpg'),
    website: 'https://www.agoda.com/hotel-mont-febe_8/hotel/yaounde-cm.html',
    phone: '+237 2 22 21 40 02',
    description: "Nestled on the slopes of Mount Febe, this hotel provides stunning views, excellent hospitality, and modern facilities.",
    },
    {
    name: "Lewat Hotel",
    logo: require('../assets/Hotel_logos/lewat-hotel.png'),
    website: 'http://lewat-hotel.com/fr',
    phone: '+237 6 76 84 46 11',
    description: "Lewat Hotel offers a cozy and comfortable stay with easy access to the city's business and cultural landmarks.",
    },
    {
    name: "Krystal Palace",
    logo: require('../assets/Hotel_logos/krystal-palace.jpg'),
    website: 'https://www.krystalpalacedouala.com/',
    phone: '+237 2 33 50 68 00',
    description: "Krystal Palace in Douala delivers premium accommodations, fine dining, and state-of-the-art conference facilities.",
    },
];

const HotelCard = ({ hotel }) => (
    <View style={styles.card}>
        <Image source={hotel.logo} style={styles.image} />
        <Text style={styles.title}>{hotel.name}</Text>
        <Text style={styles.description}>{hotel.description}</Text>
        <View style={styles.actions}>
            <Button title="Website" onPress={() => Communications.web(hotel.website)} />
            <Button title="Call" onPress={() => Communications.phonecall(hotel.phone, true)} />
        </View>
    </View>
);

const HotelListing = () => (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView>
            <View style={styles.container}>
                {hotels.map((hotel, index) => (
                <HotelCard key={index} hotel={hotel} />
                ))}
            </View>
        </ScrollView>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'gray',
    },
    card: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    description: {
        textAlign: 'center',
        fontSize: 14,
        color: '#555',
        marginBottom: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default HotelListing;
