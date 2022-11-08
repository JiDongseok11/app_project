/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {
  StatusBar,
  Text,
  View,
  Pressable,
} from 'react-native';

// import { Camera } from 'react-native-camera';

import MapScreen from './src/screens/map';
import TestComp from './src/components/test';
import TestScreen from './src/screens/testscreen';
import Router from './src/navigations/router';
import MapAPI from './src/components/kakaomap';
import CameraComp from './src/components/camera';

const App: () => Node = () => {
  return(
    <>
      <StatusBar barStyle="dark-content" />
      <Router/>
      {/*<MapScreen/>*/}
      {/* <MapAPI/> */}
      {/* <CameraComp/> */}
    </>
  );
}

export default App;
