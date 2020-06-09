import React, {Component} from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';

import Home from "./app/routes/Home";
import Profile from "./app/routes/Profile";
import CreateChore from "./app/routes/CreateChore";

import {Provider} from 'react-redux'
import store from './app/store/store'


export default class App extends Component {

    componentDidMount() {
        Actions.home();
    }

    render() {
        return (
            <Provider store={store}>
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
                        <Scene
                            component={CreateChore}
                            key='createChore'
                            title='CreateChore'
                        />
                    </Scene>
                </Router>
            </Provider>
        )
    }
}
