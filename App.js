import React, {Component} from 'react';
import Router from './app/components/Router';
import {Provider} from 'react-redux'
import store from "./app/store/store";

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router/>
            </Provider>
        )
    }
}
