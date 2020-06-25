import React, {Component} from 'react';
import {TextInput, View, StyleSheet, ScrollView} from 'react-native';
import AppLayout from '../components/AppLayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import NavBar from '../components/NavBar';
import axios from 'axios';
import {Parameters} from '../../global';
import store from '../store/store';



class Chatroom extends Component {
    state = {
        messages: null,
        newMessage: null,
    };
    constructor(props) {
        super(props)
        this.getMessage()
    }

    postMessage= () => {
        let message = {
            chatRoomId: this.props.chatroom,
            message: this.state.newMessage,
        };
        axios.post(Parameters.apiDomain + '/message/message/', message,{
            headers: {
                'Authorization': 'Bearer ' + this.props.token,
            },
        }).then(() => {
            this.getMessage();
        }).catch((error) => {
            console.log(error);
        });
    }
    getMessage= () => {
        axios.get(Parameters.apiDomain + '/message/message/' + this.props.chatroom, {
            headers: {
                'Authorization': 'Bearer ' + this.props.token,
            },
        }).then((response) => {
            this.setState({messages: response.data});
        }).catch((error) => {
            console.log(error);
        });
    }
    renderMessage = (message) => {
        console.log(this.props.user_id);
        if (this.props.user_id === message.sender_id) {
            console.log('right');
            return (
                <Text style={styles.messageRight}>{message.message}</Text>
            );
        } else {
            console.log('left');
            return (
            <Text style={styles.messageLeft}>{message.message}</Text>
            );
        }
    }
    render() {
        return (
            <AppLayout>
                <View style={styles.container}>
                    <ScrollView>
                    {this.state.messages && (this.state.messages.map( (message) =>
                        <View style={styles.container}>
                            {this.renderMessage(message)}
                        </View>
                    ))}
                    </ScrollView>
                    <TextInput
                    placeholder="Type uw bericht"
                    onChangeText={(value) => {
                        this.setState({newMessage: value});
                    }}
                    />
                    <Button
                    title={'Verzend'}
                    onPress={() => this.postMessage()}
                    />
                </View>
                <NavBar/>
            </AppLayout>
        );
    }
}
const styles = StyleSheet.create ({
    container: {
      flex: 1,
    },
  messageRight: {
        margin: 4,
        paddingBottom: 0,
        borderWidth: 5,
        borderRadius: 3,
        padding: 10,
        borderColor: '#dec9a9',
        backgroundColor: '#dec9a9',
        textAlign: 'right',

  },
    messageLeft: {
        color: '#363636',
        margin: 4,
        paddingBottom: 0,
        borderWidth: 5,
        borderRadius: 3,
        padding: 10,
        borderColor: '#dcdcdc',
        backgroundColor: '#dcdcdc',
    },
});
const mapStateToProps = (state) => ({
    token: state.userReducer.token,
    user_id: state.userReducer.user.id,
});
export default connect(mapStateToProps)(Chatroom);

