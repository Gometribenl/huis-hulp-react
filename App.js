import React, {Component} from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import Home from "./app/routes/Home";
import Profile from "./app/routes/Profile";
import Overview from "./app/routes/Overview";
import Login from "./app/routes/Login";
import Register from "./app/routes/Registreren";
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
                            component={Login}
                            key='login'
                            title='Login'
                        />
                        <Scene
                            component={Register}
                            key='register'
                            title='Register'
                        />
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
                        <Scene
                            component={Overview}
                            key='overview'
                            title='Overview'
                        />
                    </Scene>
                </Router>
            </Provider>
        )
    }
}
