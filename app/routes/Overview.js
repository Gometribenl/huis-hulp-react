import React from 'react';
import {Actions} from "react-native-router-flux";
import {connect} from 'react-redux';
import AppLayout from "../components/AppLayout";
import Axios from 'axios';
import {Parameters} from "../../global";
import {
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    View,
    Button,
    Image,
    Alert
} from 'react-native';

import {
    Text,
    Input,
    Card,
    Overlay
} from "react-native-elements";


const styles = StyleSheet.create({
    card: {
        borderWidth: 0,
    },
    cardFirstChild: {
        marginTop: 70,
    },
    cardLastChild: {
        marginBottom: 30,
    },
    container: {
        flex: 1,
        padding: 10,
        color: '#363636',
        backgroundColor: '#dec9a9',
    },
    overlay: {
        backgroundColor: 'pink',
    },
    backBtn: {
        marginBottom: 0,
        position: 'absolute',
    },
});

class Overview extends React.Component {
    state = {
        visible: false,
        showCard: {},
    };

    goToCard = (index) => {
        this.setState({showCard: this.props.chores[index]}, this.toggleVisibility)
    }

    toggleVisibility = () => {
        this.setState({
            visible: !this.state.visible,
        })
    }

    makeStyle = () => {
        if (this.props.user_id === this.state.showCard.user_id) {
            return {}
        } else {
            return {display: 'none'}
        }
    }

    editChore = () => {
        console.log('Edit');
    }

    deleteChore = () => {
        Alert.alert(
            'Are you sure you want to delete ' + this.state.showCard.name,
            'You can\'t undo this!',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => this.deleteChoreAxios()
                }
            ],
            { cancelable: false }
        );
    }

    deleteChoreAxios = () => {

        Axios.delete(Parameters.apiDomain + '/chores/chores/' + this.state.showCard.id, {
            headers: {
                'Authorization': 'Bearer ' + this.props.token,
            },
            data: { }
        })
            .then((response) => {
                console.log(response)
                alert('When you log on the next time your chore will be gone');
            }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <AppLayout>

                <ScrollView style={styles.container}>
                    {
                        this.props.chores.map((chore, i) => {
                            let style;

                            if (i === 0) {
                                style = styles.cardFirstChild
                            } else if (i === this.props.chores.length - 1) {
                                style = styles.cardLastChild
                            } else {
                                style = styles.card
                            }

                            return (
                                <TouchableHighlight
                                    activeOpacity={0.6}
                                    underlayColor="#DDDDDD"
                                    onPress={() => this.goToCard(i)}
                                    key={i}
                                    style={style}
                                >

                                    <Card title={chore.name}>
                                        <Text numberOfLines={2}>{chore.desc}</Text>
                                        <Text>5km bij jou vandaan</Text>
                                    </Card>

                                </TouchableHighlight>
                            )
                        })
                    }


                    <Overlay isVisible={this.state.visible} fullScreen={true} overlayStyle={styles.overlay}>

                        <Image
                            source={require('../images/hulp.png')}
                            style={{width: '100%', height: 200}}
                        />

                        <Card title={this.state.showCard.name}>
                            <Text numberOfLines={2}>{this.state.showCard.desc}</Text>
                            <Text>Gemaakt door: {this.state.showCard.user_id}</Text>
                        </Card>

                        <View style={this.makeStyle()}>
                            <Button title={"Edit"} onPress={() => {this.editChore()}}> </Button>
                            <Button title={"Delete"} onPress={() => {this.deleteChore()}}> </Button>
                        </View>
                        <Button onPress={() => this.toggleVisibility()} title={"Go back"}
                                style={styles.backBtn}> </Button>
                    </Overlay>
                </ScrollView>
            </AppLayout>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.userReducer.token,
    chores: state.choresReducer.chores,
    user_id: state.userReducer.user.id
});

export default connect(mapStateToProps)(Overview);
