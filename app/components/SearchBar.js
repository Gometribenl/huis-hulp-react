import React from 'react';
import {StyleSheet, View, TextInput} from 'react-native';

export default class SearchBar extends React.Component {
    render() {
        return (
            <View style={styles.header}>
                <TextInput placeholder={"Zoeken..."}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        width: '80%',
        height: 39,
        backgroundColor: '#fff',
        borderRadius: 50,
        zIndex: 1,
        left: 10,
        top: 11,
    }
});
