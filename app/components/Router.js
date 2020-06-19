import React, {Component} from 'react';
import {Actions, Router, Scene} from 'react-native-router-flux';
import Home from "../routes/Home";
import Profile from "../routes/Profile";
import Overview from "../routes/Overview";
import Login from "../routes/Login";
import Register from "../routes/Register";
import CreateChore from "../routes/CreateChore";
import {connect} from 'react-redux'

class App extends Component {
    componentDidMount() {
        this.props.token ? Actions.home() : Actions.login();
    }

    render() {
        return (
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
        )
    }
}

const mapStateToProps = (state) => ({
    token: state.userReducer.token,
});

export default connect(mapStateToProps)(App);
