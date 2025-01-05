import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5';
import COLORS from '../Constants/COLORS';

export default  HotelListing = () => {
    return (
        <SafeAreaView style = {{flex:1,backgroundColor:COLORS.white}}>
            <View style ={style.header}>
                <View style={{paddingBottom:20}}>
                    <Text style={{fontsize:40,fontWeight:'bold'}}>
                        Hotels
                    </Text>
                    </View>
            </View>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    header: {
        marginTop:35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        },
    });




