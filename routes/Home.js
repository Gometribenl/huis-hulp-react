import React from 'react';
import {View, Text, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>This is HOME!</Text>
                <Button onPress={() => Actions.profile()} title="Profile"/>
            </View>
        );
    }
}
