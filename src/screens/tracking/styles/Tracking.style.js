import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
        position:'relative'
    },
    map:{
        ...StyleSheet.absoluteFillObject
    },
});

export default styles;