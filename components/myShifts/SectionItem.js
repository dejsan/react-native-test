import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import CancelButton from './CancelButton';

export default function SectionItem(props) {
  const { id, area, startTime, endTime } = props;

  let time = timestampToTime(startTime) + ' - ' + timestampToTime(endTime);

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.time}>{time}</Text>
        <Text style={styles.area}>{area}</Text>
      </View>
      <View>
        <CancelButton id={id} />
      </View>
    </View>
  );
}

function timestampToTime(t) {
  var dt = new Date(t * 1000);
  var hr = dt.getHours();
  var m = "0" + dt.getMinutes();
  return hr + ':' + m.substr(-2);
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
  area: {
    color: Colors.grey4,
  }
});