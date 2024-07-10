import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

interface ContaCorrente {
    codigo: number ,
    Agencia: string,
    Valor: string,
    CartoesVinculados: Cartao[]
}
interface Cartao{
    codigo: number,
    bandeira: string,
    nomeUsuario: string,
    cvv: string
}

export default function PageContasCorrentes() {
    const navigation = useNavigation<NavigationProp>();

    const adicionarContaCorrente = () => {
        navigation.navigate('AdicionarContaCorrente');
    };
    const voltar = () => {
        navigation.pop();
    }

    const acessarCartoes = (codigoConta: number) => {
        console.log(`codigo de conta passado: ${codigoConta}`);
        navigation.navigate('AddCartao', { codigoConta });
    };

    const data: ContaCorrente[] = [
        { codigo: 1, Agencia: 'AGENCIA', Valor: 'R$ 200,00', CartoesVinculados: [{ codigo: 1, bandeira: 'Visa', nomeUsuario: 'Kaio', cvv: '1234' },{ codigo: 1, bandeira: 'Visa2', nomeUsuario: 'Kainho', cvv: '1234324' },{ codigo: 1, bandeira: 'Visa3', nomeUsuario: 'Kainho0000', cvv: '1234324' }, ]},
        { codigo: 2, Agencia: 'AGENCIA', Valor: 'R$ 500,00', CartoesVinculados: [{ codigo: 2, bandeira: 'MasterCard', nomeUsuario: 'Kaio', cvv: '5678' }] },
        { codigo: 3, Agencia: 'Itaú', Valor: 'R$ 500,00', CartoesVinculados: [{ codigo: 3, bandeira: 'Amex', nomeUsuario: 'Kaio', cvv: '9101' }] },
        { codigo: 4, Agencia: 'Bradesco', Valor: 'R$ 500,00', CartoesVinculados: [{ codigo: 4, bandeira: 'Elo', nomeUsuario: 'Kaio', cvv: '1121' }] },
        { codigo: 5, Agencia: 'Santander', Valor: 'R$ 500,00', CartoesVinculados: [{ codigo: 5, bandeira: 'Discover', nomeUsuario: 'Kaio', cvv: '3141' }] },
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity onPress={voltar} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, marginBottom: 110 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft:5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.containerTwo}>

                <TouchableOpacity onPress={adicionarContaCorrente} style={{ marginTop: 30, borderRadius: 10, alignSelf: 'center', alignItems: 'center', height: 45, backgroundColor: '#EDEDED', justifyContent: 'center', display: 'flex', flexDirection: 'row', width: '80%', }}>
                    <Text>Adicionar conta corrente</Text>
                    <Text style={{ marginLeft: 10, fontSize: 17, textAlign: 'center', backgroundColor: '#000', width: 25, height: 25, borderRadius: 20, color: '#fff' }}>+</Text>
                </TouchableOpacity>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent:'space-around', marginTop: 40, marginBottom: 20}}>
                    <Text style={{ fontWeight: 'bold' }}>CONTAS CORRENTES EXISTENTES</Text>
                    <Text style={{ fontWeight: 'bold' }}>icon</Text>
                </View>

                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => acessarCartoes(item.codigo)} style={{ display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                            <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' ,fontSize: 15, display: 'flex', flexDirection: "column", marginLeft: 20, marginTop: 20 }}>{item.Agencia}</Text>
                            </View>

                            <Text style={{ fontWeight: 'bold', fontSize: 15, alignSelf: "flex-end", marginRight: 20 }}>{item.Valor}</Text>
                        </TouchableOpacity >
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