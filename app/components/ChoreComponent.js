import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import axios from "axios";

const styles = StyleSheet.create({});

export default class ChoreComponent extends React.Component {

    state = {

    }

    constructor(props) {
        super(props);

        if(props.id) {this.getUserChores(props)}
        else {this.getAllChores()}
    }

    getAllChores = () => {
        axios.get('http://10.0.2.2:8000/chores/chores')
            .then(res => {
                const choreList = res.data;
                this.setState({chores: choreList.data})
            })
            .catch((error) => {
                console.error(error)
            })
    }

    getUserChores = (props) => {
        console.log(props.id);

        axios.get('http://10.0.2.2:8000/chores/chores')
            .then(res => {
                const choreList = res.data;
                this.setState({chores: choreList.data})
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Hoi hoi</Text>
            </View>
        );
    }
}
