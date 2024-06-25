import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'

export default function PageConfiguracoes() {
    const data = [
        { icon: '1', title: 'Editar dados do perfil', seta: '>' },
        { icon: '2', title: 'Editar entrada de dinheiro mensal', seta: '>' }
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40 }}>
                <Text style={{ color: '#fff' }}>Voltar</Text>
                <Text style={{ color: '#fff', marginLeft: 10, fontWeight: "bold", marginBottom: 60 }}>Ola Kaio</Text>
            </View>

            <View style={styles.containerTwo}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 40, marginLeft: 25 }}>CONFIGURAÇÕES</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 40, marginRight: 25 }}> Icon</Text>
                </View>
                <Text style={{ fontWeight: "bold", color: '#939393', marginLeft: 25, marginBottom: 20 }}>CONFIGURAR</Text>


                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <View style={{ display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                            <View style={{ display: 'flex', flexDirection: "row", alignItems:'center' }}>
                                <Text style={{ fontSize: 30, marginRight: 30, marginLeft: 20 }}>{item.icon}</Text>
                                <Text style={{ display: 'flex', flexDirection: "column" }}>{item.title}</Text>
                            </View>

                            <Text style={{ fontSize: 40, alignSelf: "flex-end" }}>{item.seta}</Text>

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