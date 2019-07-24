import React from 'react';
import { StyleSheet, View, SectionList } from 'react-native';

import DummyData from '../constants/DummyData';
import Colors from '../constants/Colors';

import SectionHeader from '../components/myShifts/SectionHeader';
import SectionItem from '../components/myShifts/SectionItem';

export default function MyShiftsScreen() {
    return (
        <View style={styles.container}>
            <SectionList
                // ItemSeparatorComponent={() => <View style={styles.itemSeparator}></View>} //--- not working properly because of RN's 'render-canvas-bug'
                sections={DummyData}
                renderItem={({ item }) => <SectionItem id={item.id} time={item.time} place={item.place} />}
                renderSectionHeader={({ section }) => <SectionHeader title={section.title} info={section.info} />}
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
    itemSeparator: {
        backgroundColor: Colors.grey1,
        height: StyleSheet.hairlineWidth,
    }
});
