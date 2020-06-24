import React from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
import AppLayout from "../components/AppLayout";
import NavBar from "../components/NavBar";
import {connect} from "react-redux";

class Profile extends React.Component {
    render() {
        return (
            <AppLayout>
                <ScrollView style={styles.container}>
                    <View>
                        <Text style={styles.title}>Account gegevens</Text>

                        <Text style={styles.info}>Naam: {this.props.name}</Text>
                        <Text style={styles.info}>Adres: {this.props.address}</Text>
                        <Text style={styles.info}>Woonplaats: {this.props.residence}</Text>

                    </View>

                    <Button onPress={() => {
                        Actions.replace('createChore')
                    }} title="Nieuw Verzoek"/>

                    <View>
                        <Text style={styles.title}>Verzoeken</Text>
                        {
                            this.props.personalChores.map((chore, i) =>
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
            </AppLayout>
        );
    }
}

const mapStateToProps = (state) => ({
    name: state.userReducer.user.name,
    address: state.userReducer.user.address,
    residence: state.userReducer.user.residence,
    personalChores: state.choresReducer.personalChores,
});

export default connect(mapStateToProps)(Profile);

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
