import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import React, { useState } from 'react'
import { AuthStackParamList } from '../../Routes/auth.routes';
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
type NavigationPropApp = NativeStackNavigationProp<AppStackParamList>;

//type IconType = "user" | "money" | "key" | "sort" | "map" | "filter" | "at" | "bold" | "medium" | "link" | "search" | "image" | "header" | "forward" | "retweet" | "minus" | "plus" | "info" | "exclamation" | "meetup";

// interface DataItem {
//     icon: IconType;
//     title: string;
//     seta: string;
//     navigationPage: keyof AppStackParamList;
// }

export default function PageConfiguracoes() {
    const navigation = useNavigation<NavigationProp>();
    const navigationApp = useNavigation<NavigationPropApp>();

    const editarDadosPerfil = () => {
        navigationApp.navigate('EditarUsuario');
    }


    const voltar = () => {
        navigation.pop();
    }

    // const data: DataItem[] = [
    //     { icon: "user", title: 'Editar dados do perfil', seta: '>', navigationPage: 'EditarUsuario' },
    //     { icon: "money", title: 'Editar entrada de dinheiro mensal', seta: '>', navigationPage: 'Transferencia' }
    // ];

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity onPress={voltar} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, paddingBottom: 100 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.containerTwo}>

                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={{ fontWeight: "bold", fontSize: 18, marginTop: 40, marginLeft: 25 }}>CONFIGURAÇÕES</Text>
                    <Text style={{ fontWeight: "bold", fontSize: 14, marginTop: 40, marginRight: 25 }}> Icon</Text>
                </View>
                <Text style={{ fontWeight: "bold", color: '#939393', marginLeft: 25, marginBottom: 20 }}>CONFIGURAR</Text>


                <TouchableOpacity onPress={() => editarDadosPerfil()} style={{ display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                    <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                        <FontAwesome name='user' size={25} color="black" style={{ marginRight: 30, marginLeft: 20 }} />
                        <Text style={{ display: 'flex', flexDirection: "column" }}>Editar dados do perfil</Text>
                    </View>

                    <Text style={{ fontSize: 40, alignSelf: "flex-end" }}>{'>'}</Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={{ display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                    <View style={{ display: 'flex', flexDirection: "row", alignItems: 'center' }}>
                        <FontAwesome name='money' size={25} color="black" style={{ marginRight: 30, marginLeft: 20 }} />
                        <Text style={{ display: 'flex', flexDirection: "column" }}>Editar entrada de dinheiro mensal</Text>
                    </View>

                    <Text style={{ fontSize: 40, alignSelf: "flex-end" }}>{'>'}</Text>
                </TouchableOpacity>
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
        height: 700,
        paddingBottom: 100
    }
});