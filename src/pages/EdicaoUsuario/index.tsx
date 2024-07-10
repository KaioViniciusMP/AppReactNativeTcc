import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react'
import { AuthStackParamList } from '../../Routes/auth.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export default function EditarUsuario() {
    const navigation = useNavigation<NavigationProp>();

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity onPress={voltar} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, paddingBottom: 100 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.containerTwo}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 40 }}>EDITAR</Text>
                </View>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: '#939393', textAlign: 'center', marginBottom: 45, }}>EDITAR DADOS DO USUARIO</Text>

                <View style={{ display: 'flex', width: '100%' }}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "semibold" }}>Nome:</Text>
                        <TextInput style={{ marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 1.5, borderColor: '#7F79AB' }} placeholder='Defina o valor recebido...' />
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "semibold" }}>Usuario:</Text>
                        <TextInput style={{ marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 1.5, borderColor: '#7F79AB' }} placeholder='Defina o valor recebido...' />
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "semibold" }}>Senha:</Text>
                        <TextInput style={{ marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 1.5, borderColor: '#7F79AB' }} placeholder='Digite a descrição...' />
                    </View>

                    <View style={{ marginTop: 40, justifyContent: 'center', display: 'flex', width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", width: '50%', borderRadius: 8, height: 50, backgroundColor: '#7F79AB' }}>
                            <Text style={{ color: '#FFF', fontWeight: "bold" }}>Definir</Text>
                        </TouchableOpacity>
                        <Text onPress={voltar} style={{ color: '#7F79AB', fontWeight: "bold", marginTop: 10 }}>Cancelar operação</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        justifyContent: 'flex-end',
        backgroundColor: '#5D5C96',
    },
    containerTwo: {
        flexGrow: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        height: 700,
        paddingBottom: 100
    }
});