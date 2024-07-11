import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../Routes/app.routes';
import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import AntDesign from '@expo/vector-icons/AntDesign';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;
type DetalhesCompraProp = RouteProp<AppStackParamList, 'DetalhesCompra'>;

type Compra = {
    codigo: number;
    tituloProduto: string;
    subtitulo: string;
    Valor: string;
    formaPagamento: string;
    modalidade: string;
    cartaoUtilizado: string;
    cvvCartao: string;
    dataTransacao: string;
    agenciaUtilizada: string;
    descricao: string;
};

export default function DetalhesCompra() {
    const navigation = useNavigation();
    const navigationApp = useNavigation<NavigationProp>();
    const [compras, setCompras] = useState<Compra | undefined>(undefined);

    const PageHome = () => {
        navigation.goBack();
    }

    const route = useRoute<DetalhesCompraProp>();
    const { codigoCompra } = route.params;

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

    useEffect(() => {
        const compra = transacoes.find(c => c.codigo === codigoCompra);
        if (compra) {
            console.log(compra);
            setCompras(compra);
        } else {
            console.log('Conta não encontrada');
        }
    }, [codigoCompra]);

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

                {compras && (
                    <View key={compras.codigo} style={{ display: 'flex', width: '100%' }}>
                        <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                            <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Titulo transação:</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>{compras.tituloProduto}</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                            <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Valor transação:</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>{compras.Valor}</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                            <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Forma de pagamento:</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>{compras.formaPagamento}</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                            <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Modalidade:</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>{compras.modalidade}</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                            <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Cartão utilizado:</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>{compras.cartaoUtilizado}</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                            <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>CVV do cartão utilizado:</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>{compras.cvvCartao}</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                            <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Data de transação:</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>{compras.dataTransacao}</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                            <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Agencia:</Text>
                            <View style={{ display: 'flex', justifyContent: 'center', marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 40, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>{compras.agenciaUtilizada}</Text>
                            </View>
                        </View>

                        <View style={{ alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                            <Text style={{ marginLeft: 50, fontSize: 17, fontWeight: "800" }}>Descrição:</Text>
                            <View style={{ display: 'flex', justifyContent: 'flex-start',paddingTop:10, marginBottom: 15, width: '80%', alignSelf: 'center', borderRadius: 5, height: 100, paddingLeft: 15, backgroundColor: '#D9D9D9' }}>
                                <Text style={{ fontSize: 15, fontWeight: "500" }}>{compras.descricao}</Text>
                            </View>
                        </View>
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