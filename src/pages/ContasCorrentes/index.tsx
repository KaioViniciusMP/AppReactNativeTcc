import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import React,{useState,useEffect} from 'react'
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import api from "../../services/api";

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

// interface ContaCorrente {
//     codigo: number ,
//     Agencia: string,
//     Valor: string,
//     CartoesVinculados: []
// }

interface ContaCorrente {
    codigo: number;
    agencia: string;
    usuarioCodigo: number,
    saldo: number;
}

export default function PageContasCorrentes() {
    const navigation = useNavigation<NavigationProp>();
    const [contasCorrentes, setContasCorrentes] = useState<ContaCorrente[]>([]);

    const adicionarContaCorrente = () => {
        navigation.navigate('AdicionarContaCorrente');
    };
    const voltar = () => {
        navigation.pop();
    }

    const acessarCartoes = (codigoConta: number, saldoContaCorrenteAtual: number) => {
        console.log(`codigo de conta passado: ${codigoConta}`);
        console.log("codigo de conta passado:" + codigoConta);
        navigation.navigate('AddCartao', { codigoConta, saldoContaCorrenteAtual,  });
    };

    // const data: ContaCorrente[] = [
    //     { codigo: 1, Agencia: 'AGENCIA', Valor: 'R$ 200,00', CartoesVinculados: []},
    //     { codigo: 2, Agencia: 'BANCO DO BRASIL', Valor: 'R$ 500,00', CartoesVinculados: []},
    //     { codigo: 3, Agencia: 'Itaú', Valor: 'R$ 500,00', CartoesVinculados: []},
    //     { codigo: 4, Agencia: 'Bradesco', Valor: 'R$ 500,00', CartoesVinculados: []},
    //     { codigo: 5, Agencia: 'Santander', Valor: 'R$ 500,00', CartoesVinculados: []},
    // ];

    useEffect(() => {
        api.get('/ContaCorrente')
            .then(response => {
                if (response.data && Array.isArray(response.data)) {
                    setContasCorrentes(response.data);
                }
            })
            .catch(err => console.error("Ops! Ocorreu um erro:", err));
    }, []);

    

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
                    data={contasCorrentes}
                    keyExtractor={(item) => String(item.codigo)}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => acessarCartoes(item.codigo, item.saldo)} style={{ display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                            <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, display: 'flex', flexDirection: "column", marginLeft: 20, marginTop: 20, textTransform:"uppercase" }}>{item.agencia}</Text>
                            </View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, alignSelf: "flex-end", marginRight: 20 }}>R$ {item.saldo}</Text>
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