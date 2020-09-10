import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import giveClassesImg from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PageHeader from '../../components/PageHeader';

function Favorites() {

    const navigation = useNavigation();

    function handleNavigationToLandingPage() {
        navigation.navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <PageHeader title='Meus proffys favoritos' />
        </View>
    );
}

export default Favorites;