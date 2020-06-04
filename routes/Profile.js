import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';

export default class Profile extends React.Component {

    chores = [
        {
            title: 'A very very long title, like a very very long title.',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'title 2',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'title 3',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            title: 'title 4',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
    ];

    constructor(props) {
        super(props);
    }

    state = {
        userData: [],
        id: 1,
    };

    componentDidMount() {
        axios.get('http://10.0.2.2:8000/user/user/' + this.state.id)
            .then(res => {
                const nameList = res.data;
                console.log(nameList.data[0]);
                this.setState({ userData: nameList.data[0]});
            })
            .catch((error) => {
                console.error(error)
            })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View>
                        <Text style={styles.title}>Account gegevens</Text>

                        <Text style={styles.info}>Naam: {this.state.userData.name}</Text>
                        <Text style={styles.info}>Adres: {this.state.userData.address}</Text>
                        <Text style={styles.info}>Woonplaats: {this.state.userData.residence}</Text>

                    </View>
                    <View>
                        <Text style={styles.title}>Verzoeken</Text>
                        {
                            this.chores.map((chore, i) =>
                                <View key={i} style={styles.card}>
                                    <Image
                                        style={styles.helpimg}
                                        source={require('../images/hulp.png')}
                                    />
                                    <View>
                                        <Text style={styles.cardTitle} numberOfLines={2}>{chore.title}</Text>
                                        <Text style={styles.cardDesc} numberOfLines={1}>{chore.desc}</Text>
                                    </View>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
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
    helpimg: {
        width: '25%',
        height: '100%',
        borderColor: 'black',
        marginRight: 10,
        backgroundColor: '#d9d9d9',
    },
});
