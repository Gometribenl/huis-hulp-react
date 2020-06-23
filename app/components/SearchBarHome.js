import React from 'react';
import {StyleSheet, View, TextInput, ScrollView} from 'react-native';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';

export default class SearchBarHome extends React.Component {
    render() {
        return (
            <GoogleAutoComplete apiKey="AIzaSyDu_yR8t3P3QyuUiq5kj9UWbkDsPw5j8LA" debounce={300}>
                {({ inputValue, handleTextChange, locationResults, fetchDetails }) => (
                    <React.Fragment>
                        <View style={styles.container}>
                        <TextInput
                            onChangeText={handleTextChange}
                            placeholder="Zoeken..."
                        />
                        </View>
                        <ScrollView style={{ maxHeight: 100 }}>
                            {locationResults.map((el, i) => (
                                <LocationItem
                                    {...el}
                                    fetchDetails={fetchDetails}
                                    key={String(i)}
                                />
                            ))}
                        </ScrollView>
                    </React.Fragment>
                )}
            </GoogleAutoComplete>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        borderRadius: 50,
        left: 6,
        top: 8,
        opacity: 0.8,
        backgroundColor: '#FFFFFF',
        padding: 0,
    },
});
