import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f1f1f1',
        minHeight:100,
        height: '100%',
        alignItems:'flex-end',
        justifyContent: 'flex-end',
    },
    text: {
        color:'#202020',
        fontSize: 100,
        fontWeight: '300',
        margin:20,
        textAlign: 'right'
    }
});

export default styles;