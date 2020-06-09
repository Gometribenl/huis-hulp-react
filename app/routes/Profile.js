import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image, Button} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import NavBar from "../components/NavBar";

export default class Profile extends React.Component {

    state = {
        userData: [],
        chores: [],
        id: 2,
    };

    constructor(props) {
        super(props);

        axios.get('http://10.0.2.2:8000/user/user/' + this.state.id).then(res => {
                const nameList = res.data;
                this.setState({ userData: nameList.data[0]});
            }).catch((error) => {
                console.error(error)
            })

        axios.get('http://10.0.2.2:8000/user/chores/' + this.state.id).then(res => {

                const choreList = res.data;
                this.setState({ chores: choreList.data })
            }).catch((error) => {
            console.error(error)
        });
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.wrapper}>
                    <View>
                        <Text style={styles.title}>Account gegevens</Text>

                        <Text style={styles.info}>Naam: {this.state.userData.name}</Text>
                        <Text style={styles.info}>Adres: {this.state.userData.address}</Text>
                        <Text style={styles.info}>Woonplaats: {this.state.userData.residence}</Text>

                    </View>

                    <Button onPress={() => {Actions.replace('createChore')}} title="Nieuw Verzoek"/>

                    <View>
                        <Text style={styles.title}>Verzoeken</Text>
                        {
                            this.state.chores.map((chore, i) =>
                                <View key={i} style={styles.card}>
                                    <Image
                                        style={styles.helping}
                                        source={require('../images/hulp.png')}
                                    />
                                    <View>
                                        <Text style={styles.cardTitle} numberOfLines={2}>{chore.name}</Text>
                                        <Text style={styles.cardDesc} numberOfLines={1}>{chore.desc}</Text>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
                <NavBar/>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        padding: 20,
    },
    info: {
        borderWidth: 2,
        borderColor: "#20232a",
        borderRadius: 30,
        padding: 15,
        margin: 5,
        fontSize: 20,
        color: '#8d8d8d',
    },
    title: {
        fontSize: 30,
        color: '#666666',
    },
    card: {
        borderColor: 'black',
        borderWidth: 2,
        margin: 15,
        padding: 5,
        flexDirection: 'row',
        flex: 1,
    },
    cardTitle: {
        fontSize: 25,
        maxWidth: '80%',
        color: '#666666',
    },
    cardDesc: {
        fontSize: 20,
        maxWidth: '80%',
        color: '#8d8d8d',
    },
    helping: {
        width: '25%',
        height: '100%',
        borderColor: 'black',
        marginRight: 10,
        backgroundColor: '#d9d9d9',
    },
});
