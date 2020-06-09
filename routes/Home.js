import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';
import ListSlider from '../components/ListSlider';
import Navbar from '../components/Navbar';
import Googlemaps from "../components/Googlemaps";
import Zoekbalk from "../components/Zoekbalk";
import AppLayout from '../components/AppLayout';
import { Actions } from 'react-native-router-flux';

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
                  <Zoekbalk/>
                  <Googlemaps/>
                 <Button title='Login' onPress={()=> Actions.login()} />
             </View>

                <ListSlider/>
                <Navbar/>

            </AppLayout>
        );
    }
}
