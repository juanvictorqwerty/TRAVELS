import { StyleSheet } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Map from '../Screens/Map';
import Ongoing from '../Screens/Ongoing';
import Favourites from '../Screens/Favourites';


export default function BottomNavigation() {
    
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator >
            <Tab.Screen name='Popular' component={Favourites}/>
            <Tab.Screen name='Map' component={Map}/>
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