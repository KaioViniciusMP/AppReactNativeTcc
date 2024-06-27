import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker';
import { AuthStackParamList } from '../../Routes/auth.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export default function PageEntradaFinanceiraExtra() {
    const [selectedValue, setSelectedValue] = useState("Escolha o remetente");

    const navigation = useNavigation<NavigationProp>();

    const voltar = () => {
        navigation.goBack();
    }

    const pickerItems = [
        { label: "Escolha o remetente", value: "Escolha o remetente" },
        { label: "Lazer", value: "Lazer" },
        { label: "Compras", value: "Compras" },
        { label: "Saúde", value: "Saúde" },
        { label: "Transporte", value: "Transporte" },
        { label: "Alimentação", value: "Alimentação" },
        { label: "Investimentos", value: "Investimentos" },
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, marginBottom: 20 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text onPress={voltar} style={{ color: '#fff', fontSize: 15, marginLeft:5 }}>Voltar</Text>
            </View>

            <View style={styles.containerTwo}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 40, marginLeft: 25 }}>ENTRADA EXTRA</Text>
                </View>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: '#939393', textAlign: 'center', marginLeft: 25, marginBottom: 45, }}>DEFINIÇÃO DE ENTRADA FINANCEIRA EXTRA</Text>

                <View style={{ display: 'flex', width: '100%' }}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "semibold" }}>Tipo de entrada:</Text>
                        <View style={{ marginBottom: 15, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '80%', borderRadius: 5, height: 40, borderWidth: 2, borderColor: '#7F79AB' }}>
                            <Picker
                                style={{ width: '80%', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 2, borderColor: '#7F79AB' }}
                                selectedValue={selectedValue}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>

                                {pickerItems.map((item, index) => (
                                    <Picker.Item key={index} label={item.label} value={item.value} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "semibold" }}>Defina o valor:</Text>
                        <TextInput style={{ marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 2, borderColor: '#7F79AB' }} placeholder='Defina o valor recebido...' />
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "semibold" }}>Descrição:</Text>
                        <TextInput style={{ marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 2, borderColor: '#7F79AB' }} placeholder='Digite a descrição...' />
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