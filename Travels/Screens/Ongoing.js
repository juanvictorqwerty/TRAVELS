import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useEffect } from 'react';
import * as Notifications from 'expo-notifications';

export default function Ongoing() {
  useEffect(() => {
    // Request permissions for notifications
    Notifications.requestPermissionsAsync();
  }, []);

  const scheduleAlarm = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Alarm!",
        body: "This is your scheduled alarm.",
      },
      trigger: {
        seconds: 10, // Change this to the desired time
      },
    });
  };

  return (
    <View>
      <Text>Ongoing</Text>
      <Button title="Set Alarm" onPress={scheduleAlarm} />
    </View>
  );
}

const styles = StyleSheet.create({});
