
import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';


import Googlemaps from "../components/Googlemaps";
import Zoekbalk from "../components/Zoekbalk";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default class Home extends Component {

    render() {
        return (
             <View style={styles.container}>


              <Zoekbalk/>
              <Googlemaps/>
             </View>
                 );
    }
}

