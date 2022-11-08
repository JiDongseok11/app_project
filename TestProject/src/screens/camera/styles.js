import {StyleSheet, Dimensions} from 'react-native';

//dynamic arange needed
const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'column',
    },
    sectionTitle: {
        //paddingVertical: 24,
        flex: 2,
        justifyContent: 'center', //center content vertically
        alignItems: 'center', //center content horizontally
        backgroundColor: 'skyblue',
    },
    sectionButtons: {
        flex: 3,
        flexDirection: 'row',
        fontWeight: '400',
        alignItems: 'center',
        paddingVertical: 10,
        backgroundColor: 'yellowgreen',
    },
    text: {
        fontSize: 25,
        color: 'red',
        border: '10px solid red',
    },
    button: {
        flex: 1,
        marginTop: 9,
        marginBottom: 9,
        marginRight: 13,
        marginLeft: 13,
        backgroundColor: 'white',
        borderRadius: 60,
        width: 80,
        height: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 13,
        color: 'black',
        border: '10px solid red',
    },
    cameraContainer: {
        flex: 6
    },
    buttonContainer: {
        flex: 1,
        marginTop: 1,
        marginBottom: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;