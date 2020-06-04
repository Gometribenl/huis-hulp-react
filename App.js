import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from "./routes/Home";
// import Header from "./components/zoekbalk"

export default class App extends Component {
    render() {
        return (
            <Router>
                <Scene key='root'>
                    <Scene
                        component={Home}
                        key='home'
                        title='Home'
                    />
                </Scene>
            </Router>
        )
    }
}