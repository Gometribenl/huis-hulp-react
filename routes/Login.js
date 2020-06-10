import React, {Component} from 'react';
import {StyleSheet,
    View,
    ImageBackground,
} from 'react-native';
import AppLayout from '../components/AppLayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    Input,
    Button,
    Text,
} from 'react-native-elements';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    text:{
        color:'white',
        fontSize:20,
        textAlign:'center',


    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.7,
    },

    form:{
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

const image = { uri: "https://images.unsplash.com/photo-1589705436822-720a68b246fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" };

constructor(props) {
    super(props);

    axios.get('http://10.0.2.2:8000/user/user/' + this.state.id)
        .then(res => {
            const nameList = res.data;
            this.setState({ userData: nameList.data[0]});
        })
        .catch((error) => {
            console.error(error)
        })

    axios.get('http://10.0.2.2:8000/user/chores/' + this.state.id)
        .then(res => {
            const choreList = res.data;
            this.setState({ chores: choreList.data })
        })
}



export default class Login extends Component {
    render() {
        return (
            <AppLayout>
                <ImageBackground style={styles.image} source={image}>
                    <View style={styles.container}>
                            <Text style={styles.text}>Welkom!</Text>
                        <View style={styles.form}>
                            <Input
                                placeholder='username'
                                leftIcon={
                                    <Icon
                                        name='user'
                                        size={24}
                                        color='black'
                                    />
                                }
                            />
                                <Input
                                    placeholder='password'
                                    leftIcon={
                                        <Icon
                                            name='lock'
                                            size={24}
                                            color='black'
                                        />
                                    }
                                />
                                <Button
                                    onPress={()=> Actions.login()}
                                    title="Aanmelden"
                                />
                            </View>
                    <View style={styles.buttonRegisteren}>
                        <Button
                            title="Nog geen account? "
                            onPress={()=> Actions.login()}
                        />
                    </View>

                </View>
                </ImageBackground>
            </AppLayout>
        );
    }
}

