import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MapScreen from '../screens/map';
import TestScreen from '../screens/testscreen';
import CameraScreen from '../screens/camera'

import {Text, View} from 'react-native';

const Stack = createStackNavigator(); // variable for stacking screens

const Router = () => {
    return(/*<Text>test</Text>*/
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Main Map"}
                    component={MapScreen}
                />
                <Stack.Screen
                    name={"Test"}
                    component={TestScreen}
                />
                <Stack.Screen
                    name = {"Camera"}
                    component = {CameraScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;