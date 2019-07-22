import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList
} from 'react-native';

export default function MyShiftsScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          { title: 'Today', info: '2 shifts, 4 h', data: ['14:00 - 16:00', '16:00 - 19:00', '20:00 - 24:00'] },
          { title: 'Tomorrow', info: '1 shift, 4 h', data: ['14:00 - 16:00', '14:00 - 16:00', '14:00 - 16:00', '14:00 - 16:00', '14:00 - 16:00', '14:00 - 16:00', '14:00 - 16:00', '14:00 - 16:00', '14:00 - 16:00', '14:00 - 16:00', '14:00 - 16:00', '14:00 - 16:00'] },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={
          ({ section }) =>
            <View style={styles.sectionHeader}>
              <Text>
                <Text style={styles.sectionHeaderTitle}>{section.title} </Text>
                <Text style={styles.sectionHeaderInfo}> {section.info}</Text>
              </Text>
            </View>
        }
        keyExtractor={(item, index) => index}
      />
    </View>
  );
}

MyShiftsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionHeader: {
    backgroundColor: 'rgba(247,247,247,1.0)',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  sectionHeaderTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#4F6C92',
  },
  sectionHeaderInfo: {
    marginLeft: 20,
    fontSize: 14,
    color: 'rgba(203, 210, 225, 1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
