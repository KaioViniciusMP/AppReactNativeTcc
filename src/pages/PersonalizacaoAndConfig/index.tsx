import { StyleSheet, Text, View, ScrollView, TouchableOpacity, FlatList, Alert } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../Routes/app.routes';

import AntDesign from '@expo/vector-icons/AntDesign';
import { Feather } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

type NavigationProp = NativeStackNavigationProp<AppStackParamList>;

export default function PagePersonalizacaoAndConfig() {
    const navigation = useNavigation();
    const navigationApp = useNavigation<NavigationProp>();

    const PageHome = () => {
        navigation.goBack();
    }
    const Configuracoes = () => {
        navigationApp.navigate('Configuracoes');
    }
    const Ajuda = () => {
        navigationApp.navigate('Ajuda');
    }

    const ButtonAlert = () =>
        Alert.alert('Alert Title', `Deseja mesmo sair do app?`, [
            {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'OK', onPress: () => console.log('Deslogar') },
        ]);

    const sair = () => {
        ButtonAlert();
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <TouchableOpacity onPress={PageHome} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, marginBottom: 60 }}>
                <AntDesign name="left" size={20} color="#fff" />
                <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5 }}>Voltar</Text>
            </TouchableOpacity>

            <View style={styles.containerTwo}>
                <TouchableOpacity onPress={PageHome} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 40 }}>
                    <Entypo name='home' size={25} color={"#000"} />
                    <Text style={{ fontWeight: "900", fontSize: 15, marginLeft: 10 }}>Inicio</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={Configuracoes} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 21, marginTop: 20 }}>
                    <Octicons name="gear" size={25} color="black" />
                    <Text style={{ fontWeight: "900", fontSize: 15, marginLeft: 10 }}>Configurações</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={Ajuda} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 20 }}>
                    <Feather name="help-circle" size={25} color="black" />
                    <Text style={{ fontWeight: "900", fontSize: 15, marginLeft: 10 }}>Ajuda</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={sair} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginTop: 20 }}>
                    <MaterialCommunityIcons name="exit-to-app" size={25} color="black" />
                    <Text style={{ fontWeight: "900", fontSize: 15, marginLeft: 10 }}>Sair</Text>
                </TouchableOpacity>
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