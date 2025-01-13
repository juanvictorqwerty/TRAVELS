import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// Importing screens
import BusCompaniesListing from '../Screens/BusCompaniesListing';
import AirlinesListing from '../Screens/AirlinesListing';
import HotelListing from '../Screens/HotelListing';

// Create top tab navigator
const Tab = createMaterialTopTabNavigator();

export default function Favourites() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarLabelStyle: { fontSize: 14 },
                tabBarStyle: { backgroundColor: '#ffff' },
                tabBarIndicatorStyle: { backgroundColor: 'blue' },
            }}
        >
            <Tab.Screen name="Buses" component={BusCompaniesListing} />
            <Tab.Screen name="Airlines" component={AirlinesListing} />
            <Tab.Screen name="Hotels" component={HotelListing} />
        </Tab.Navigator>
    );
}
