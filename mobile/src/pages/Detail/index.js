import React from 'react';
import { View, Image, Text, TouchableOpacity, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons';

import * as MailCompose from 'expo-mail-composer';

import { useNavigation, useRoute } from '@react-navigation/native';


import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail() {

    const route = useRoute();
    const navigation = useNavigation()

    const incident = route.params.incident;
    const message = `Olá ${incident.name}, estou entrando em contato, pois, gostaria de ajudar o caso: "${incident.title}", com o valor de "${Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(incident.value)}"`;

    function navigationBack() {
        navigation.goBack()
    };

    function sendMail() {
        MailCompose.composeAsync({
            subject: `Herói do caso: ${incident.title}`,
            recipients: [incident.email],
            body: message,
        })
    };

    function sendWhatsApp() {
        Linking.openURL(`whatsapp://send?phone=${incident.whatsapp}&text=${message}`);
    };



    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={logoImg} />

                <TouchableOpacity onPress={navigationBack}>
                    <Feather name="arrow-left" size={28} color="#e82041" />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={styles.incidentProperty, {marginTop: 0}}>ONG:</Text>
                <Text style={styles.incidentValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidentProperty}>CASO:</Text>
                <Text style={styles.incidentValue}>{incident.description}</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(incident.value)}
                        </Text>

            </View>

                <View style={styles.containerBox}>
                    <Text style={styles.heroTitle}>Salve o dia!</Text>
                    <Text style={styles.heroTitle}>Seja um herói desse caso.</Text>

                    <Text style={styles.heroDescription}>Entre em contato conosco:</Text>

                    <View style={styles.actions}>
                        <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
                            <Text style={styles.actionText}>WhatsApp</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.action} onPress={sendMail}>
                            <Text style={styles.actionText}>E-mail</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
    );

}