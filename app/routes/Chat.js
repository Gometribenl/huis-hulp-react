import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import AppLayout from '../components/AppLayout';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text, Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import NavBar from '../components/NavBar';

class Chat extends Component {

    determineRoomName = (chatroom) => {
        if (chatroom.receiver.id === this.props.user_id) {
            return chatroom.sender.name;
        } else {
            return chatroom.receiver.name;
        }
    }


    render() {
        return (
            <AppLayout>
                <View style={styles.container}>
                    {this.props.chatrooms.map((chatroom) =>
                       <View>
                        <Button title={this.determineRoomName(chatroom)} key={chatroom.id} onPress={() => Actions.chatroom( {chatroom: chatroom.id})}></Button>
                       </View>
                       )}
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
});

const mapStateToProps = (state) => ({
    chatrooms: state.chatReducer.chatrooms,
    user_id: state.userReducer.user.id,
});
export default connect(mapStateToProps)(Chat);
