/*If you need new component, use this format*/
import React from 'react';
import { View, Text, Pressable } from 'react-native';

import styles from './styles';

const TestComp = (props) => {
    const input = props.input

    return(
    <View style={styles.container}>
        <Text style={styles.text}>Component Used, Your Input: {input}</Text>
    </View>
    )
}
export default TestComp;