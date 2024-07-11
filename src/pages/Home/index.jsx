import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList, Alert } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Octicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { Entypo } from '@expo/vector-icons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Home() {
    const navigation = useNavigation();

    const escolherModalidade = () => {
        navigation.navigate('EscolherModalidade');
    };
    const configuracoes = () => {
        navigation.navigate('Configuracoes');
    };
    const Ajuda = () => {
        navigation.navigate('Ajuda');
    };
    const EntradaFinanceiraExtra = () => {
        navigation.navigate('EntradaFinanceiraExtra');
    };
    const ContasCorrentes = () => {
        navigation.navigate('ContasCorrentes');
    };

    const data = [
        { icon: 'money-bill-trend-up', title: 'Investimentos', subtitle: 'valor', porcentagem: '12%', seta: '>', navigationPage: 'HistoricoInvestimentos' },
        { icon: 'bowl-food', title: 'Alimentação', subtitle: 'subtitulo', porcentagem: '12%', seta: '>', navigationPage: 'HistoricoAlimentacao' },
        { icon: 'car', title: 'Transporte', subtitle: 'subtitulo', porcentagem: '12%', seta: '>', navigationPage: 'HistoricoTransporte' },
        { icon: 'cart-shopping', title: 'Compras', subtitle: 'subtitulo', porcentagem: '12%', seta: '>', navigationPage: 'HistoricoCompras' },
        { icon: 'heart-pulse', title: 'Saúde', subtitle: 'subtitulo', porcentagem: '12%', seta: '>', navigationPage: 'HistoricoSaude' },
        { icon: 'volleyball', title: 'Lazer', subtitle: 'subtitulo', porcentagem: '12%', seta: '>', navigationPage: 'HistoricoLazer' },
    ];

    const TelaHistorico = (navigationPage) => {
        navigation.navigate('HistoricoTransacoes', {
            param1: navigationPage,
            param2: 1,
        });
    }

    const ButtonAlert = () =>
        Alert.alert('Atenção', `Funcionalidade disponivel em breve.`, [
            { text: 'OK', onPress: () => console.log('Deslogar') },
        ]);

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <View style={{ display: 'flex', height: 170, flexDirection: "row", alignItems: "center", paddingLeft: 20, marginBottom: 20 }}>
                    <View style={{ width: 50, height: 50, backgroundColor: '#7F79AB', borderRadius: 50 }}></View>
                    <Text style={{ marginLeft: 10, fontWeight: "bold", color: "white" }}>Ola Kaio</Text>
                </View>
                <View style={styles.containerTwo}>
                    <View>
                        <TouchableOpacity onPress={ContasCorrentes} style={{ padding: 30 }}>
                            <Text style={{ fontSize: 15, color: 'white', fontWeight: "500" }}>Saldo disponivel</Text>
                            <View style={{ alignItems: "center", display: 'flex', flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 1, borderBottomColor: 'white', }}>
                                <Text style={{ color: 'white', marginBottom: 10, fontSize: 30, marginTop: 5 }}>R$0,00</Text>
                                <AntDesign name="right" size={25} color="white" marginTop='10' />
                            </View>
                        </TouchableOpacity>

                        <View style={{ width: '100%', marginBottom: 40, display: 'flex', flexDirection: "row", justifyContent: "center", gap: 10 }}>
                            <TouchableOpacity onPress={configuracoes} style={{ display: 'flex', justifyContent: "center" }}>
                                <View style={{ backgroundColor: '#D9D9D9', height: 70, width: 70, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Octicons name="gear" size={26} color="black" />
                                </View>
                                <Text style={{ color: 'white', textAlign: "center", fontSize: 12 }}>Configurações</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={Ajuda} style={{ display: 'flex', justifyContent: "center" }}>
                                <View style={{ backgroundColor: '#D9D9D9', height: 70, width: 70, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <Feather name="help-circle" size={28} color="black" />
                                </View>
                                <Text style={{ color: 'white', textAlign: "center", fontSize: 12 }}>Ajude</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={EntradaFinanceiraExtra} style={{ display: 'flex', justifyContent: "center" }}>
                                <View style={{ backgroundColor: '#D9D9D9', height: 70, width: 70, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <MaterialCommunityIcons name="finance" size={30} color="black" />
                                </View>
                                <Text style={{ color: 'white', textAlign: "center", fontSize: 12 }}>Entrada</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={ButtonAlert} style={{ display: 'flex', justifyContent: "center" }}>
                                <View style={{ backgroundColor: '#D9D9D9', height: 70, width: 70, borderRadius: 20, display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <MaterialCommunityIcons name="exit-to-app" size={32} color="black" />
                                </View>
                                <Text style={{ color: 'white', textAlign: "center", fontSize: 12 }}>Sair</Text>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.containerTree}>
                            <View style={{ padding: 30 }}>
                                <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Saldo disponivel</Text>
                                <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", justifyContent: "space-between", borderBottomWidth: 3, borderBottomColor: 'white', }}>
                                    <Text style={{ color: '#000', fontWeight: "bold", fontSize: 35 }}>R$0,00</Text>
                                    <TouchableOpacity onPress={escolherModalidade} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: '30%', borderRadius: 5, height: 30, borderWidth: 2, borderColor: '#7F79AB' }}>
                                        <Text style={{ color: '#7F79AB', fontWeight: "semibold" }}>Utilizar</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", borderBottomWidth: 3, borderBottomColor: 'white', }}>
                                    <Text style={{ fontWeight: "bold" }}>Disponivel para utilizar</Text>
                                    <Text style={{ fontWeight: "bold" }}>R$ 0,00</Text>
                                </View>
                                <View style={{ display: 'flex', flexDirection: "column", justifyContent: "space-between", borderBottomWidth: 3, borderBottomColor: 'white', marginTop: 30 }}>
                                    <Text style={{ fontWeight: "bold" }}>Seus rendimentos de 2024</Text>
                                    <View style={{ width: '100%', borderWidth: 1, height: 160, marginTop: 20, display: 'flex', alignItems: "center", justifyContent: "center" }}>
                                        <Text style={{ color: 'gray' }}>O grafico vai aqui</Text>
                                    </View>
                                </View>
                                <View style={{ marginTop: 30 }}>
                                    <Text style={{ fontWeight: "bold", marginBottom: 10 }}>Seus rendimentos de 2024</Text>

                                    <FlatList
                                        data={data}
                                        renderItem={({ item }) => (
                                            <TouchableOpacity onPress={() => TelaHistorico(item.navigationPage)} style={{ display: 'flex', justifyContent: "space-between", flexDirection: "row", padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                                                <View style={{ display: 'flex', flexDirection: "row" }}>
                                                    <FontAwesome6 name={item.icon} size={24} style={{ marginRight: 30, alignSelf:'center' }} color="black" />
                                                    <View style={{ display: 'flex', flexDirection: "column" }}>
                                                        <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                                                        <Text>{item.subtitle}</Text>
                                                        <Text>{item.porcentagem}</Text>
                                                    </View>
                                                </View>

                                                <Text style={{ fontSize: 40, alignSelf: "flex-end" }}>{item.seta}</Text>
                                            </TouchableOpacity>
                                        )}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    scrollViewContainer: {
        justifyContent: 'flex-end',
        backgroundColor: '#5D5C96', // Cor de fundo do ScrollView
    },
    container: {
        flexGrow: 1,
        backgroundColor: '#5D5C96',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        marginBottom: 50
    },
    containerTwo: {
        flexGrow: 1,
        backgroundColor: '#7F79AB',
        flexDirection: 'column',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    containerTree: {
        minHeight: 350, // Exemplo de altura fixa para o containerTree
        backgroundColor: '#fff',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
});
