import React, {Component} from 'react';
import {Button, PermissionsAndroid, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import NavBar from "../components/NavBar";
import axios from 'axios';
import {connect} from "react-redux";
import {Parameters} from '../../global';
import {Actions} from 'react-native-router-flux';

class CreateChore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
        }
    }

    requestCameraAccess() {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                'title': 'Cool Photo App Camera Permission',
                'message': 'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.'
            }
        ).then((granted) => {
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera")
            } else {
                console.log("Camera permission denied")
            }
        })
    };

    saveChore = () => {
        let chore = {
            name: this.state.title,
            description: this.state.description,
            longitude: 52.4893802,
            latitude: 6.5548126,
        }

        axios.post(Parameters.apiDomain + '/chores/chores', chore, {
            headers: {
                'Authorization': 'Bearer ' + this.props.token,
            }
        }).then((response) => {
            Actions.profile();
        }).catch((error) => {
            console.log(error);
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Nieuw verzoek:</Text>
                    <View style={styles.uploadImageButtonContainer}>
                        <Button
                            title={'Upload een afbeelding'}
                            onPress={() => {
                                this.requestCameraAccess()
                            }}
                        />
                    </View>
                    <TextInput id="title" style={styles.titleInput} type="text" placeholder={"Titel"}
                               onChangeText={(value) => {this.setState({title: value})}}/>
                    <TextInput id="description"
                               multiline={true}
                               primart={'blue'}
                               numberOfLines={5}
                               style={styles.descriptionInput}
                               type="text"
                               placeholder={"Omschrijving"}
                               onChangeText={(value) => {this.setState({description: value})}}/>
                    <View style={styles.uploadImageButtonContainer}>
                        <Button
                            title={'Opslaan'}
                            onPress={() => {
                                this.saveChore()
                            }}
                        />
                    </View>
                </View>
                <NavBar style={styles.navBar}/>
            </SafeAreaView>
        );
    };
}

const mapStateToProps = (state) => ({
    token: state.userReducer.token,
});

export default connect(mapStateToProps)(CreateChore);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        height: '92.5%',
    },
    navBar: {
        position: 'absolute',
    },
    title: {
        textAlign: 'center',
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold',
    },
    titleInput: {
        width: '90%',
        height: 50,
        fontSize: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
        alignSelf: 'center',
        position: 'relative',
        marginTop: 15
    },
    descriptionInput: {
        width: '90%',
        height: 100,
        fontSize: 20,
        backgroundColor: '#eee',
        borderRadius: 10,
        marginTop: 10,
        alignSelf: 'center',
        position: 'relative',
    },
    uploadImageButtonContainer: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 8,
    },
});
