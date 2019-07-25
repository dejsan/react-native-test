import React from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';

export default function AvailableShiftsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={{fontSize: 20, alignSelf: "center"}}>Available Shifts Screen</Text>
    </ScrollView>
  );
}

AvailableShiftsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
