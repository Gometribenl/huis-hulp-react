import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';

import {Input, Button} from 'react-native-elements';

import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import Navbar from '../components/Navbar';
import AppLayout from "../components/AppLayout";

export default class NewChore extends React.Component {

    state = {
        name: '',
        description: '',
        error: '',
    };

    constructor(props) {
        super(props);
    }

    handleSubmit = () => {
        if (this.state.name === '' || this.state.description === '') {
            this.setState({
                error: 'Enter a valid name and description'
            })
        } else {
            this.postChore()
        }
    }

    postChore = () => {

    }

    render() {
        return (
            <AppLayout>
                <ScrollView style={styles.container}>
                    <Input
                        placeholder="Chore title"
                        onChangeText={value => this.setState({name: value})}
                        label={"Title"}
                    />
                    <Input
                        placeholder="Description"
                        onChangeText={value => this.setState({description: value})}
                        label={"Description"}
                        errorMessage={this.state.error}
                    />

                    <Button title="Submit Chore" buttonStyle={styles.submitBtn}
                            onPress={() => {
                                this.handleSubmit()
                            }}/>
                </ScrollView>
                <Navbar/>
            </AppLayout>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        color: '#363636',
    },
    submitBtn: {
        width: '50%',
        alignSelf: 'center',
    },

});
