import React, {Component} from 'react';
import {ImageBackground, StyleSheet, TextInput, View} from 'react-native';
import AppLayout from '../components/AppLayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Button, Text} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import {Parameters} from "../../global";
import {setToken, setUserData, updateChores, updatePersonalChores} from "../actions";
import {connect} from "react-redux";

const image = {uri: "https://images.unsplash.com/photo-1589705436822-720a68b246fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"};

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: null,
            email: null,
            password: null,
            c_password: null,
        }
    }

    register = () => {
        let credentials = {
            'name': this.state.name,
            'email': this.state.email,
            'password': this.state.password,
            'c_password': this.state.c_password,
        }
        axios.post(Parameters.apiDomain + '/auth/register', credentials)
            .then((response) => {
            console.log(response);
            if (response.data.statuscode === 200) {
                let user_id = response.data.data[0].id;
                let token = response.data.data[0].token;
                this.props.dispatch(setToken(token));
                this.populateUserReducer(token, user_id);
                this.requestPersonalChores(token, user_id);
                this.populateChoresReducer(token);
            }
        }).then(() => {
            Actions.home();
        }).catch((error) => {
            console.error(error)
        });
    }

    populateUserReducer = (token, user_id) => {
        axios.get(Parameters.apiDomain + '/user/user/' + user_id, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }).then((response) => {
            this.props.dispatch(setUserData(response.data.data[0]));
        }).catch((error) => {
            console.error(error)
        })
    }

    populateChoresReducer = (token) => {
        axios.get(Parameters.apiDomain + '/chores/chores', {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }).then((response) => {
            this.props.dispatch(updateChores(response.data.data));
        }).catch((error) => {
            console.log(error);
        });
    }

    requestPersonalChores = (token, user_id) => {
        axios.get(Parameters.apiDomain + '/chores/chores/' + user_id, {
            headers: {
                'Authorization': 'Bearer ' + token,
            }
        }).then((response) => {
            this.props.dispatch(updatePersonalChores(response.data.data));
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <AppLayout>
                <ImageBackground style={styles.image} source={image}>
                    <View style={styles.container}>
                        <Text style={styles.text}>Welkom!</Text>
                        <View style={styles.form}>
                            <TextInput
                                placeholder='Gebruikersnaam'
                                leftIcon={<Icon name='user' size={24} color='black'/>}
                                onChangeText={(value) => {this.setState({name: value})}}
                            />
                            <TextInput
                                placeholder='E-mail'
                                leftIcon={<Icon name='user' size={24} color='black'/>}
                                onChangeText={(value) => {this.setState({email: value})}}
                            />
                            <TextInput
                                placeholder='Wachtwoord'
                                secureTextEntry={true}
                                leftIcon={<Icon name='user' size={24} color='black'/>}
                                onChangeText={(value) => {this.setState({password: value})}}
                            />
                            <TextInput
                                placeholder='Wachtwoord controle'
                                secureTextEntry={true}
                                leftIcon={<Icon name='lock' size={24} color='black'/>}
                                onChangeText={(value) => {this.setState({c_password: value})}}
                            />
                            <Button
                                onPress={() => this.register()}
                                title="Registreren"
                            />
                        </View>
                        <View style={styles.buttonRegisteren}>
                            <Button
                                title="al een account? "
                                onPress={() => Actions.login()}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </AppLayout>
        );
    }
}

export default connect()(Register);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.7,
    },
    form: {
        justifyContent: "center",
        backgroundColor: "white",
        color: 'black',
        opacity: 0.7,
    },
    buttonRegisteren: {
        margin: 8,
        height: 75,
        marginTop: 0,
        borderRadius: 24,
        justifyContent: 'center',
    }
});
