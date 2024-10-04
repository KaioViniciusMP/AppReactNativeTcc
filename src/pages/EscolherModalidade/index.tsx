import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from 'react'
import { AuthStackParamList } from '../../Routes/auth.routes';
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import api from '../../services/api';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
type NavigationPropApp = NativeStackNavigationProp<AppStackParamList>;

interface Modalidades {
    codigo: number;
    nomeModalidade: string;
}

export default function PageEscolherModalidade() {
    const navigation = useNavigation<NavigationProp>();
    const navigationApp = useNavigation<NavigationPropApp>();
    const [modalidades, setModalidades] = useState<Modalidades[]>([]);

    const voltar = () => {
        navigation.pop();
    }

    useEffect(() => {
        const fetchSaldo = () => {
            api.get('/Transacoes/BuscarModalidades')
                .then(response => {
                    if (response.data && response.data.length > 0) {
                        setModalidades(response.data);
                    }
                })
                .catch(err => console.error("ops! ocorreu um erro: " + err));
        };

        fetchSaldo(); 
        const interval = setInterval(fetchSaldo, 5000); 
        return () => clearInterval(interval);
    }, []);

    const data = modalidades
        .filter(e => e.nomeModalidade !== 'Outra...')
        .map(e => ({
            text: e.nomeModalidade,
            navigationPage: e.nomeModalidade,
            codigoTransferencia: e.codigo
        }));

    const Transferencia = (navigationPage: string, codigo: number) => {
        navigationApp.navigate('Transferencia', {
            localTransferencia: navigationPage,
            codigoTransferencia: codigo
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
                        <TouchableOpacity onPress={() => Transferencia(item.navigationPage, item.codigoTransferencia)} style={{ marginLeft: 20, marginRight: 20, marginBottom: 10, marginTop: 10, display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: '#D9D9D9', width: '90%', borderRadius: 5, height: 50, }}>
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
        backgroundColor: '#5D5C96', 
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