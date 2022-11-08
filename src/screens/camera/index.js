import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

import CameraComp from '../../components/camera';

import styles from './styles';

const CameraScreen = () => {
    return(
        <View style={styles.container}>
            <View style={styles.cameraContainer}>
                <CameraComp/>
            </View>
            <View style={styles.buttonContainer}>
                <Pressable onPress={() => onPressTakePicHandler()} style={styles.button}>
                    <Text style={styles.buttonText}>Take Picture</Text>    
                </Pressable>
            </View>
        </View>
    )
}

function onPressTakePicHandler() {
    console.log('Picture taken');
}

export default CameraScreen