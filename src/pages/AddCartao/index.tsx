import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import { AuthStackParamList } from '../../Routes/auth.routes';
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
type AddCartaoRouteProp = RouteProp<AppStackParamList, 'AddCartao'>

interface ContaCorrente {
    codigo: number,
    Agencia: string,
    Valor: string,
    CartoesVinculados: Cartao[]
}
interface Cartao {
    codigo: number,
    bandeira: string,
    nomeUsuario: string,
    cvv: string,
    corCartao: string,
    dataVencimentoCartao: Date,
    limiteCartao: number
}

export default function AddCartao() {
    const navigation = useNavigation<NavigationProp>();

    const route = useRoute<AddCartaoRouteProp>();
    const { codigoConta } = route.params;

    const [cartoes, setCartoes] = useState<Cartao[]>([]);

    const data: ContaCorrente[] = [
        { codigo: 1, Agencia: 'AGENCIA', Valor: 'R$ 200,00', CartoesVinculados: [
            { codigo: 1, bandeira: 'Visa', nomeUsuario: 'Kaio', cvv: '1234', corCartao: '#313131', dataVencimentoCartao: new Date('2024-12-20'), limiteCartao: 5000.50 },
            { codigo: 2, bandeira: 'Visa2', nomeUsuario: 'Kainho', cvv: '1234324', corCartao: '#BA00B2', dataVencimentoCartao: new Date('2025-01-15'), limiteCartao: 6000.75 },
            { codigo: 3, bandeira: 'Visa3', nomeUsuario: 'Kainho0000', cvv: '1234324', corCartao: '#00BB07', dataVencimentoCartao: new Date('2023-11-30'), limiteCartao: 7000.99 }
        ]},
        { codigo: 2, Agencia: 'AGENCIA', Valor: 'R$ 500,00', CartoesVinculados: [
            { codigo: 4, bandeira: 'MasterCard', nomeUsuario: 'Kaio', cvv: '5678', corCartao: '#B10000', dataVencimentoCartao: new Date('2024-05-22'), limiteCartao: 8000.25 }
        ]},
        { codigo: 3, Agencia: 'Itaú', Valor: 'R$ 500,00', CartoesVinculados: [
            { codigo: 5, bandeira: 'Amex', nomeUsuario: 'Kaio', cvv: '9101', corCartao: '#F0B10D', dataVencimentoCartao: new Date('2023-08-17'), limiteCartao: 9000.80 }
        ]},
        { codigo: 4, Agencia: 'Bradesco', Valor: 'R$ 500,00', CartoesVinculados: [
            { codigo: 6, bandeira: 'Elo', nomeUsuario: 'Kaio', cvv: '1121', corCartao: '#FF9900', dataVencimentoCartao: new Date('2024-07-10'), limiteCartao: 10000.00 }
        ]},
        { codigo: 5, Agencia: 'Santander', Valor: 'R$ 500,00', CartoesVinculados: [
            { codigo: 7, bandeira: 'Discover', nomeUsuario: 'Kaio', cvv: '3141', corCartao: '#FF9900', dataVencimentoCartao: new Date('2025-09-12'), limiteCartao: 11000.50 }
        ]}
    ];

    useEffect(() => {
        const conta = data.find(c => c.codigo === codigoConta);
        if (conta) {
            console.log(conta.CartoesVinculados);
            setCartoes(conta.CartoesVinculados);
        } else {
            console.log('Conta não encontrada');
        }
    }, [codigoConta]);

    const voltar = () => {
        navigation.goBack();
    }

    const dataTeste = [
        { Key: 1, tipoHistorico: 'Completo', Agencia: 'AGENCIA', Valor: 'R$ 200,00', Descricao: 'Titulo vai aqui' },
        { Key: 2, tipoHistorico: 'Completo', Agencia: 'BANCO DO BRASIL', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 3, tipoHistorico: 'Completo', Agencia: 'Itaú', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 4, tipoHistorico: 'Completo', Agencia: 'Bradesco', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 5, tipoHistorico: 'Completo', Agencia: 'Santander', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
    ];

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
                                backgroundColor: cartao.corCartao,
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
                                <Text style={{ color: '#fff', fontSize: 12 }}>{cartao.dataVencimentoCartao.toLocaleDateString('pt-BR')}</Text>
                                <Text style={{ color: '#fff', fontWeight: '900', fontSize: 20 }}>{cartao.bandeira}</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#fff' }}>{cartao.nomeUsuario}</Text>
                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <Text style={{ color: '#fff' }}>{cartao.cvv}</Text>
                                    <Text style={{ color: '#fff' }}>{cartao.limiteCartao}</Text>
                                </View>
                            </View>
                        </View>
                    ))}

                </ScrollView>


                <View style={styles.containerTwo}>
                    <TouchableOpacity style={{ marginTop: 80, borderRadius: 10, alignSelf: 'center', alignItems: 'center', height: 45, backgroundColor: '#EDEDED', justifyContent: 'center', display: 'flex', flexDirection: 'row', width: '80%', }}>
                        <Text>Adicionar novo cartão</Text>
                        <Text style={{ marginLeft: 10, fontSize: 17, textAlign: 'center', backgroundColor: '#000', width: 25, height: 25, borderRadius: 20, color: '#fff' }}>+</Text>
                    </TouchableOpacity>
                    <View style={{ marginLeft: 10, marginBottom: 40, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                        <Text style={{ fontSize: 18, fontWeight: "900", marginBottom: 25, marginTop: 40, marginLeft: 25 }}>Saldo diponivel:</Text>
                        <Text style={{ fontWeight: "900", fontSize: 50, marginLeft: 25 }}>R$ 0,00</Text>
                    </View>

                    <Text style={{ fontSize: 13, fontWeight: "bold", color: '#000', textAlign: 'left', marginLeft: 35, marginBottom: 10 }}>ULTIMAS TRANSAÇÕES</Text>

                    <FlatList
                        data={dataTeste}
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ alignItems: 'center', display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                                <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                    <View style={{ width: 60, height: 60, backgroundColor: "#D9D9D9", marginLeft: 20, borderRadius: 12 }} />

                                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15, display: 'flex', marginLeft: 20 }}>{item.Agencia}</Text>
                                        <Text style={{ fontWeight: 'bold', color: '#939393', fontSize: 12, marginLeft: 20, marginTop: 3 }}>{item.Descricao}</Text>
                                    </View>
                                </View>

                                <Text style={{ fontWeight: 'bold', fontSize: 15, marginRight: 20 }}>{item.Valor}</Text>
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