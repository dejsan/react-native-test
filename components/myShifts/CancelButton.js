import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Colors from '../../constants/Colors';
import Api from '../../constants/Api';
import Spinner from '../Spinner';

export default class CancelButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      disabled: false,
      isLoading: false,
    };
  }

  cancelShift = () => {
    const { id } = this.props;

    this.setState({
      isLoading: true,
    });

    return fetch(Api.base+'/shifts/'+id+'/cancel')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        if(responseJson.statusCode === '404'){
          alert('Not found');
          Alert.alert('Not found');
        } else if(responseJson.statusCode === '200'){
          alert('Done');
          Alert.alert('Done');
        } else {
          alert(responseJson.statusCode);
          Alert.alert(responseJson.statusCode);
        }
        this.setState({
          isLoading: false,
          disabled: true,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
        });
        alert('Server error, please try again later.');
        Alert.alert('Server error, please try again later.');
      });
  }

  render() {
    const { disabled, isLoading } = this.state;

    return (
      <View style={styles.container}>
        <TouchableOpacity
          disabled={disabled}
          style={[styles.button, !disabled ? styles.enabledButton : styles.disabledButton]}
          onPress={this.cancelShift}>
          {isLoading ?
            <Spinner color='red' />
            :
            <Text style={[styles.text, !disabled ? styles.enabledText : styles.disabledText]}>Cancel</Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#fff",
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    width: 90,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  enabledButton: {
    borderColor: Colors.red2,
  },
  enabledText: {
    color: Colors.red3,
  },
  disabledButton: {
    borderColor: Colors.grey2,
  },
  disabledText: {
    color: Colors.grey4,
  },
});