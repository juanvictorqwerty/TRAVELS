import { StyleSheet, Text, View, SafeAreaView, FlatList, Image, Button } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../Constants/COLORS';


export default Airlines_logos = () => {
    
    const Cards = () => {
        return (
            <View style={{ padding: 10, margin: 10, backgroundColor: COLORS.lightGray, borderRadius: 10 }}>
                
                <Image source={require('../assets/Airlines_logos/Camair.jpg')} style={{ width: '100%', height:100 }} />
                <Text style={{ textAlign: 'center'}}>Men Travel</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Yaounde" />
                </View>
                
                <Image source={require('../assets/Airlines_logos/Air-France-Logo.png')} style={{ width: '110%', height: 200 }} />
                <Text style={{ textAlign: 'center'}}>Touristique express</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Yaounde 650565596"
                        onPress={()=>Communications.web('https://www.hilton.com/fr/hotels/yaohitw-hilton-yaounde/')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('650565596', true)
                    } />
                </View>

                <Image source={require('../assets/Airlines_logos/Kenya_Airways.png')} style={{ width: '100%', height:200 }} />
                <Text style={{ textAlign: 'center'}}>Men Travel</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Yaounde" />
                </View>

                <Image source={require('../assets/Airlines_logos/turkish-airlines-logo-0.png')} style={{ width: '100%', height: 200 }} />
                <Text style={{ textAlign: 'center'}}>United Express</Text>
                <View style={{ marginBottom: 40 }}>
                    <Button title="Yaounde 650565596"
                        onPress={()=>Communications.web('https://www.hilton.com/fr/hotels/yaohitw-hilton-yaounde/')}
                    />
                    <Button title="Call"
                        onPress={()=> Communications.phonecall('650565596', true)
                    } />
                </View>

                <Image source={require('../assets/Airlines_logos/Ethiopian-Airlines.jpg')} style={{ width: '100%', height: 200 }} />
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
            <View style={style.header}>
                <View style={{ paddingBottom: 20 }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold' }}>
                        Buses
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
