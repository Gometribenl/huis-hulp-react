import React from 'react';
import {View, Text, StyleSheet, ScrollView, Image, TextInput, TouchableHighlight} from 'react-native';
import axios from 'axios';
import {Actions} from "react-native-router-flux";
import NavBar from '../components/NavBar';
import AppLayout from "../components/AppLayout";

export default class Overview extends React.Component {
    state = {
        chores: [],
    };

    constructor(props) {
        super(props);

        axios.get('http://10.0.2.2:8000/chores/chores')
            .then(res => {
                const choreList = res.data;
                this.setState({chores: choreList.data})
            })
            .catch((error) => {
                console.error(error)
            });
    }

    goToCard = (index) => {
        console.log('Action!');
        console.log(this.state.chores[index]);
    }

    render() {
        return (
            <AppLayout>
                <ScrollView style={styles.container}>
                    <View style={styles.searchBar}>
                        <Text style={styles.label}>Sorteren op: </Text>
                        <TextInput
                            style={styles.searchInput}
                            placeholder="....."
                            id="Search"
                        />
                    </View>
                    {
                        this.state.chores.map((chore, i) =>
                            <TouchableHighlight key={i} onPress={() => this.goToCard(i)} underlayColor={'#c6c6c6'}>
                                <View style={styles.card}>
                                    <Image
                                        style={styles.helpimg}
                                        source={require('../images/hulp.png')}
                                    />

                                    <View>
                                        <Text style={styles.cardTitle} numberOfLines={2}>{chore.name}</Text>
                                        <Text style={styles.cardDesc} numberOfLines={2}>{chore.desc}</Text>
                                        <Text style={styles.cardCaption}>5km bij jou vandaan</Text>
                                    </View>
                                </View>
                            </TouchableHighlight>
                        )
                    }
                </ScrollView>
                <NavBar/>
            </AppLayout>
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
        marginVertical: 15,
        marginHorizontal: 0,
        flexDirection: 'row',
        flex: 1,
        height: 150,
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
    cardCaption: {
        color: '#8d8d8d',
        fontSize: 16,
        position: 'absolute',
        right: 30,
        bottom: 0,
    },
    helpimg: {
        width: '25%',
        height: 'auto',
        marginRight: 10,
        backgroundColor: '#d9d9d9',
    },
    searchBar: {},
    label: {
        fontSize: 25,
    },
    searchInput: {
        borderColor: '#666666',
        borderWidth: 2,
        height: 40,
        borderRadius: 30,
        backgroundColor: '#f3f3f3',
    },
});
