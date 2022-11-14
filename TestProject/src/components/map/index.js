/*If you need new component, use this format*/
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import styles from './styles';

const API_KEY = 'AIzaSyCzD2Aw0K6nKNZggqP20yr5zJRhdKRxDQE';

// const { kakao } = window;

class Map extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            isMapReady: false,
            initialPosition: {
                latitude: 37.78825, 
                longitude: -122.4324, 
                latitudeDelta: 0.0922, 
                longitudeDelta: 0.0421,
            },

            markerPosition: {
                longitude: 0,
                latitude: 0,
            }
        }
    }

    onMapLayout = () => {
        console.log('Map ready');
        this.setState({ isMapReady: true });
    }

    render() {
        return (
            <>
                <MapView 
                style={styles.MapView} 
                initialRegion={this.state.initialPosition}
                onMapReady={this.onMapLayout}
                provider={PROVIDER_GOOGLE}/>
            </>
        )
    }
}

export default Map;