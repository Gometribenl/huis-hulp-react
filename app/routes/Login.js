import React, {Component} from 'react';
import {ImageBackground, StyleSheet, TextInput, View} from 'react-native';
import AppLayout from '../components/AppLayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, Button} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import {setToken, updateChores, setUserData, updatePersonalChores, initChatReducer} from '../actions';
import {connect} from 'react-redux';
import axios from 'axios';
import {Parameters} from '../../global';
import Authenticate from '../classes/Authenticate';
import store from '../store/store';

const image = {uri: 'https://images.unsplash.com/photo-1589705436822-720a68b246fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'};

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'test@test.nl',
            password: '123',
        };
    }
    login = () =>{
        let credentials = {
            'email': this.state.email,
            'password': this.state.password,
        };
        axios.post(Parameters.apiDomain + '/auth/login', credentials).then((response) => {
            console.log(response);
            if (response.data.statuscode === 200) {
                let user_id = response.data.data[0].id;
                let token = response.data.data[0].token;
                store.dispatch(setToken(token));
                Authenticate.login(token, user_id);
            }
        }).catch((error) => {
            console.error(error);
        });
    };
    render() {
        return (
            <AppLayout>
                <ImageBackground style={styles.image} source={image}>
                    <View style={styles.container}>
                        <Text style={styles.text}>Welkom!</Text>
                        <View style={styles.form}>
                            <TextInput placeholder='E-mail'
                                       leftIcon={<Icon name='user' size={24} color='black'/>}
                                       onChangeText={(value) => {
                                           this.setState({email: value});
                                       }}
                            />
                            <TextInput placeholder='Wachtwoord'
                                       secureTextEntry={true}
                                       leftIcon={<Icon name='lock' size={24} color='black'/>}
                                       onChangeText={(value) => {
                                           this.setState({password: value});
                                       }}
                            />
                            <Button title="Aanmelden" onPress={() =>
                                this.login()
                            }/>
                        </View>
                        <View style={styles.registerButton}>
                            <Button
                                title="Nog geen account?"
                                onPress={() => Actions.register()}
                            />
                        </View>
                    </View>
                </ImageBackground>
            </AppLayout>
        );
    }
}

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        opacity: 0.7,
    },

    form: {
        justifyContent: 'center',
        backgroundColor: 'white',
        color: 'black',
        opacity: 0.7,
    },

    registerButton: {
        margin: 8,
        height: 75,
        marginTop: 0,
        borderRadius: 24,
        justifyContent: 'center',

    },
});
