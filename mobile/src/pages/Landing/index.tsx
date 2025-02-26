import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { RectButton } from 'react-native-gesture-handler';

import landingImg from '../../assets//images/landing.png';
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

import styles from './styles';

export default function Langing() {
    const navigation = useNavigation();

    function handleNavigationToGiveClassesPage() {
        navigation.navigate('GiveClasses');
    }

    function handleNavigationToStudyPages() {
        navigation.navigate('Study');
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />

            <Text style={styles.title} >
                Seja bem-vindo, {'\n'}
                <Text style={styles.titleBold}>O que deseja fazer?</Text>
            </Text>

            <View style={styles.buttonsContainer}>
                <RectButton onPress={handleNavigationToStudyPages} style={[styles.button, styles.buttonPrimary]}>
                    <Image source={studyIcon} />

                    <Text>Estudar</Text>
                </RectButton>

                <RectButton onPress={handleNavigationToGiveClassesPage} style={[styles.button, styles.buttonSecondary]}>
                    <Image source={giveClassesIcon} />

                    <Text>Dar aulas</Text>
                </RectButton>
            </View>

            <Text style={styles.totalConnections}>
                Total de 200 conexões já realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    );
}