import React, {Component} from 'react';
import {Button, PermissionsAndroid, SafeAreaView, StyleSheet, Text, TextInput, View} from 'react-native';
import NavBar from "../components/NavBar";
import axios from 'axios';

export default class CreateChore extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chore: {
                title: '',
                description: '',
                longitude: 52.4893802,
                latitude: 6.5548126,
            }
        }
    }
    async requestCameraAccess() {
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                'title': 'Cool Photo App Camera Permission',
                'message': 'Cool Photo App needs access to your camera ' +
                    'so you can take awesome pictures.'
            }
        ).then((granted) => {
            console.log(granted);
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the camera")
            } else {
                console.log("Camera permission denied")
            }
        })
    };

    saveChore = () => {
        axios.post('http://127.0.0.1:8000/chores', this.state.chore).then(() => {

        }).catch((error) => {
            console.error(error)
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
                            color={"lightblue"}
                            onPress={this.requestCameraAccess}
                        />
                    </View>
                    <TextInput id="title" style={styles.titleInput} type="text" placeholder={"Titel"}/>
                    <TextInput id="description"
                               multiline={true}
                               primart={'blue'}
                               numberOfLines={5}
                               style={styles.descriptionInput}
                               type="text"
                               placeholder={"Omschrijving"}/>
                </View>
                <NavBar style={styles.navBar}/>
            </SafeAreaView>
        );
    };
}

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
