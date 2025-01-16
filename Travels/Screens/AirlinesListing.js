import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../Constants/COLORS';


export default Airlines_logos = () => {
    
    const Cards = () => {
        return (
            <View style={{ padding: 10, margin: 10, backgroundColor: COLORS.lightGray, borderRadius: 10 }}>
                
                <Image source={require('../assets/Airlines_logos/Camair.jpg')} style={{ width: '100%', height:100 }} />
                <Text style={{ textAlign: 'center'}}>CAMAIR-CO</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Website"
                        onPress={()=> Communications.web('https://www.camair-co.cm/')
                    } />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('+237 233 50 55 35', true)
                    } />
                </View>
                
                <Image source={require('../assets/Airlines_logos/Air-France-Logo.png')} style={{ width: '110%', height: 200 }} />
                <Text style={{ textAlign: 'center'}}>AIR FRANCE</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Website"
                        onPress={()=>Communications.web('https://wwws.airfrance.cm/')}
                    />
                    <Button title="Call"
                        onPress={()=>Communications.phonecall('+237 2 33 50 15 15', true)}
                    />
                </View>

                <Image source={require('../assets/Airlines_logos/Kenya_Airways.png')} style={{ width: '100%', height:200 }} />
                <Text style={{ textAlign: 'center'}}>KENYA AIRWAYS</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Website"
                        onPress={()=>Communications.web('https://www.kenya-airways.com/fr_cm/vols-au-depart-de-cameroun')}
                    />
                    <Button title="Call"
                        onPress={()=>Communications.phonecall('+237 6 77 11 00 60', true)}
                    />
                </View>

                <Image source={require('../assets/Airlines_logos/turkish-airlines-logo-0.png')} style={{ width: '100%', height: 200 }} />
                <Text style={{ textAlign: 'center'}}>TURKISH AIRLINES</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Website"
                        onPress={()=>Communications.web('https://www.turkishairlines.com/fr/book-flights-from-cameroon')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall(' +237 2 22 20 88 49', true)
                    } />
                </View>

                <Image source={require('../assets/Airlines_logos/Ethiopian-Airlines.jpg')} style={{ width: '100%', height: 200 }} />
                <Text style={{ textAlign: 'center'}}>ETHIOPIAN AIRLINES</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Website"
                        onPress={()=>Communications.web('https://www.ethiopianairlines.com/fr-cm/vols-depuis-cameroun')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('+237 233420264', true)
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
