import React, {Component} from 'react';
import {Router, Scene, Actions} from 'react-native-router-flux';

import Home from "./routes/Home";
import Profile from "./routes/Profile";
import Login from './routes/Login';

export default class App extends Component {

    componentDidMount() {
        Actions.home();
    }

    render() {
        return (
            <Router>
                <Scene key='root'>
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
                    <Scene
                        component={Login}
                        key='login'
                        title='Login'
                    />
                </Scene>
            </Router>
        )
    }
}
