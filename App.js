import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from "./routes/Home";
import CreateChore from "./routes/CreateChore";
// import Header from "./components/zoekbalk"

export default class App extends Component {
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
                        component={CreateChore}
                        key='createChore'
                        title='CreateChore'
                    />
                </Scene>
            </Router>
        )
    }
}