import React from 'react';
import { View, ImageBackground, Text } from 'react-native';

import giveClassesImg from '../../assets/images/give-classes-background.png';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

function GiveClasses() {

    const navigation = useNavigation();

    function handleNavigationToLandingPage() {
        navigation.navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={giveClassesImg} style={styles.content}>
                <Text style={styles.title}>Quer ser um Proffy?</Text>
                <Text style={styles.description}>Para começar, você precisa se cadastrar como professor na nossa plataforma web.</Text>

            </ImageBackground>

            <RectButton onPress={handleNavigationToLandingPage} style={styles.okButton}>
                <Text style={styles.okButtonText}>Tudo bem</Text>
            </RectButton>
        </View>
    );
}

export default GiveClasses;