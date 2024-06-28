import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRoute } from '@react-navigation/native';

export default function HistoricoTransacoes() {
    let data;
    let primeiroItemArray;

    const dataHistoricoCompleto = [
        { Key: 1, tipoHistorico: 'Completo', Agencia: 'AGENCIA', Valor: 'R$ 200,00', Descricao: 'Titulo vai aqui' },
        { Key: 2, tipoHistorico: 'Completo', Agencia: 'AGENCIA', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 3, tipoHistorico: 'Completo', Agencia: 'Itaú', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 4, tipoHistorico: 'Completo', Agencia: 'Bradesco', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 5, tipoHistorico: 'Completo', Agencia: 'Santander', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
    ];
    const dataHistoricoInvestimentos = [
        { Key: 1, tipoHistorico: 'Investimentos', Agencia: 'AGENCIA', Valor: 'R$ 200,00', Descricao: 'Titulo vai aqui' },
        { Key: 2, tipoHistorico: 'Investimentos', Agencia: 'AGENCIA', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 3, tipoHistorico: 'Investimentos', Agencia: 'Itaú', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 4, tipoHistorico: 'Investimentos', Agencia: 'Bradesco', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 5, tipoHistorico: 'Investimentos', Agencia: 'Santander', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
    ];
    const dataHistoricoAlimentacao = [
        { Key: 1, tipoHistorico: 'Alimentacao', Agencia: 'AGENCIA', Valor: 'R$ 200,00', Descricao: 'Titulo vai aqui' },
        { Key: 2, tipoHistorico: 'Alimentacao', Agencia: 'AGENCIA', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 3, tipoHistorico: 'Alimentacao', Agencia: 'Itaú', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 4, tipoHistorico: 'Alimentacao', Agencia: 'Bradesco', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 5, tipoHistorico: 'Alimentacao', Agencia: 'Santander', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
    ];
    const dataHistoricoLazer = [
        { Key: 1, tipoHistorico: 'Lazer', Agencia: 'AGENCIA', Valor: 'R$ 200,00', Descricao: 'Titulo vai aqui' },
        { Key: 2, tipoHistorico: 'Lazer', Agencia: 'AGENCIA', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 3, tipoHistorico: 'Lazer', Agencia: 'Itaú', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 4, tipoHistorico: 'Lazer', Agencia: 'Bradesco', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 5, tipoHistorico: 'Lazer', Agencia: 'Santander', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
    ];
    const dataHistoricoTransporte = [
        { Key: 1, tipoHistorico: 'Transporte', Agencia: 'AGENCIA', Valor: 'R$ 200,00', Descricao: 'Titulo vai aqui' },
        { Key: 2, tipoHistorico: 'Transporte', Agencia: 'AGENCIA', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 3, tipoHistorico: 'Transporte', Agencia: 'Itaú', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 4, tipoHistorico: 'Transporte', Agencia: 'Bradesco', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
        { Key: 5, tipoHistorico: 'Transporte', Agencia: 'Santander', Valor: 'R$ 500,00', Descricao: 'Titulo vai aqui' },
    ];

    const route = useRoute();

    const { param1, param2 } = route.params;
    if (param1 == 'HistoricoInvestimentos') {
        data = dataHistoricoInvestimentos
        primeiroItemArray = dataHistoricoInvestimentos[0]
        console.log('o param1 veio certo: ' + data)
    }
    else if(param1 == 'HistoricoCompleto'){
        data = HistoricoCompleto
        primeiroItemArray = HistoricoCompleto[0]
        console.log('o param1 veio certo: ' + data)
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
                <Text style={{ fontSize: 13, fontWeight: "bold", color: '#939393', textAlign: 'left', marginLeft: 35, marginBottom: 30 }}>
                    {primeiroItemArray.tipoHistorico}
                </Text>

                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handlePress(item.Key, item.Agencia)} style={{ alignItems: 'center', display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
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