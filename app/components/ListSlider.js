import React, {Component} from 'react';
import SlidingUpPanel from 'rn-sliding-up-panel';
import {Button, Text, View} from 'react-native';


const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

export default class ListSlider extends Component {

    render() {
        return (
        <View>
            <Button title='Bekijk lijst' onPress={() => this._panel.show()} />
            <SlidingUpPanel ref={c => this._panel = c}>
                <View style={styles.container}>
                    <Text>hier komt de lijst.</Text>
                    <Button title='Hide' onPress={() => this._panel.hide()} />
                </View>
            </SlidingUpPanel>
        </View>
        )
    }


}
