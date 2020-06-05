import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import GoogleMaps from "../components/GoogleMaps";
import SearchBar from "../components/SearchBar";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default class Home extends Component {

    render() {
        return (
             <View style={styles.container}>
              <SearchBar/>
              <GoogleMaps/>
             </View>
                 );
    }
}

