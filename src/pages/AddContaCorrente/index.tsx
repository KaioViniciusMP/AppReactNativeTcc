import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, TextInput,Alert } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from 'react'
import { AuthStackParamList } from '../../Routes/auth.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import api from '../../services/api';
import { AuthContext } from '../../context';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export default function PageAdicionarContaCorrente() {
    const { user } = useContext(AuthContext)
    const navigation = useNavigation<NavigationProp>();
    const [agencia, setAgencia] = useState('');
    const [usuarioCodigo, setUsuarioCodigo] = useState(user.usuarioCodigo.toString());
    const [saldo, setSaldo] = useState('');

    const AlertaContaCriada = () =>
        Alert.alert('Corrente criada com sucesso!', `Deseja permanecer na tela e criar mais uma conta corrente?`, [
            { text: 'Permanecer', onPress: () => (console.log(`O usuario decidiu permancer na tela para criar mais uma conta corrente`)) },
            { text: 'Sair', onPress: () => navigation.pop()},
        ]);

    const CriarContaCorrenteRequest = {
        agencia: agencia,
        usuarioCodigo: usuarioCodigo,
        saldo: saldo
    };

    const voltar = () => {
        navigation.pop();
    }

    const criarContaCorrente = () => {
        api.post('/ContaCorrente', CriarContaCorrenteRequest)
            .then(response => {
                if (response.data.status) {
                    setSaldo(``)
                    setAgencia(``)
                    AlertaContaCriada()
                } else {
                    console.log("Falha ao criar conta corrente:", response.data.message);
                }
            })
            .catch(err => {
                Alert.alert('Ops.. Uma agencia com este nome ja existe!', `Digite outro nome de agencia para poder cadastrar`, [
                    { text: 'Fechar', onPress: () => (console.log(`O usuario decidiu escolher outro nome de agencia para realizar a criacao de agencia`)) }
                ]);
                console.error("Ops! Ocorreu um erro: " + err);
            });
    };


    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity onPress={voltar} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, marginBottom: 100 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.containerTwo}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 40, marginLeft: 25 }}>CONTA CORRENTE</Text>
                </View>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: '#939393', textAlign: 'center', marginLeft: 25, marginBottom: 45, }}>CRIAÇÃO DE NOVAS CONTAS CORRENTES</Text>

                <View style={{ display: 'flex', width: '100%' }}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "semibold" }}>Agencia:</Text>
                        <TextInput onChangeText={setAgencia} style={{ marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 2, borderColor: '#7F79AB' }} placeholder='Defina o valor recebido...' />
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "semibold" }}>Saldo:</Text>
                        <TextInput onChangeText={setSaldo} style={{ marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 2, borderColor: '#7F79AB' }} placeholder='Digite a descrição...' />
                    </View>

                    <View style={{ marginTop: 40, justifyContent: 'center', display: 'flex', width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity onPress={criarContaCorrente} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: '50%', borderRadius: 8, height: 50, backgroundColor: '#7F79AB' }}>
                            <Text style={{ color: '#FFF', fontWeight: "bold" }}>Criar</Text>
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