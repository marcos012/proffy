import React from 'react';
import { View, ImageBackground, Text, Image } from 'react-native';

import backIcon from '../../assets/images/icons/back.png';
import logoImg from '../../assets/images/logo.png';

import styles from './styles';
import { RectButton, BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps {
    title: string;
}

const PageHeader:React.FC<PageHeaderProps> = ({ title }) => {

    const navigation = useNavigation();

    function handleGoToLandingPage() {
        navigation.navigate('Landing')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton onPress={handleGoToLandingPage}>
                    <Image source={backIcon} resizeMode={'contain'} />
                </BorderlessButton>
                <Image source={logoImg} resizeMode='contain' />
            </View>

            <Text style={styles.title}>{title}</Text>
        </View>
    );
}

export default PageHeader;