import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HotelListing from '../Screens/HotelListing'
import BusCompaniesListing from '../Screens/BusCompaniesListing';
import AirlinesListing from '../Screens/AirlinesListing';
import Map from '../Screens/Map';
import Ongoing from '../Screens/Ongoing';
import Favourites from '../Screens/Favourites';


export default function BottomNavigation() {
    
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator >
            <Tab.Screen name='Map' component={Map}/>
            <Tab.Screen name='Popular' component={Favourites}/>
            <Tab.Screen name="Hotels" component={HotelListing} />
            <Tab.Screen name="Buses" component={BusCompaniesListing} />
            <Tab.Screen name="Airlines" component={AirlinesListing}/>
            <Tab.Screen name="Ongoing" component={Ongoing}/>
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

})