import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';

export default function PageAdicionarContaCorrente() {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40 }}>
                <Text style={{ color: '#fff' }}>Voltar</Text>
                <Text style={{ color: '#fff', marginLeft: 10, fontWeight: "bold", marginBottom: 60 }}>Ola Kaio</Text>
            </View>

            <View style={styles.containerTwo}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 40, marginLeft: 25 }}>CONTA CORRENTE</Text>
                </View>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: '#939393', textAlign: 'center', marginLeft: 25, marginBottom: 45, }}>CRIAÇÃO DE NOVAS CONTAS CORRENTES</Text>

                <View style={{ display: 'flex', width: '100%' }}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "semibold" }}>Agencia:</Text>
                        <TextInput style={{ marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 2, borderColor: '#7F79AB' }} placeholder='Defina o valor recebido...' />
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "semibold" }}>Saldo:</Text>
                        <TextInput style={{ marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 2, borderColor: '#7F79AB' }} placeholder='Digite a descrição...' />
                    </View>

                    <View style={{ marginTop: 40,justifyContent: 'center', display: 'flex', width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", width: '50%', borderRadius: 8, height: 50, backgroundColor: '#7F79AB' }}>
                            <Text style={{ color: '#FFF', fontWeight: "bold" }}>Criar</Text>
                        </TouchableOpacity>
                        <Text style={{ color: '#7F79AB', fontWeight: "bold" }}>Cancelar operação</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
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
        height: 600,
        alignItems: 'center',
    }
});