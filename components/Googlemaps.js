import React from 'react';
import {PermissionsAndroid, StyleSheet, View, Text, Button} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import axios from 'axios';
import MapMarker from "react-native-maps/lib/components/MapMarker";

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

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        flex: 1,
        height: null,
        justifyContent: 'flex-end',
        resizeMode: 'cover',
        width: null,
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default class Googlemaps extends React.Component {

    state = {
        chores: [],
        marginBottom: 1,
        latitude: 52.377956,
        longitude: 4.897070,
        latdelt: 0.015,
        longdelt: 0.0121,
    };

    constructor(props) {
        super(props);
        axios.get('http://192.168.178.28:80/chores/chores')
            .then(res => {
                const choreList = res.data;
                this.setState({chores: choreList.data})
            })
            .catch((error) => {
                console.error(error)
            })
        this.getCurrentPosition()
    }

    getCurrentPosition() {
        Geolocation.getCurrentPosition(
            (position) => {
                // console.log("wokeeey");
                console.log(position);
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({error: error.message}),
            {enableHighAccuracy: false, timeout: 200000, maximumAge: 1000},
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="request permissions" onPress={requestLocationPermission}/>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={[styles.map, {marginBottom: this.state.marginBottom}]}
                    initialRegion={
                        {
                            longitude: this.state.longitude,
                            latitude: this.state.latitude,
                            longitudeDelta: this.state.longdelt,
                            latitudeDelta: this.state.latdelt
                        }
                    }

                    region={{
                        longitude: this.state.longitude,
                        latitude: this.state.latitude,
                        longitudeDelta: this.state.longdelt,
                        latitudeDelta: this.state.latdelt
                    }}

                    showsUserLocation={true}
                    followsUserLocation={true}
                    showsMyLocationButton={true}
                    onRegionChangeComplete={(newRegion) => this.setState({
                        latitude: newRegion.latitude,
                        longitude: newRegion.longitude,
                        latitudeDelta: newRegion.latitudeDelta,
                        longitudeDelta: newRegion.longitudeDelta,

                    })}
                    onMapReady={() => {
                        this.setState({marginBottom: 0})
                    }}
                >
                    {this.state.chores.map((chore, i) =>
                        <Marker key={i} coordinate={{latitude: chore.longitude, longitude: chore.latitude}}
                                title={chore.name}/>
                    )}

                </MapView>
            </View>
        );
    }
}
