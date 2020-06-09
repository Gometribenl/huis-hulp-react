import React from 'react';
import {PermissionsAndroid, StyleSheet, View, Text, Button} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

const requestLocationPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
                title: "Helpende Handjes Locatie Toegang",
                message:
                    "Helpende Handjes heeft toegang nodig tot je locatie",
                buttonNeutral: "Vraag me later",
                buttonNegative: "Annuleer",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Je kan de locatietoegang gebruiken");
        } else {
            console.log("Locatietoegang is geweigerd");
        }
    } catch (err) {
        console.warn(err);
    }
};

export default class Googlemaps extends React.Component {
    state = {
        coordinate: {
            latitude: 37.78825,
            longitude: -122.4324,
        },
        marginBottom: 1
    }

    componentDidMount() {
        requestLocationPermission()
        Geolocation.getCurrentPosition(info => console.log(info));
    }
    render() {
        return (
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={[styles.map, {marginBottom: this.state.marginBottom}]}
                    initialRegion={{
                        latitude: 35.788235,
                        longitude: -120.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}

                    showsUserLocation={true}
                    showsMyLocationButton={true}
                    onRegionChangeComplete={(region) => this.setState({
                        coordinate: region
                    })}
                    onMapReady={() => {
                        this.setState({marginBottom: 0})
                    }}>
                    <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}/>
                </MapView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: null,
        width: null,
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        resizeMode: 'cover',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});
