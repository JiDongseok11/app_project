import React, { useRef, useState, useEffect } from 'react';
import { View, Text, Pressable, StyleSheet, Button, Image, AsyncStorage} from 'react-native';

// import CameraComp, { takePhoto } from '../../components/camera';

import { Camera, useCameraDevices } from 'react-native-vision-camera';

import styles from './styles';

const CameraScreen = (props) => {
    const devices = useCameraDevices()
    const device = devices.back
    const camera = useRef(null)
    const [photo, setPhoto] = useState();
  
    const takePic = async () => {
        console.log('picture taken');
        const newPhoto = await camera.current.takeSnapshot({
            flash: 'off',
            qualityPrioritization: "speed",
        });
        console.log(newPhoto);
        setPhoto(newPhoto);
        console.log(photo);
        console.log(JSON.stringify(newPhoto)); //JSON strings for taken photo

        AsyncStorage.setItem('newPhoto', JSON.stringify(newPhoto));
    }

    // if(photo) {
    //     let savePhoto = () => {
    //         console.log('photo saved');
    //         // console.log(photo)
    //     };

    //     return (
    //         <View>
    //             <Image source={{uri: "data:image/jpg.base64,"+photo.base64}}/>
    //             <Button title="Save" onPress={savePhoto}/>
    //             <Button title="Delete" onPress={() => setPhoto(undefined)}/>
    //         </View>
    //     );
    // }

    React.useEffect( () => {
        requestCameraPermission();
    }, []);
    
    const requestCameraPermission = React.useCallback(async () => {
        const Permission = await Camera.requestCameraPermission();
        if (Permission === 'denied') await Linking.openSettings()
    }, []);
    
    if (device == null) return <View><Text>Loading</Text></View>
    return (
        <View style={{flex: 1}}>
            <Camera
            ref={camera}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
            photo={true}
            />
            <View style={styles.buttonContainer}>
                <Button title='take pic' onPress={takePic}/>
            </View>
        </View>
  
    ) 
};

export default CameraScreen