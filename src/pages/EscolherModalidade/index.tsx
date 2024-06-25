import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'

export default function PageEscolherModalidade() {
    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{display:'flex', flexDirection:'row', marginLeft: 20, marginTop: 40}}>
            <Text style={{ color: '#fff' }}>Voltar</Text>
            <Text style={{ color: '#fff', marginLeft: 10, fontWeight: "bold", marginBottom: 60 }}>Ola Kaio</Text>
            </View>
            
            <View style={styles.containerTwo}>
                <Text style={{ fontWeight: "bold", marginBottom: 30, marginTop: 40, marginLeft: 25 }}>Utilizar R$ em qual modalidade?</Text>
                <View style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Utilizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Utilizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Utilizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Utilizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Utilizar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Utilizar</Text>
                    </TouchableOpacity>
                </View>
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