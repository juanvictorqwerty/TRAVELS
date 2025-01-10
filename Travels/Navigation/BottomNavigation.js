import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HotelListing from '../Screens/HotelListing'
import BusCompaniesListing from '../Screens/BusCompaniesListing';
import AirlinesListing from '../Screens/AirlinesListing';
import Map from '../Screens/Map';

export default function BottomNavigation() {
    
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={{headerShown: false}}>
            <Tab.Screen name='Map' component={Map}/>
            <Tab.Screen name="Hotels" component={HotelListing} />
            <Tab.Screen name="Buses" component={BusCompaniesListing} />
            <Tab.Screen name="Airlines" component={AirlinesListing}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

})