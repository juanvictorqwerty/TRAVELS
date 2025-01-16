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
                    <Button title="Website"
                        onPress={()=>Communications.web('https://www.touristique.cm/')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('+237 650 62 38 79', true)
                    } />
                </View>

                <Image source={require('../assets/BusCompanies_logos/mentravel-logo.png')} style={{ width: '100%', height:200 }} />
                <Text style={{ textAlign: 'center'}}>Men Travel</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Website"
                        onPress={()=>Communications.web('https://mentravel.cm/')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('+237 6 59 88 59 21', true)
                    } />
                </View>

                <Image source={require('../assets/BusCompanies_logos/United_Express.png')} style={{ width: '100%', height: 200 }} />
                <Text style={{ textAlign: 'center'}}>United Express</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Website"
                        onPress={()=>Communications.web('https://www.unitedexpress.cm/fr/')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('+237 6 53 53 96 96', true)
                    } />
                </View>

                <Image source={require('../assets/BusCompanies_logos/General-express.jpeg')} style={{ width: '100%', height: 200 }} />
                <Text style={{ textAlign: 'center'}}>General Express</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Website"
                        onPress={()=>Communications.web('https://generalexpressvoyages.com/#/home')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('+237 6 98 16 80 50', true)
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
