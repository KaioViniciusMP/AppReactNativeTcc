import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { AuthStackParamList } from '../../Routes/auth.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;


export default function PageEscolherModalidade() {
    const navigation = useNavigation<NavigationProp>();

    const voltar = () => {
        navigation.pop();
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, marginBottom: 20 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text onPress={voltar} style={{ color: '#fff', fontSize: 15, marginLeft:5 }}>Voltar</Text>
            </View>

            <View style={styles.containerTwo}>
                <Text style={{ fontWeight: "bold", marginBottom: 30, marginTop: 40, marginLeft: 25 }}>Utilizar R$ em qual modalidade?</Text>
                <View style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Lazer</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Compras</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Saúde</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Transporte</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Alimentação</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                        <Text style={{ fontWeight: "bold" }}>Investimentos</Text>
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