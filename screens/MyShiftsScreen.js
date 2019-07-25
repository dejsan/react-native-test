import React, { Component } from 'react';
import { Platform, StyleSheet, View, SectionList } from 'react-native';

import DummyData from '../constants/DummyData';
import Colors from '../constants/Colors';
import Api from '../constants/Api';
import SectionHeader from '../components/myShifts/SectionHeader';
import SectionItem from '../components/myShifts/SectionItem';

export default class MyShiftsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      shiftsData: [],
      isGettingData: false
    };
  }

  componentDidMount() {
    this.getShiftsData();
  }

  getShiftsData = () => {
    const { isGettingData } = this.state;

    if (!isGettingData) {
      this.setState({
        isGettingData: true,
      });

      return fetch(Api.base + '/shifts', { method: 'GET' })
        .then((response) => response.json())
        .then((responseJson) => {

          // TODO - reorganise data to match dummyData style because of section list

          this.setState({
            isGettingData: false,
            shiftsData: responseJson
          });

        })
        .catch((error) => {

          this.setState({
            isGettingData: false,
          });
          Platform.OS == 'web' ?
            alert('Server error, please try again later.')
            :
            Alert.alert('Server error, please try again later.');

        });
    }
  }

  render() {
    const { shiftsData } = this.state;

    return (
      <View style={styles.container}>
        <SectionList
          // ItemSeparatorComponent={() => <View style={styles.itemSeparator}></View>} //--- not working properly because of RN's 'render-canvas-bug'
          sections={DummyData} 
          renderItem={({ item }) => <SectionItem id={item.id} startTime={item.startTime} endTime={item.endTime} area={item.area} />}
          renderSectionHeader={({ section }) => <SectionHeader title={section.title} info={section.info} />}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

MyShiftsScreen.navigationOptions = {
  header: null,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemSeparator: {
    backgroundColor: Colors.grey1,
    height: StyleSheet.hairlineWidth,
  }
});
