import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../Constants/COLORS';
import Communications from 'react-native-communications';

export default HotelListing = () => {
    
    const Cards = () => {
        return (
            <View style={{ padding: 10, margin: 10, backgroundColor: COLORS.lightGray, borderRadius: 10 }}>
            <Image source={require('../assets/Hotel_logos/Hotel-Hilton.jpg')} style={{ width: '100%', height: 200 }} />
            <Text style={{ textAlign: 'center'}}>Hotel Hilton</Text>
            <View style={{ marginBottom: 40 }}>
                <Button title="Yaounde 650565596"
                    onPress={()=>Communications.web('https://www.hilton.com/fr/hotels/yaohitw-hilton-yaounde/')}
                />
            </View>

            <Image source={require('../assets/Hotel_logos/hotel-mont-febe.jpg')} style={{ width: '100%', height: 200 }} />
            <Text style={{ textAlign: 'center'}}>Hotel Mont-Febe</Text>
            <View style={{ marginBottom: 40 }}>
                <Button title="Yaounde"
                    onPress={()=> Communications.web('https://www.agoda.com/hotel-mont-febe_8/hotel/yaounde-cm.html?countryId=36&finalPriceView=1&isShowMobileAppPrice=false&cid=1904733&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2025-01-10&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=-1&showReviewSubmissionEntry=false&currencyCode=USD&isFreeOccSearch=false&los=1&searchrequestid=fc2a4480-5b3b-47a0-8a64-e4b9a5840d70&ds=mhdcfuaQ6xTw7ZWH')
                } />
            </View>

            <Image source={require('../assets/Hotel_logos/hotel-sawa.jpg')} style={{ width: '100%', height: 200 }} />
            <Text style={{ textAlign: 'center'}}>Hotel Sawa</Text>
            <View style={{ marginBottom: 40 }}>
                <Button title="Website" 
                    onPress={()=>Communications.web('')}
                />
            </View>

            <Image source={require('../assets/Hotel_logos/krystal-palace.jpg')} style={{ width: '100%', height: 200 }} />
            <Text style={{ textAlign: 'center'}}>Krystal Palace</Text>
            <View style={{ marginBottom: 40 }}>
                <Button title="Douala"
                onPress={()=> Communications.web('https://www.krystalpalacedouala.com/')}
                />
            </View>

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
                data={[1]} // Dummy data for rendering cards
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
    Cards: {
        elevation:16,
        backgroundColor: COLORS.blue,
    },
});
