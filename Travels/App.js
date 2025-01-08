import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HotelListing from './Screens/HotelListing';
import BottomNavigation from './Navigation/BottomNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <BottomNavigation/>
    </NavigationContainer>  
    
  );
}

const styles = StyleSheet.create({
  
});
