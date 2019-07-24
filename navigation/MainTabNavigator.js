import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from '../constants/Colors';

import MyShiftsScreen from '../screens/MyShiftsScreen';
import AvailableShiftsScreen from '../screens/AvailableShiftsScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
});

const MyShiftsStack = createStackNavigator(
    {
        MyShifts: MyShiftsScreen,
    },
    config
);

MyShiftsStack.navigationOptions = {
    tabBarLabel: 'My shifts',
};

MyShiftsStack.path = '';

const AvailableShiftsStack = createStackNavigator(
    {
        Links: AvailableShiftsScreen,
    },
    config
);

AvailableShiftsStack.navigationOptions = {
    tabBarLabel: 'Available shifts',
};

AvailableShiftsStack.path = '';

const tabNavigator = createBottomTabNavigator({
    MyShiftsStack,
    AvailableShiftsStack,
},
    {
        tabBarOptions: {
            labelStyle: { fontSize: 16 },
            tabStyle: {
                justifyContent: 'center',
            },
            style:{
                borderColor: Colors.grey3,
            },
            showIcon: false,
        },
    }
);

tabNavigator.path = '';

export default tabNavigator;
