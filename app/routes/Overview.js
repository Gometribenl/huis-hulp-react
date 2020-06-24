import React from 'react';
import {Actions} from "react-native-router-flux";
import {
    ScrollView,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import {connect} from 'react-redux';
import AppLayout from "../components/AppLayout";
import {
    Text,
    Image,
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
});

class Overview extends React.Component {
    state = {
        visible: false,
        showCard: {},
    };

    goToCard = (index) => {
        console.log('Action!');
        console.log(this.props.chores[index].user_id);
        this.setState({showCard: this.props.chores[index]}, this.toggleVisibility)
    }

    toggleVisibility = () => {
        this.setState({
            visible: !this.state.visible,
        })
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
                                >

                                    <Card title={chore.name} containerStyle={style}>
                                        <Text numberOfLines={2}>{chore.desc}</Text>
                                        <Text>5km bij jou vandaan</Text>
                                    </Card>

                                </TouchableHighlight>
                            )
                        })
                    }


                    <Overlay isVisible={this.state.visible} fullScreen={true}>
                        <Card title={this.state.showCard.name}>
                            <Text numberOfLines={2}>{this.state.showCard.desc}</Text>
                            <Text>5km bij jou vandaan</Text>
                        </Card>
                    </Overlay>
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
