import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'

export default function PageContasCorrentes() {
    const data = [
        { Agencia: 'AGENCIA', Valor: 'R$ 200,00' },
        { Agencia: 'AGENCIA', Valor: 'R$ 500,00' },
        { Agencia: 'Itaú', Valor: 'R$ 500,00' },
        { Agencia: 'Bradesco', Valor: 'R$ 500,00' },
        { Agencia: 'Santander', Valor: 'R$ 500,00' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40 }}>
                <Text style={{ color: '#fff' }}>Voltar</Text>
                <Text style={{ color: '#fff', marginLeft: 10, fontWeight: "bold", marginBottom: 60 }}>Ola Kaio</Text>
            </View>

            <View style={styles.containerTwo}>

                <TouchableOpacity style={{ marginTop: 30, borderRadius: 10, alignSelf: 'center', alignItems: 'center', height: 45, backgroundColor: '#EDEDED', justifyContent: 'center', display: 'flex', flexDirection: 'row', width: '80%', }}>
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
                        <View style={{ display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                            <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                                <Text style={{ fontWeight: 'bold' ,fontSize: 15, display: 'flex', flexDirection: "column", marginLeft: 20, marginTop: 20 }}>{item.Agencia}</Text>
                            </View>

                            <Text style={{ fontWeight: 'bold', fontSize: 15, alignSelf: "flex-end", marginRight: 20 }}>{item.Valor}</Text>
                        </View>
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