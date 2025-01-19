import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button, ScrollView } from 'react-native';
import Communications from 'react-native-communications';
import COLORS from '../Constants/COLORS';

const busCompanies = [
    {
    name: "Touristique Express",
    logo: require('../assets/BusCompanies_logos/Toursitque.jpg'),
    website: 'https://www.touristique.cm/',
    phone: '+237 650 62 38 79',
    description: "Touristique Express provides safe and reliable intercity bus services across Cameroon.",
    },
    {
    name: "Men Travel",
    logo: require('../assets/BusCompanies_logos/mentravel-logo.png'),
    website: 'https://mentravel.cm/',
    phone: '+237 6 59 88 59 21',
    description: "Men Travel offers premium travel experiences with comfortable buses and excellent service.",
    },
    {
    name: "United Express",
    logo: require('../assets/BusCompanies_logos/United_Express.png'),
    website: 'https://www.unitedexpress.cm/fr/',
    phone: '+237 6 53 53 96 96',
    description: "United Express is known for punctual and affordable transportation services.",
    },
    {
    name: "General Express",
    logo: require('../assets/BusCompanies_logos/General-express.jpeg'),
    website: 'https://generalexpressvoyages.com/#/home',
    phone: '+237 6 98 16 80 50',
    description: "General Express provides extensive routes and modern buses for convenient travel.",
    },
];

const BusCompanyCard = ({ company }) => (
    <View style={styles.card}>
        <Image source={company.logo} style={styles.image} />
        <Text style={styles.title}>{company.name}</Text>
        <Text style={styles.description}>{company.description}</Text>
            <View style={styles.actions}>
                <Button title="Website" onPress={() => Communications.web(company.website)} />
                <Button title="Call" onPress={() => Communications.phonecall(company.phone, true)} />
            </View>
    </View>
);

const BusCompaniesListing = () => (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
        <ScrollView>
                <View style={styles.container}>
                    {busCompanies.map((company, index) => (
                    <BusCompanyCard key={index} company={company} />
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

export default BusCompaniesListing;
