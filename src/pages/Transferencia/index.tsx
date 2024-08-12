import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Platform } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react'
import { AuthStackParamList } from '../../Routes/auth.routes';
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRoute, RouteProp } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
type TransferenciaRouteProp = RouteProp<AppStackParamList, 'Transferencia'>;

export default function Transferencia() {

    const [selectedValueAgencia, setSelectedValueAgencia] = useState("Escolha uma agencia");
    const [selectedValueFormaPagamento, setSelectedValuePagamento] = useState("Escolha uma forma de pagamento");
    const navigation = useNavigation<NavigationProp>();

    const route = useRoute<TransferenciaRouteProp>();
    const { localTransferencia } = route.params;
    const [selectedValueLocalTransferencia, setSelectedValueLocalTransferencia] = useState(localTransferencia);


    const tipoTransferencia = [
        { label: "Lazer", value: "Lazer" },
        { label: "Compras", value: "Compras" },
        { label: "Saúde", value: "Saúde" },
        { label: "Transporte", value: "Transporte" },
        { label: "Alimentação", value: "Alimentação" },
        { label: "Investimentos", value: "Investimentos" },
    ];

    const agenciaUtilizada = [
        { label: "Nubank", value: "Nubank" },
        { label: "Itaú", value: "Itaú" },
        { label: "Bradesco", value: "Bradesco" },
    ]

    const formaPagamento = [
        { label: "Debito", value: "Debito" },
        { label: "Credito", value: "Credito" }
    ]

    const voltar = () => {
        navigation.pop();
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
            <View style={styles.container}>
                <TouchableOpacity onPress={voltar} style={{ display: 'flex', flexDirection: 'row', marginLeft: 20, marginTop: 40, marginBottom: 120 }}>
                    <AntDesign name="left" size={20} color="#fff" />
                    <Text style={{ color: '#fff', fontSize: 15, marginLeft: 5 }}>Voltar</Text>
                </TouchableOpacity>

                <View style={styles.containerTwo}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 20, fontWeight: "900", marginBottom: 20, marginTop: 40, marginLeft: 25 }}>Saldo diponivel:</Text>
                        <Text style={{ fontSize: 20, fontWeight: "900", marginBottom: 20, marginTop: 40, marginLeft: 25, marginRight: 25 }}>R$0,00</Text>
                    </View>

                    <View style={{ marginBottom: 40, marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontWeight: "900", marginLeft: 25, fontSize: 40 }}>R$ 0,00</Text>
                        <Text style={{ fontWeight: "bold", marginTop: 20, }}>icon</Text>
                    </View>

                    <View style={{ paddingLeft: 25, paddingRight: 20, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ fontSize: 17, fontWeight: "semibold", color:'#656565' }}>Transferindo para:</Text>
                        <View style={{ marginBottom: 15, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', borderRadius: 5, height: 40 }}>
                            <Picker
                                selectedValue={selectedValueLocalTransferencia}
                                onValueChange={(itemValue) => setSelectedValueLocalTransferencia(itemValue)}>

                                {tipoTransferencia.map((item, index) => (
                                    <Picker.Item key={index} label={item.label} value={item.value} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    <View style={{ paddingLeft: 25, paddingRight: 20, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ fontSize: 17, fontWeight: "semibold", color:'#656565' }}>Agência utilizada:</Text>
                        <View style={{ marginBottom: 15, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', borderRadius: 5, height: 40 }}>
                            <Picker
                                selectedValue={selectedValueAgencia}
                                onValueChange={(itemValue) => setSelectedValueAgencia(itemValue)}>

                                <Picker.Item style={{fontWeight: '900'}} label={selectedValueAgencia} value="" />

                                {agenciaUtilizada.map((item, index) => (
                                    <Picker.Item style={{fontWeight: '900'}} key={index} label={item.label} value={item.value} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    <View style={{ paddingLeft: 25, paddingRight: 20, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%' }}>
                        <Text style={{ fontSize: 17, fontWeight: "semibold", color:'#656565' }}>Forma de pagamento:</Text>
                        <View style={{ marginBottom: 15, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', borderRadius: 5, height: 40 }}>
                            <Picker
                                selectedValue={selectedValueFormaPagamento}
                                onValueChange={(itemValue) => setSelectedValuePagamento(itemValue)}>

                                <Picker.Item label={selectedValueFormaPagamento} value="" />

                                {formaPagamento.map((item, index) => (
                                    <Picker.Item key={index} label={item.label} value={item.value} />
                                ))}
                            </Picker>
                        </View>
                    </View>


                    <View style={{ paddingLeft: 25, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ fontSize: 17, fontWeight: "semibold", color:'#656565' }}>Data transferencia:</Text>
                        <Text style={{ fontSize: 17, fontWeight: "900", marginBottom: 15, marginLeft: 15, marginTop:5 }}>Hoje</Text>
                    </View>

                    <View style={{ paddingLeft: 25, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginBottom: 15, fontSize: 17, fontWeight: "semibold", color:'#656565' }}>Titulo transação:</Text>
                        <TextInput style={{ marginBottom: 15, width: '90%', alignSelf: 'flex-start', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 1, borderColor: '#716A9C', }} placeholder='Escreva aqui o titulo da transação...' />
                    </View>

                    <Text style={{ marginLeft: 25, fontSize: 17, fontWeight: "semibold", color:'#656565' }}>Descrição:</Text>
                    <View style={{ borderColor: '#716A9C',marginLeft: 25, alignSelf: 'flex-start', width: '85%', borderWidth: 1, borderRadius: 5, height: 250, marginTop: 15, display: 'flex', }}>
                        <TextInput style={{ color: 'gray', margin: 10 }} multiline placeholder='Escreva aqui a descrição da transação...' />
                    </View>

                    <View style={{ marginTop: 40, justifyContent: 'center', display: 'flex', width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity style={{ display: "flex", alignItems: "center", justifyContent: "center", width: '50%', borderRadius: 8, height: 50, backgroundColor: '#7F79AB' }}>
                            <Text style={{ color: '#FFF', fontWeight: "bold" }}>Transferir agora</Text>
                        </TouchableOpacity>
                        <Text onPress={voltar} style={{ color: '#7F79AB', fontWeight: "bold", marginTop: 10 }}>Cancelar operação</Text>
                    </View>
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
    container: {
        flexGrow: 1,
        backgroundColor: '#5D5C96',
        flexDirection: 'column',
        justifyContent: 'flex-end',
    },
    containerTwo: {
        flexGrow: 1,
        backgroundColor: '#FFF',
        flexDirection: 'column',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        paddingBottom: 100
    },
});