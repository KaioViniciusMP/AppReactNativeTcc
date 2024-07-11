import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, FlatList } from 'react-native'
import { RouteProp, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react';
import { AuthStackParamList } from '../../Routes/auth.routes';
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
type NavigationAppProp = NativeStackNavigationProp<AppStackParamList>;
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
    const navigationApp = useNavigation<NavigationAppProp>();

    const route = useRoute<AddCartaoRouteProp>();
    const { codigoConta } = route.params;

    const [cartoes, setCartoes] = useState<Cartao[]>([]);

    const data: ContaCorrente[] = [
        { codigo: 1, Agencia: 'AGENCIA', Valor: 'R$ 200,00', CartoesVinculados: [
            { codigo: 1, bandeira: 'Visa', nomeUsuario: 'Kaio Vinicius Morais Pereira', cvv: '123784529564', corCartao: '#313131', dataVencimentoCartao: new Date('2024-12-20'), limiteCartao: 5000.50 },
            { codigo: 2, bandeira: 'Visa2', nomeUsuario: 'Kaio Vinicius Morais Pereira', cvv: '1234326544', corCartao: '#BA00B2', dataVencimentoCartao: new Date('2025-01-15'), limiteCartao: 6000.75 },
            { codigo: 3, bandeira: 'Visa3', nomeUsuario: 'Kaio Vinicius Morais Pereira', cvv: '1234324789', corCartao: '#00BB07', dataVencimentoCartao: new Date('2023-11-30'), limiteCartao: 7000.99 }
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

    const transacoes = [
        { codigo: 1, tituloProduto: 'Carro', subtitulo: 'Veículo para transporte', Valor: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`, formaPagamento: 'debito', modalidade: 'investimentos', cartaoUtilizado: 'Nubank', cvvCartao: '789465132', dataTransacao: '12/06/2024', agenciaUtilizada: 'itau', descricao: 'Esse carro eu comprei com o intuito de ir trabalhar' },
        { codigo: 2, tituloProduto: 'Moto', subtitulo: 'Veículo de duas rodas', Valor: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`, formaPagamento: 'credito', modalidade: 'transporte', cartaoUtilizado: 'Visa', cvvCartao: '123456789', dataTransacao: '15/07/2024', agenciaUtilizada: 'bradesco', descricao: 'Comprei uma moto para passeios de fim de semana' },
        { codigo: 3, tituloProduto: 'Casa', subtitulo: 'Imóvel residencial', Valor: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`, formaPagamento: 'debito', modalidade: 'imoveis', cartaoUtilizado: 'MasterCard', cvvCartao: '987654321', dataTransacao: '20/08/2024', agenciaUtilizada: 'santander', descricao: 'Casa para passar as férias' },
        { codigo: 4, tituloProduto: 'Violão', subtitulo: 'Instrumento musical', Valor: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`, formaPagamento: 'credito', modalidade: 'instrumentos', cartaoUtilizado: 'Amex', cvvCartao: '123987456', dataTransacao: '05/09/2024', agenciaUtilizada: 'itau', descricao: 'Para aprender a tocar música' },
        { codigo: 5, tituloProduto: 'Notebook', subtitulo: 'Computador portátil', Valor: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`, formaPagamento: 'debito', modalidade: 'eletronicos', cartaoUtilizado: 'Elo', cvvCartao: '654789321', dataTransacao: '18/10/2024', agenciaUtilizada: 'bradesco', descricao: 'Para trabalho e estudos' },
        { codigo: 6, tituloProduto: 'Cachorro', subtitulo: 'Animal de estimação', Valor: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`, formaPagamento: 'credito', modalidade: 'animais', cartaoUtilizado: 'Discover', cvvCartao: '789123654', dataTransacao: '22/11/2024', agenciaUtilizada: 'santander', descricao: 'Novo membro da família' },
        { codigo: 7, tituloProduto: 'Viagem a Dubai', subtitulo: 'Passeio turístico', Valor: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`, formaPagamento: 'debito', modalidade: 'viagens', cartaoUtilizado: 'Nubank', cvvCartao: '321654987', dataTransacao: '01/12/2024', agenciaUtilizada: 'itau', descricao: 'Férias dos sonhos' },
        { codigo: 8, tituloProduto: 'Livro', subtitulo: 'Material de leitura', Valor: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`, formaPagamento: 'credito', modalidade: 'educacao', cartaoUtilizado: 'Visa', cvvCartao: '456789123', dataTransacao: '10/01/2025', agenciaUtilizada: 'bradesco', descricao: 'Para expandir conhecimentos' },
        { codigo: 9, tituloProduto: 'Hornet', subtitulo: 'Moto esportiva', Valor: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`, formaPagamento: 'debito', modalidade: 'transporte', cartaoUtilizado: 'MasterCard', cvvCartao: '147258369', dataTransacao: '15/02/2025', agenciaUtilizada: 'santander', descricao: 'Nova moto para aventuras' },
        { codigo: 10, tituloProduto: 'Monitor', subtitulo: 'Tela de computador', Valor: `R$ ${(Math.random() * 1000 + 100).toFixed(2)}`, formaPagamento: 'credito', modalidade: 'eletronicos', cartaoUtilizado: 'Amex', cvvCartao: '963852741', dataTransacao: '20/03/2025', agenciaUtilizada: 'itau', descricao: 'Melhorar a estação de trabalho' }
    ];
    
    

    const detalhesCompra = (codigoCompra: number) => {
        navigationApp.navigate('DetalhesCompra', { codigoCompra });
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
                        data={transacoes}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => detalhesCompra(item.codigo)} style={{ alignItems: 'center', display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                                <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                    <View style={{ width: 60, height: 60, backgroundColor: "#D9D9D9", marginLeft: 20, borderRadius: 12 }} />

                                    <View style={{ display: 'flex', flexDirection: 'column' }}>
                                        <Text style={{ fontWeight: 'bold', fontSize: 15, display: 'flex', marginLeft: 20, textTransform:'uppercase' }}>{item.tituloProduto}</Text>
                                        <Text style={{ fontWeight: 'bold', color: '#939393', fontSize: 12, marginLeft: 20, marginTop: 3 }}>{item.subtitulo}</Text>
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