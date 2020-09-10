import { Archivo_700Bold } from '@expo-google-fonts/archivo';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8257e5',
        padding: 50,
    },

    topBar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    title: {
        fontFamily: 'Archivo_700Bold',
        color: '#fff',
        fontSize: 24,
        lineHeight: 32,
        maxWidth: 180,
        marginVertical: 40,
    }
});

export default styles;