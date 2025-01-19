import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'; // Import FontAwesome5 icons
import Map from '../Screens/Map';
import Ongoing from '../Screens/Ongoing';
import Favourites from '../Screens/Favourites';

export default function BottomNavigation() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Popular') {
            iconName = 'star'; // FontAwesome5 icon name
          } else if (route.name === 'Map') {
            iconName = 'map-marker-alt';
          } else if (route.name === 'Ongoing') {
            iconName = 'spinner';

          }
          // Ensure the return is here
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3498db', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopWidth: 0,
        },
      })}
    >
      <Tab.Screen name="Popular" component={Favourites} />
      <Tab.Screen name="Map" component={Map} />
      <Tab.Screen name="Ongoing" component={Ongoing} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
