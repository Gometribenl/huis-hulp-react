import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import { PermissionsAndroid } from 'react-native';

export default class CreateChore extends Component {
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

    render() {
        return (
            <View>
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
        );
    };
}

const styles = StyleSheet.create({
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
