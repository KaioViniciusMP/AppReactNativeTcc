import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { AuthStackParamList } from '../../Routes/auth.routes';
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
type NavigationPropApp = NativeStackNavigationProp<AppStackParamList>;

export default function PageEscolherModalidade() {
    const navigation = useNavigation<NavigationProp>();
    const navigationApp = useNavigation<NavigationPropApp>();

    const voltar = () => {
        navigation.pop();
    }

    const data = [
        { text: 'Lazer', navigationPage: 'Lazer' },
        { text: 'Compras', navigationPage: 'Compras' },
        { text: 'Saúde', navigationPage: 'Saúde' },
        { text: 'Transporte', navigationPage: 'Transporte' },
        { text: 'Alimentação', navigationPage: 'Alimentação' },
        { text: 'Investimentos', navigationPage: 'Investimentos' },
    ]

    // const Transferencia = (page) => {
    //     navigationApp.navigate('Transferencia', {
    //         localTransferencia: page
    //     });
    // }

    const Transferencia = (navigationPage: string) => {
        navigationApp.navigate('Transferencia', {
            localTransferencia: navigationPage,
        });
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity onPress={voltar} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, marginBottom: 20 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ paddingBottom: 80, color: '#fff', fontSize: 15, marginLeft: 5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.containerTwo}>
                <Text style={{ fontWeight: "bold", marginBottom: 30, marginTop: 40, marginLeft: 25 }}>Utilizar R$ em qual modalidade?</Text>

                <FlatList
                    data={data}
                    style={{ display: 'flex', gap: 20 }}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => Transferencia(item.navigationPage)} style={{ marginLeft: 20, marginRight: 20, marginBottom: 10, marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
                            <Text style={{ fontWeight: "bold" }}>{item.text}</Text>
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