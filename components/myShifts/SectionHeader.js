import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Colors from '../../constants/Colors';

export default function SectionHeader(props) {
	return (
		<View style={styles.sectionHeader}>
			<Text>
				<Text style={styles.title}>{props.title} </Text>
				<Text style={styles.info}> {props.info}</Text>
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: Colors.grey1,
    paddingTop: 10,
    paddingLeft: 25,
    paddingRight: 10,
    paddingBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.grey5,
  },
  info: {
    marginLeft: 10,
    fontSize: 16,
    color: Colors.grey4,
  }
});