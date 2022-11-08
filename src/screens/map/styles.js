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
    sectionMap: {
        flex: 4,
        paddingVertical: 244,
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'yellow',
    },
    text: {
        fontSize: 25,
        color: 'red',
        border: '10px solid red',
    },
    searchButtonText:{
        fontSize: 10,
        color:'grey',
    },
    button: {
        flex: 1,
        marginTop: 1,
        marginBottom: 1,
        marginRight: 13,
        marginLeft: 13,
        backgroundColor: 'white',
        borderRadius: 30,
        width: 5,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchButton: {
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 20,
        height: 30,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 20,
        zIndex: 100, // dept of content
    }
  });

  export default styles;