/*If you need new component, use this format*/
import React from 'react';
import axios from 'axios';
import useEffect from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

import styles from './styles';

const myUri = 'https:localhost:8081'
const Uri = '//dapi.kakao.com/v2/maps/sdk.js?appkey=c33563efa090be5ef59993bb48e91bc2'
const testUri = 'https://apis.map.kakao.com/'
const API_KEY = 'c33563efa090be5ef59993bb48e91bc2';

const html = '<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=c33563efa090be5ef59993bb48e91bc2"></script>'

// const { kakao } = window;

const MapAPI = (props) => {
    return(
        <WebView
            //source={{ uri: myUri }}
            style={styles.webview}
            source={{ html: html }}
        />
    )
}

export default MapAPI;