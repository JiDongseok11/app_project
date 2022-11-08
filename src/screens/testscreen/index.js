/*If you need new screen, use this format*/
import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const TestScreen = () => {
    return(
    <View style={styles.container}>
        <Text style={styles.text}>This is Test Screen</Text>
    </View>
    )
}
export default TestScreen;