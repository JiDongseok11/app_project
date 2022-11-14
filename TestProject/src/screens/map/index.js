import React from 'react';
import { View, Text, Pressable, AsyncStorage } from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const MapScreen = () => {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <View style={styles.sectionMap}>
                <Pressable onPress={() => onPressSearchHandler(navigation)} style={styles.searchButton}>
                    <Text style={styles.searchButtonText}>Type to Search</Text>
                </Pressable>
                {/*Map*/}
                <Text style={styles.text}>Map</Text>
            </View>
            <View style={styles.sectionButtons}>
                <Pressable onPress={() => onPressSettingHandler(navigation)} style={styles.button}>
                    <Text>Settings</Text>
                </Pressable>
                <Pressable onPress={() => onPressCameraHandler(navigation)} style={styles.button}>
                    <Text>Camera</Text>
                </Pressable>
                <Pressable onPress={() => onPressGalleryHandler(navigation)} style={styles.button}>
                    <Text>Gallery</Text>
                </Pressable>
            </View>
        </View>
    )
}

function onPressCameraHandler(navigation) {
    console.log('Camera Clicked');
    navigation.navigate('Camera');
  }
  
function onPressSettingHandler(navigation) {
    console.log('Setting Clicked');
    navigation.navigate('Test');
  }
  
function onPressGalleryHandler(navigation) {
    console.log('Gallery Clicked');
    navigation.navigate('Test');
  }

function onPressSearchHandler(navigation) {
    console.log('Search Clicked');
    navigation.navigate('Test');
  }

export default MapScreen;