/*If you need new component, use this format*/
import React from 'react';
import { View, Text, Pressable, StyleSheet, Linking } from 'react-native';

import { Camera, useCameraDevices } from 'react-native-vision-camera';

const CameraComp = (props) => {

    const devices = useCameraDevices();
    const device = devices.back;

    React.useEffect( () => {
        requestCameraPermission();
    }, [])
    
    const requestCameraPermission = React.useCallback(async () => {
        const Permission = await Camera.requestCameraPermission();
        if (Permission === 'denied') await Linking.openSettings()
    }, [])

    if (device == null){
        return <View/>
    } 
    else{
        return(
            <Camera
                style = {{flex: 1}}
                device = {device}
                isActive = {true}
                enableZoomGestures
            />
        )
    }
}
export default CameraComp;