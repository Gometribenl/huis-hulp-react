import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

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

export default class Zoekbalk extends React.Component {

    render() {
        return (
            <View style={styles.header}>
                <TextInput placeholder="Zoeken..."/>
            </View>
        );
    }
}

