import React from 'react';
import {StyleSheet, View} from 'react-native';

export default class SearchBar extends React.Component {
    render() {
        return (
            <View style={styles.header}>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '80%',
        height: '9%',
        backgroundColor: '#eee',
        borderRadius: 50,
        alignSelf: 'center',
        zIndex: 100,
        position: 'absolute',
        marginTop: 15
    }
});
