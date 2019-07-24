import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';

export default function MyShiftsSectionItem(props) {
  return (
    <View style={styles.cancelButtonContainer}>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => { cancelShift() }}  >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

function cancelShift(){

}

const styles = StyleSheet.create({
  cancelButtonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cancelButton: {
    backgroundColor: "#fff",
    borderColor: Colors.red2,
    borderWidth: 1,
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '400',
    color: Colors.red3,
  }
});