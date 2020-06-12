import React, {Component} from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {Button, View} from 'react-native';
import Overview from "../routes/Overview";

export default class ListSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    };

    toggleListSlider = () => {
        if (this.state.open) {
            this._panel.hide();
            this.setState({open: false});
        } else {
            this._panel.show();
            this.setState({open: true});
        }
    }

    render() {
        return (
            <View>
                <View styles={styles.slider} >
                    <SlidingUpPanel ref={c => this._panel = c}>
                        <View style={styles.container}>
                            <Overview/>
                        </View>
                    </SlidingUpPanel>
                </View>
                <Button title='Bekijk lijst' onPress={() => this.toggleListSlider()}/>
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
}