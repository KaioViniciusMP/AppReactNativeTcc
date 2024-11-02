import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Alert, FlatList } from 'react-native'
import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState, useContext } from 'react';
import { AuthStackParamList } from '../../Routes/auth.routes';
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';
import api from '../../services/api';
import { AuthContext } from "../../context";

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
type NavigationAppProp = NativeStackNavigationProp<AppStackParamList>;
type AddCartaoRouteProp = RouteProp<AppStackParamList, 'AddCartao'>

// interface ContaCorrente {
//     codigo: number,
//     Agencia: string,
//     Valor: string,
//     CartoesVinculados: Cartao[]
// }
// interface Cartao {
//     codigo: number,
//     bandeira: string,
//     nomeUsuario: string,
//     cvv: string,
//     corCartao: string,
//     dataVencimentoCartao: Date,
//     limiteCartao: number
// }

interface Cartao {
    codigo: number,
    contaCorrenteCodigo: number,
    formaPagamento: string,
    dataValidade: string,
    bandeiraCartao: string,
    cvv: string,
    limite: number,
}
interface Transacoes {
    codigo: number,
    dataTransacao: Date,
    valorTransacao: number,
    formaPagamento: string,
    contaCorrenteCodigo: number,
    modalidadeCodigo: number,
    titulo: string,
    descricao: string,
    usuarioCodigo: number,
    cvvCartao: string,
    isDeposito: boolean,
}

const ButtonAlert = () =>{
    // Alert.alert('Atenção', `Funcionalidade disponivel em breve.`, [
    //     { text: 'OK', onPress: () => console.log('Deslogar') },
    // ]);

    // api.post(`/Cartao`, request)
    //     .then(response => {
    //         const { status, message, objInfo } = response.data; // Desestruturação da resposta

    //         if (status) {
    //             Alert.alert('Sucesso', message, [
    //                 { text: 'Fechar', onPress: () => console.log('Cadastro bem-sucedido:', objInfo) }
    //             ]);
    //         } else {
    //             Alert.alert('Erro de Cadastro', message);
    //         }
    //     })
    //     .catch((err) => {
    //         // Verifica se a resposta de erro contém dados
    //         const message = err.response?.data?.message || 'Ops! Ocorreu um erro, tente novamente mais tarde.';
    //         console.error(`Ops! Ocorreu um erro: ${err}`);
    //         Alert.alert('Erro', message);
    //     });
}
    

export default function AddCartao() {
    const navigation = useNavigation<NavigationProp>();
    const navigationApp = useNavigation<NavigationAppProp>();

    const route = useRoute<AddCartaoRouteProp>();
    const { codigoConta, saldoContaCorrenteAtual } = route.params;

    const [cartoes, setCartoes] = useState<Cartao[]>([]);
    const [transacoes, setTransacoes] = useState<Transacoes[]>([]);

    const coresAleatoriasCartoes = ['#313131', '#BA00B2', '#00BB07', '#B10000', '#F0B10D', '#FF9900', '#FF9900', `#6A0DAD`];

    const gerarCorAleatoria = () => {
        const indiceAleatorio = Math.floor(Math.random() * coresAleatoriasCartoes.length);
        return coresAleatoriasCartoes[indiceAleatorio];
    };
    const { user } = useContext(AuthContext)

    const usuarioCodigo = user?.usuarioCodigo

    useEffect(() => {
        api.post('/Cartao/BuscarCartoesCadastrados',
            {
                usuarioCodigo: usuarioCodigo
            }
        )
            .then(response => {
                if (response.data && Array.isArray(response.data)) {
                    setCartoes(response.data);
                    console.log(response.data);
                }
            })
            .catch(err => console.error("Ops! Ocorreu um erro:", err));


        api.get(`/Transacoes/${codigoConta}`)
            .then(response => {
                setTransacoes(response.data)
            })
            .catch(err => console.error("Ops! Ocorreu um erro:", err));
    }, []);

    const voltar = () => {
        navigation.goBack();
    }

    const detalhesCompra = (codigoTransacaoFeita: number, usuarioCodigo: number) => {
        navigationApp.navigate('DetalhesCompra', { codigoTransacaoFeita, usuarioCodigo });
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity onPress={voltar} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, paddingBottom: 180 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={{ position: 'relative' }}>
                <ScrollView horizontal={true} contentContainerStyle={{ width: 'auto', marginLeft: '13%' }} style={{
                    display: 'flex',
                    flexDirection: 'row',
                    position: 'absolute',
                    top: -140,
                    backgroundColor: 'transparent',
                    zIndex: 1,
                    elevation: 20,
                    height: 200,
                    paddingRight: 50
                }}>
                    {cartoes.map((cartao, index) => (
                        <View
                            key={index}
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
                                <Text style={{ color: '#fff', fontSize: 12 }}>{cartao.dataValidade}</Text>
                                <Text style={{ color: '#fff', fontWeight: '900', fontSize: 20 }}>{cartao.bandeiraCartao}</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#fff' }}>nomeUsuario</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#fff' }}>{cartao.cvv}</Text>
                                    <Text style={{ color: '#fff' }}>{cartao.limite.toFixed(2)}</Text>
                                </View>
                            </View>
                        </View>
                    ))}

                </ScrollView>


                <View style={styles.containerTwo}>
                    <TouchableOpacity onPress={ButtonAlert} style={{ marginTop: 80, borderRadius: 10, alignSelf: 'center', alignItems: 'center', height: 45, backgroundColor: '#EDEDED', justifyContent: 'center', display: 'flex', flexDirection: 'row', width: '80%', }}>
                        <Text>Adicionar novo cartão</Text>
                        <Text style={{ marginLeft: 10, fontSize: 17, textAlign: 'center', backgroundColor: '#000', width: 25, height: 25, borderRadius: 20, color: '#fff' }}>+</Text>
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10, marginBottom: 40, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 18, fontWeight: "900", marginBottom: 25, marginTop: 40, marginLeft: 25 }}>Saldo diponivel:</Text>
                        <Text style={{ fontWeight: "900", fontSize: 40, marginLeft: 25 }}>R$ {saldoContaCorrenteAtual.toFixed(2)}</Text>
                    </View>

                    <Text style={{ fontSize: 13, fontWeight: "bold", color: '#000', textAlign: 'left', marginLeft: 35, marginBottom: 10 }}>ULTIMAS TRANSAÇÕES</Text>

                    <FlatList
                        data={transacoes}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => detalhesCompra(item.codigo, item.usuarioCodigo)} style={{ alignItems: 'center', display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                                <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                    <View style={{ width: 60, height: 60, backgroundColor: "#D9D9D9", marginLeft: 20, borderRadius: 12 }} />

                                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15, display: 'flex', marginLeft: 20, textTransform: 'uppercase' }}>{item.titulo}</Text>
                                        <Text style={{ fontWeight: 'bold', color: '#939393', fontSize: 12, marginLeft: 20, marginTop: 3 }}>inserir subtitulo no backend</Text>
                                    </View>
                                </View>

                                <Text style={{ fontWeight: 'bold', fontSize: 15, marginRight: 20 }}>{item.valorTransacao.toFixed(2)}</Text>
                            </TouchableOpacity>
                        )}
                    />
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