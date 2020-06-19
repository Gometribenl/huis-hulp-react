import React from 'react';
import axios from 'axios';
import {Actions} from "react-native-router-flux";
import Navbar from '../components/Navbar';
import Zoekbalk from "../components/Zoekbalk";

import {
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import {connect} from 'react-redux';
import AppLayout from "../components/AppLayout";
import {Text, Image, Input, Card} from "react-native-elements";

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
});

class Overview extends React.Component {
    state = {
        chores: [],
    };

    goToCard = (index) => {
        console.log('Action!');
        console.log(this.props.chores[index]);
    }

    render() {
        return (
            <AppLayout>
                <Zoekbalk/>

                <ScrollView style={styles.container}>
                    {
                        this.state.chores.map((chore, i) => {
                            let style;

                            if(i === 0) {style = styles.cardFirstChild}
                            else if(i === this.state.chores.length - 1) {style = styles.cardLastChild}
                            else {style = styles.card}

                            return (
                                <Card title={chore.name} key={i} containerStyle={style}>
                                    <Text numberOfLines={2}>{chore.desc}</Text>
                                    <Text>5km bij jou vandaan</Text>
                                </Card>
                            )
                        })
                    }
                </ScrollView>
            </AppLayout>
        );
    }
}

const mapStateToProps = (state) => ({
    token: state.userReducer.token,
    chores: state.choresReducer.chores,
});

export default connect(mapStateToProps)(Overview);
