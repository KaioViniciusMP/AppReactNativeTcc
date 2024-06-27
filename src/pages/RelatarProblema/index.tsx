import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, TextInput } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

export default function RelatarProblema() {
    const navigation = useNavigation<NavigationProp>();

    const voltar = () => {
        navigation.goBack();
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5, marginBottom: 60 }}>Voltar</Text>
            </View>

            <View style={styles.containerTwo}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 25, marginTop: 40, marginLeft: 25 }}>RELATAR PROBLEMA</Text>
                </View>
                <Text style={{ fontWeight: "bold", color: '#939393', fontSize: 14, marginLeft: 25, marginBottom: 20 }}>Explique o que aconteceu ou o que não está funcionando</Text>

                <View style={{ alignSelf: 'center', width: '80%', borderWidth: 1, borderRadius: 5, height: 250, marginTop: 15, display: 'flex', }}>
                    <TextInput style={{ color: 'gray', margin: 10 }} multiline placeholder='Relate o problema aqui...' />
                </View>

                <View style={{ marginTop: 40, justifyContent: 'center', display: 'flex', width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", width: '50%', borderRadius: 8, height: 50, backgroundColor: '#7F79AB' }}>
                        <TextInput style={{ color: '#FFF', fontWeight: "bold", height: 50 }}>Enviar</TextInput>
                    </TouchableOpacity>

                    <Text onPress={voltar} style={{ color: '#7F79AB', fontWeight: "bold", marginTop: 10 }}>Cancelar operação</Text>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scrollViewContainer: {
        justifyContent: 'flex-end',
        backgroundColor: '#4D4D4D', // Cor de fundo do ScrollView
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