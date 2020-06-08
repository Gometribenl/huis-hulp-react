import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';

import Home from "./routes/Home";
import Profile from "./routes/Profile";

export default class App extends Component {

    componentDidMount() {
        Actions.home();
    }

    render() {
        return (
            <Router>
                <Scene key='root' hideNavBar={true}>
                    <Scene
                        component={Home}
                        key='home'
                        title='Home'
                    />
                    <Scene
                        component={Profile}
                        key='profile'
                        title='Profile'
                    />
                </Scene>
            </Router>
        )
    }
}
