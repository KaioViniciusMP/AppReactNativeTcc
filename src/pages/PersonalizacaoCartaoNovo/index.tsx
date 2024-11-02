import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, FlatList, TextInput } from 'react-native'
import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useContext } from 'react';
import { AuthStackParamList } from '../../Routes/auth.routes';
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { AuthContext } from "../../context";
import { Picker } from '@react-native-picker/picker';
import { Agencia } from '../Transferencia';
import DatePicker from 'react-native-date-picker'

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
type NavigationAppProp = NativeStackNavigationProp<AppStackParamList>;
type AddCartaoRouteProp = RouteProp<AppStackParamList, 'AddCartao'>

export default function PersonalizacaoCartaoNovo() {
    const { user } = useContext(AuthContext)
    const navigation = useNavigation<NavigationProp>();
    const coresAleatoriasCartoes = ['#313131', '#BA00B2', '#00BB07', '#B10000', '#F0B10D', '#FF9900', '#FF9900', `#6A0DAD`];
    const [selectedValueFormaPagamento, setSelectedValuePagamento] = useState("");
    const [lstAgenciasDisponiveis, setLstAgenciasDisponiveis] = useState<Agencia[]>([]);
    const [selectedValueAgencia, setSelectedValueAgencia] = useState("");
    const [dataValidade, setDataValidade] = useState(() => {
        const today = new Date();
        today.setFullYear(today.getFullYear() + 1);
        return today;
    }); 
    const [bandeiraCartao, setBandeiraCartao] = useState("");
    const [cvv, setCvv] = useState("");
    const [limite, setLimite] = useState("");

    const gerarCorAleatoria = () => {
        const indiceAleatorio = Math.floor(Math.random() * coresAleatoriasCartoes.length);
        return coresAleatoriasCartoes[indiceAleatorio];
    };

    const voltar = () => {
        navigation.goBack();
    }

    const formaPagamento = [
        { label: "Debito", value: "debito" },
        { label: "Credito", value: "credito" }
    ]

    useEffect(() => {
        fetchContasPorUsuario()
    });

    const fetchContasPorUsuario = () => {
        api.post(`/ContaCorrente/BuscarContasCorrentesExistentesPorUsuario/${user.usuarioCodigo}`)
            .then(response => {
                if (response.data && response.data.length > 0) {
                    setLstAgenciasDisponiveis(response.data);
                }
            })
            .catch(err => console.error("ops! ocorreu um erro: " + err));
    }

    const CriarCartao = () => {
        const request = {
            contaCorrenteCodigo: selectedValueAgencia,
            forma_pagamento: selectedValueFormaPagamento,
            dataValidade: dataValidade,
            bandeiraCartao: bandeiraCartao,
            CVV: cvv,
            limite: parseFloat(limite)
        }

        api.post(`/Cartao`, request)
            .then(response => {
                const { status, message, objInfo } = response.data;

                if (status) {
                    voltar()
                    Alert.alert('Sucesso', message, [
                        { text: 'Fechar', onPress: () => console.log('Cartão Criado:', objInfo) }
                    ]);
                } else {
                    Alert.alert('Erro de Cadastro', message);
                }
            })
            .catch(err => console.error("ops! ocorreu um erro: " + err));
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity onPress={voltar} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, paddingBottom: 50 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.containerTwo}>
                <View >
                    <ScrollView horizontal={true} contentContainerStyle={{ width: 'auto', marginLeft: '13%' }} style={{
                        marginTop: 55,
                        marginBottom: 30,
                        display: 'flex',
                        flexDirection: 'row',
                        backgroundColor: 'transparent',
                        zIndex: 1,
                        elevation: 20,
                        height: 200,
                        paddingRight: 50
                    }}>

                        <View
                            style={{
                                display: 'flex',
                                backgroundColor: gerarCorAleatoria(),
                                width: 300,
                                height: 190,
                                justifyContent: 'space-between',
                                paddingLeft: 40,
                                paddingTop: 10,
                                paddingBottom: 10,
                                paddingRight: 20,
                                borderRadius: 20,
                                marginRight: 70
                            }}>
                            <View>
                                <Text style={{ color: '#fff', fontSize: 12 }}>data validade</Text>
                                <Text style={{ color: '#fff', fontWeight: '900', fontSize: 20 }}>bandeira do cartão</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#fff' }}>nomeUsuario</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#fff' }}>cvv</Text>
                                    <Text style={{ color: '#fff' }}>limite cartao</Text>
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                </View>

                <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                    <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Definir conta corrente:</Text>
                    <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                        <Picker
                            selectedValue={selectedValueAgencia}
                            onValueChange={(itemValue) => setSelectedValueAgencia(itemValue)}>

                            <Picker.Item style={{ fontWeight: '900' }} label={"Escolha uma agencia"} value="" />

                            {lstAgenciasDisponiveis.map((item, index) => (
                                <Picker.Item style={{ fontWeight: '900' }} key={index} label={item.agencia} value={item.codigo} />
                            ))}
                        </Picker>
                    </View>
                </View>

                <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                    <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Definir forma de pagamento:</Text>
                    <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                        <Picker
                            selectedValue={selectedValueFormaPagamento}
                            onValueChange={(itemValue) => setSelectedValuePagamento(itemValue)}>

                            <Picker.Item label={"Escolha uma forma de pagamento"} value="" />

                            {formaPagamento.map((item, index) => (
                                <Picker.Item key={index} label={item.label} value={item.value} />
                            ))}
                        </Picker>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                    <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Data de validade:</Text>
                    <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                        <Text style={{ fontSize: 15, fontWeight: "500" }}>vence em 1 ano</Text>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                    <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Definir bandeira:</Text>
                    <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                        <TextInput style={{ fontSize: 15, fontWeight: "300" }} onChangeText={setBandeiraCartao}/>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                    <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>CVV:</Text>
                    <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                        <TextInput keyboardType='numeric' onChangeText={setCvv}/>
                    </View>
                </View>
                <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                    <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Definir limite:</Text>
                    <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                        <TextInput keyboardType='numeric' onChangeText={setLimite}/>
                    </View>
                </View>

                <View style={{ marginTop: 40, justifyContent: 'center', display: 'flex', width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity onPress={CriarCartao} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: '50%', borderRadius: 8, height: 50, backgroundColor: '#7F79AB' }}>
                        <Text style={{ color: '#FFF', fontWeight: "bold" }}>Definir</Text>
                    </TouchableOpacity>
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
        height: 'auto',
        paddingBottom: 100
    }
});