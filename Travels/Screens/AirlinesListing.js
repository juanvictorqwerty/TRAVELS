import React from 'react';
import { View, Text, Image, Button, StyleSheet, ScrollView } from 'react-native';
import Communications from 'react-native-communications';

const airlines = [
    {
    name: "CAMAIR-CO",
    logo: require('../assets/Airlines_logos/Camair.jpg'),
    website: 'https://www.camair-co.cm/',
    phone: '+237 233 50 55 35',
    description: 'CAMAIR-CO, also known as Cameroon Airlines Corporation, is the national carrier of Cameroon offering domestic and international flights.',
    },
    {
    name: "AIR FRANCE",
    logo: require('../assets/Airlines_logos/Air-France-Logo.png'),
    website: 'https://wwws.airfrance.cm/',
    phone: '+237 2 33 50 15 15',
    description: "Air France is a leading international airline providing a wide range of flights from Cameroon to various global destinations.",
    },
    {
    name: "KENYA AIRWAYS",
    logo: require('../assets/Airlines_logos/Kenya_Airways.png'),
    website: 'https://www.kenya-airways.com/fr_cm/vols-au-depart-de-cameroun',
    phone: '+237 6 77 11 00 60',
    description: "Kenya Airways connects Cameroon to Africa and the world, offering exceptional service and comfort.",
    },
    {
    name: "TURKISH AIRLINES",
    logo: require('../assets/Airlines_logos/turkish-airlines-logo-0.png'),
    website: 'https://www.turkishairlines.com/fr/book-flights-from-cameroon',
    phone: '+237 2 22 20 88 49',
    description: "Turkish Airlines provides extensive connectivity to Europe, Asia, and beyond with excellent service quality.",
    },
    {
    name: "ETHIOPIAN AIRLINES",
    logo: require('../assets/Airlines_logos/Ethiopian-Airlines.jpg'),
    website: 'https://www.ethiopianairlines.com/fr-cm/vols-depuis-cameroun',
    phone: '+237 233420264',
    description: "Ethiopian Airlines is a major player in African aviation, offering flights to numerous locations in the world",
    },
];

const AirlineCard = ({ airline }) => (
    <View style={styles.card}>
        <Image source={airline.logo} style={styles.image} />
        <Text style={styles.title}>{airline.name}</Text>
            <View style={styles.actions}>
                <Button title="Website" onPress={() => Communications.web(airline.website)} />
                <Button title="Call" onPress={() => Communications.phonecall(airline.phone, true)} />
            </View>
    </View>
);

const AirlinesLogos = () => (
    <ScrollView>
        <View style={styles.container}>
            {airlines.map((airline, index) => (
            <AirlineCard key={index} airline={airline} />
            ))}
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
    backgroundColor: 'gray',
    padding: 10,
    },
    card: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1.3,
        shadowRadius: 5,
    },
    image: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    title: {
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
});

export default AirlinesLogos;
