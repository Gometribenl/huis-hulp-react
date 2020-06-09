import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ListSlider from '../components/ListSlider';
import NavBar from '../components/NavBar';
import GoogleMaps from "../components/GoogleMaps";
import SearchBar from "../components/SearchBar";
import AppLayout from '../components/AppLayout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default class Home extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <AppLayout>
                <View style={styles.container}>
                    <SearchBar/>
                    <GoogleMaps/>
                </View>
                <ListSlider/>
                <NavBar/>
            </AppLayout>
        );
    }
}
