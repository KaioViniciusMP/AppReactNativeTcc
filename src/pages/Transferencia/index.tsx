import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { AuthStackParamList } from '../../Routes/auth.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export default function Transferencia() {
    const navigation = useNavigation<NavigationProp>();

    const voltar = () => {
        navigation.pop();
    }

    return(
        <>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity onPress={voltar} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, marginBottom: 20 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft:5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.containerTwo}>
                <Text style={{ fontWeight: "bold", marginBottom: 30, marginTop: 40, marginLeft: 25 }}>Utilizar R$ em qual modalidade?</Text>
                
            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        justifyContent: 'flex-end',
        backgroundColor: '#5D5C96', // Cor de fundo do ScrollView
    },
    containerTwo: {
        flexGrow: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        height: 600
    }
});