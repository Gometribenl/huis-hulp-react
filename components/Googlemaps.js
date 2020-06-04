import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: '#A9A9A9',
        resizeMode: 'cover',
        justifyContent: 'center'

    }
});

export default class Googlemaps extends React.Component {

    render() {
        return (
            <View style={styles.container}>

            </View>
        );
    }
}

