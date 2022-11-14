/*If you need new component, use this format*/
import React from 'react';
import { useRef } from 'react';
import { View, Text, Pressable, StyleSheet, Linking } from 'react-native';

import { Camera, useCameraDevices } from 'react-native-vision-camera';


const CameraComp = (props) => {

    const devices = useCameraDevices();
    const device = devices.back;

    const camera = useRef(null)
    const takePhotoOptions = {
        qualityPrioritization: 'speed',
        flash: 'off'
    }; 

    // const camera = useRef(null);

    React.useEffect( () => {
        requestCameraPermission();
    }, []);
    
    const requestCameraPermission = React.useCallback(async () => {
        const Permission = await Camera.requestCameraPermission();
        if (Permission === 'denied') await Linking.openSettings()
    }, []);

    const takePhoto = async () => {
        try{
            if(Camera.current == null) throw new Error('Camera Ref is Null');
            const photo = await Camera.current.takePhoto(takePhotoOptions);
            console.log(photo.path);
        } catch(error) {
            console.log(error);
        }
    }

    if (device == null){
        return <View/>
    } 
    else{
        return(
            <Camera
                ref = { camera }
                style = {{flex: 1}}
                device = {device}
                isActive = {true}
                photo = {true}
                enableZoomGestures
            />
        )
    }
}

export default CameraComp;