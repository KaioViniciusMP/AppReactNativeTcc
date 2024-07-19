import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context";

export default function HistoricoTransacoes() {
    const { user } = useContext(AuthContext);
    const [historico, setHistorico] = useState([])
    const [contaCorrente, setContaCorrente] = useState([])
    const route = useRoute();
    const { navigationPage } = route.params;

    const dados = {
        data: undefined,
        primeiroItemArray: undefined,
        modalidadeCodigo: undefined,
        tipoHistorico: undefined,
    };

    const buscarHistorico = (codigoModalidade) => {
        api.post(`/Transacoes/BuscarHistoricoTransacoesPorModalidade`, {
            usuarioCodigo: user?.usuarioCodigo,
            modalidadeCodigo: codigoModalidade
        })
            .then(response => {
                setHistorico(response.data)
            })
            .catch(err => console.error("ops! ocorreu um erro: " + err));
    }
    const buscarHistoricoCompleto = () => {
        api.get(`/Transacoes/${user?.usuarioCodigo}`)
            .then(response => {
                setHistorico(response.data)
            })
            .catch(err => console.error("ops! ocorreu um erro: " + err));
    }

    useEffect(() => {
        api.get(`/ContaCorrente`)
            .then(response => {
                setContaCorrente(response.data)
            })
            .catch(err => console.error("ops! ocorreu um erro: " + err));
    }, [])

    const criandoBody = (tipoHistoricoParam, dataParam, primeiroItemArrayParam, modalidadeCodigoParam) => {
        dados.tipoHistorico = tipoHistoricoParam;
        dados.data = dataParam;
        dados.primeiroItemArray = primeiroItemArrayParam;
        dados.modalidadeCodigo = modalidadeCodigoParam;
    };

    switch (navigationPage) {
        case "HistoricoInvestimentos":
            criandoBody("Investimentos", historico, historico[0], 4)
            buscarHistorico(dados.modalidadeCodigo)
            break
        case "HistoricoAlimentacao":
            criandoBody("Alimentacao", historico, historico[0], 3)
            buscarHistorico(dados.modalidadeCodigo)
            break
        case "HistoricoLazer":
            criandoBody("Lazer", historico, historico[0], 5)
            buscarHistorico(dados.modalidadeCodigo)
            break
        case "HistoricoTransporte":
            criandoBody("Transporte", historico, historico[0], 2)
            buscarHistorico(dados.modalidadeCodigo)
            break
        case "HistoricoSaude":
            criandoBody("Saude", historico, historico[0], 1)
            buscarHistorico(dados.modalidadeCodigo)
            break
        case "HistoricoCompras":
            criandoBody("Compras", historico, historico[0], 6)
            buscarHistorico(dados.modalidadeCodigo)
            break
        default:
            buscarHistoricoCompleto()
            dados.data = historico
            dados.primeiroItemArray = historico[0]
    }

    const ButtonAlert = (key, agencia) =>
        Alert.alert('Alert Title', `Item pressionado - Key: ${key}, Agência: ${agencia}`, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('OK Pressed') },
        ]);

    const handlePress = (key, agencia) => {
        ButtonAlert(key, agencia);
    };

    const getAgenciaByCodigo = (codigo) => {
        const conta = contaCorrente.find(i => i.codigo === codigo);
        return conta ? conta.agencia : 'Desconhecida';
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, marginBottom: 60 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.containerTwo}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Text style={{ fontWeight: "900", fontSize: 20, marginTop: 40, marginLeft: 35 }}>TRANSAÇÕES</Text>
                </View>
                <Text style={{ fontSize: 13, fontWeight: "bold", color: '#939393', textAlign: 'left', marginLeft: 35, marginBottom: 30, textTransform: 'uppercase' }}>
                    {dados.tipoHistorico}
                </Text>

                <FlatList
                    data={dados.data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePress(item.Key, item.Agencia)} style={{ alignItems: 'center', display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                            <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                <View style={{ width: 60, height: 60, backgroundColor: "#D9D9D9", marginLeft: 20, borderRadius: 12 }} />

                                <View style={{ display: 'flex', flexDirection: 'column' }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 15, display: 'flex', marginLeft: 20 }}>{getAgenciaByCodigo(item.contaCorrenteCodigo)}</Text>
                                    <Text style={{ fontWeight: 'bold', color: '#939393', fontSize: 12, marginLeft: 20, marginTop: 3 }}>{item.descricao}</Text>
                                </View>
                            </View>

                            <Text style={{ fontWeight: 'bold', fontSize: 15, marginRight: 20 }}>{item.valorTransacao}</Text>
                        </TouchableOpacity>
                    )}
                />
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
        height: 600
    }
});