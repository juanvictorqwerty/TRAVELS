import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../Constants/COLORS';


export default BusCompanieslListing = () => {
    
    const Cards = () => {
        return (
            <View style={{ padding: 10, margin: 10, backgroundColor: COLORS.lightGray, borderRadius: 10 }}>
        <Image source={require('../assets/BusCompanies_logos/Toursitque.jpg')} style={{ width: '100%', height: 200 }} />
                <Text style={{ textAlign: 'center'}}>Touristique express</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Yaounde 650565596"
                        onPress={()=>Communications.web('https://www.hilton.com/fr/hotels/yaohitw-hilton-yaounde/')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('650565596', true)
                    } />
                </View>

                <Image source={require('../assets/BusCompanies_logos/mentravel-logo.png')} style={{ width: '100%', height:200 }} />
                <Text style={{ textAlign: 'center'}}>Men Travel</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Yaounde" />
                </View>

                <Image source={require('../assets/BusCompanies_logos/United_Express.png')} style={{ width: '100%', height: 200 }} />
                <Text style={{ textAlign: 'center'}}>United Express</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Yaounde 650565596"
                        onPress={()=>Communications.web('https://www.hilton.com/fr/hotels/yaohitw-hilton-yaounde/')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('650565596', true)
                    } />
                </View>

                <Image source={require('../assets/BusCompanies_logos/General-express.jpeg')} style={{ width: '100%', height: 200 }} />
                <Text style={{ textAlign: 'center'}}>General Express</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Yaounde 650565596"
                        onPress={()=>Communications.web('https://www.hilton.com/fr/hotels/yaohitw-hilton-yaounde/')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('650565596', true)
                    } />
                </View>

            </View>
        );
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
            
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
