import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React from 'react'
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

enum AppScreens {
    RelatarProblema = 'RelatarProblema',
    PrivacidadeSeguranca = 'PrivacidadeSeguranca',
}

export default function PageAjuda() {
    const navigation = useNavigation<NavigationProp>();

    const navigateToScreen = (screenName: keyof AppStackParamList) => {
        navigation.navigate(screenName);
    };

    const voltar = () => {
        navigation.pop();
    }

    const data = [
        { icon: '1', title: 'Reportar Problema', screen: AppScreens.RelatarProblema, seta: '>' },
        { icon: '2', title: 'Privacidade e segurança', screen: AppScreens.PrivacidadeSeguranca, seta: '>' },
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40 }}>
                <Text style={{ color: '#fff' }} onPress={voltar}>Voltar</Text>
                <Text style={{ color: '#fff', marginLeft: 10, fontWeight: "bold", marginBottom: 60 }}>Ola Kaio</Text>
            </View>

            <View style={styles.containerTwo}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 40, marginLeft: 25 }}>AJUDA</Text>
                </View>
                <Text style={{ fontWeight: "bold", color: '#939393', marginLeft: 25, marginBottom: 20 }}>AJUDA</Text>

                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigateToScreen(item.screen)}>
                            <View style={{ display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: 'gray' }}>
                                <View style={{ display: 'flex', flexDirection: "row", alignItems:'center' }}>
                                    <Text style={{ display: 'flex', flexDirection: "column" , marginLeft: 15}}>{item.title}</Text>
                                </View>
                                <Text style={{ fontSize: 40, alignSelf: "flex-end" }}>{item.seta}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.icon}/>
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