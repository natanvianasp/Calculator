
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 80,
        borderRadius: 360,
        margin: 10,
        backgroundColor: '#FFF'
    },
    text: {
        fontWeight: '400',
        fontSize: 24,
    },
    btnNormal: {
        opacity: 1,
    },
    btnPress: {
        opacity: 0.6,
    },

    isRed: {
        backgroundColor: '#F37878'

    },
    isGray: {
        backgroundColor: "#505050"
    },
    isSelected: {
        backgroundColor: "#06283D"
    },
    textSelected: {
        color:'#FFF',
    },
    textLight: {
        color: '#FFF',
    },
    textDark: {
        color: '#202020'
    }

})


export default styles;