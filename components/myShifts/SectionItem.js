import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';

import CancelButton from './CancelButton';

export default function SectionItem(props) {
  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.time}>{props.time}</Text>
        <Text style={styles.place}>{props.place}</Text>
      </View>
      <View>
        <CancelButton id={props.id}/> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 12,
    paddingLeft: 20,
    paddingRight: 20,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    justifyContent: "space-between"
  },
  time: {
    color: Colors.grey5,
  },
  place: {
    color: Colors.grey4,
  }
});