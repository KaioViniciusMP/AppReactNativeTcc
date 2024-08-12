import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../Routes/app.routes';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';

import AntDesign from '@expo/vector-icons/AntDesign';

type DetalhesCompraProp = RouteProp<AppStackParamList, 'DetalhesCompra'>;

// type Compra = {
//     codigo: number;
//     tituloProduto: string;
//     subtitulo: string;
//     Valor: string;
//     formaPagamento: string;
//     modalidade: string;
//     cartaoUtilizado: string;
//     cvvCartao: string;
//     dataTransacao: string;
//     agenciaUtilizada: string;
//     descricao: string;
// };

type Compra = {
    codigoTransacao: number;
    titulo: string;
    descricao: string;
    valorTransacao: string;
    nomeModalidade: string;
    dataTransacao: string;
    cvv: string;
    bandeiraCartao: string;
    codigoUsuario: string;
    formaPagamento: string;
    agencia: string;
};

export default function DetalhesCompra() {
    const navigation = useNavigation();
    //const [compra, setCompra] = useState<Compra | undefined>(undefined);
    const [compra, setCompra] = useState<Compra | null>(null);

    const PageHome = () => {
        navigation.goBack();
    }

    const route = useRoute<DetalhesCompraProp>();
    const { codigoTransacaoFeita, usuarioCodigo } = route.params;

    useEffect(() => {
        api.post('Transacoes/DetalhesTransacao', {
            codigoUsuario: usuarioCodigo,
            codigoTransacaoFeita: codigoTransacaoFeita
        })
        .then(response => {
            if (response.data && response.data.codigoTransacao) { // Verifica se existe código de transação na resposta
                setCompra(response.data);
            }
        })
        .catch(err => console.error("Ops! Ocorreu um erro: " + err));
    }, [codigoTransacaoFeita]);

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity onPress={PageHome} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, marginBottom: 80 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.containerTwo}>
                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ marginBottom: 20, fontWeight: "900", fontSize: 25, marginTop: 40, textTransform: 'uppercase' }}>detalhes</Text>
                </View>

                {compra ? (
                    <View key={compra.codigoTransacao} style={{ display: 'flex', width: '100%' }}>
                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Titulo transação:</Text>
                        <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>{compra.titulo}</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Valor transação:</Text>
                        <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>{compra.valorTransacao}</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Forma de pagamento:</Text>
                        <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>{compra.formaPagamento}</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Modalidade:</Text>
                        <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>{compra.nomeModalidade}</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Cartão utilizado:</Text>
                        <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>{compra.bandeiraCartao}</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>CVV do cartão utilizado:</Text>
                        <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>{compra.cvv}</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Data de transação:</Text>
                        <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>{compra.dataTransacao}</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Agencia:</Text>
                        <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>{compra.agencia}</Text>
                        </View>
                    </View>

                    <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Descrição:</Text>
                        <View style={{ display: 'flex', justifyContent: 'flex-start', paddingTop: 10, marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 100, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                            <Text style={{ fontSize: 15, fontWeight: "500" }}>{compra.descricao}</Text>
                        </View>
                    </View>
                </View>
                ) : (
                    <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: 200 }}>
                        <Text style={{ fontSize: 18, fontWeight: "500" }}>Nenhuma transação encontrada</Text>
                    </View>
                )}
            </View>
        </ScrollView >
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
        height: 'auto',
        paddingBottom: 40
    }
});