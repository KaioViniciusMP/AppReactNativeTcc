import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput, Platform, Alert } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { Picker } from '@react-native-picker/picker';
import React, { useContext, useEffect, useState } from 'react'
import { AuthStackParamList } from '../../Routes/auth.routes';
import { AppStackParamList } from '../../Routes/app.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRoute, RouteProp } from '@react-navigation/native';
import api from '../../services/api';
import { AuthContext } from '../../context';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;
type TransferenciaRouteProp = RouteProp<AppStackParamList, 'Transferencia'>;

export interface Agencia {
    codigo: number;
    agencia: string;
    usuarioCodigo: number;
    saldo: number;
}
interface Cartao {
    codigoCartao: number,
    bandeiraCartao: string,
    usuarioCodigo: number,
    contaCorrenteCodigo: number,
    cvv: string,
    dataValidade: string,
    formaPagamento: string,
    limite: number
}
interface Modalidades {
    codigo: number;
    nomeModalidade: string;
}

export default function Transferencia() {
    const { user } = useContext(AuthContext)
    const [descricao, setDescricao] = useState('');
    const [titulo, setTitulo] = useState('');

    const [valorTransacao, setValorTransacao] = useState(0);
    const [lstModalidadesDisponiveis, setLstModalidadesDisponiveis] = useState<Modalidades[]>([]);
    const [lstAgenciasDisponiveis, setLstAgenciasDisponiveis] = useState<Agencia[]>([]);
    const [lstCartoesDisponiveis, setLstCartoesDisponiveis] = useState<Cartao[]>([]);
    
    const [selectedValueAgencia, setSelectedValueAgencia] = useState("");
    const [selectedValueFormaPagamento, setSelectedValuePagamento] = useState("");
    const [selectedValueCartao, setSelectedValueCartao] = useState("");
    const navigation = useNavigation<NavigationProp>();

    const route = useRoute<TransferenciaRouteProp>();
    const { localTransferencia } = route.params;
    const [selectedValueLocalTransferenciaModalidade, setSelectedValueLocalTransferencia] = useState(localTransferencia);


    useEffect(() => {
        const fetchSaldo = () => {
            api.post(`/ContaCorrente/BuscarContasCorrentesExistentesPorUsuario/${user.usuarioCodigo}`)
                .then(response => {
                    if (response.data && response.data.length > 0) {
                        setLstAgenciasDisponiveis(response.data);
                    }
                })
                .catch(err => console.error("ops! ocorreu um erro: " + err));

            api.post(`/Cartao/BuscarCartoesCadastrados`, { usuarioCodigo: user.usuarioCodigo })
                .then(response => {
                    if (response.data && response.data.length > 0) {
                        setLstCartoesDisponiveis(response.data);
                    }
                })
                .catch(err => console.error("ops! ocorreu um erro: " + err));

            api.get('/Transacoes/BuscarModalidades')
                .then(response => {
                    if (response.data && response.data.length > 0) {
                        setLstModalidadesDisponiveis(response.data);
                    }
                })
                .catch(err => console.error("ops! ocorreu um erro: " + err));
        };

        fetchSaldo(); // Chamada inicial
        const interval = setInterval(fetchSaldo, 5000); // Chama a API a cada 5 segundos

        return () => clearInterval(interval); // Limpa o intervalo quando o componente desmonta
    }, []);

    //selectedValueLocalTransferenciaModalidade - redefinir da tela anterior para ele vim o codigo da modalidade e nao so o nomee ser colocado na modalidadeCodigo

    const realizarTransacao = () => {
        if (isNaN(valorTransacao) || valorTransacao <= 0) {
            Alert.alert('Erro', 'O valor da transação deve ser um número positivo.');
            return;
        }

        const today = new Date(); // Substitua pelo valor da data desejada, se necessário
        const formattedDate = today.toISOString().split('T')[0] + "T00:00:00";

        const request = {
            contaCorrenteCodigo: selectedValueAgencia,
            valorTransacao: valorTransacao,
            dataTransacao: new Date().toISOString(), // Ajuste a data para o formato correto
            modalidadeCodigo: 1,
            descricao: descricao,
            titulo: titulo,
            formaPagamento: selectedValueFormaPagamento, // Certifique-se de enviar em minúsculas
            usuarioCodigo: user.usuarioCodigo,
            cvvCartao: selectedValueCartao
        }

        console.log(request)

        api.post('/Transacoes', request)
            .then(response => {
                if (response.data.status) {
                    Alert.alert('Transação feita!')
                    voltarHome()
                } else {
                    console.log("Falha ao criar transação:", response.data.message);
                }
            })
            .catch(err => {
                Alert.alert('Ops.. Não foi possível realizar a transação', `Verifique os campos - ${err}`, [
                    { text: 'Fechar', onPress: () => (console.log(`erro: ${err}`)) }
                ]);
                console.error("Ops! Ocorreu um erro: " + err);
            });
    }


    // const tipoTransferencia = [
    //     { label: "Lazer", value: "Lazer" },
    //     { label: "Compras", value: "Compras" },
    //     { label: "Saúde", value: "Saúde" },
    //     { label: "Transporte", value: "Transporte" },
    //     { label: "Alimentação", value: "Alimentação" },
    //     { label: "Investimentos", value: "Investimentos" },
    // ];

    // const agenciaUtilizada = [
    //     { label: "Nubank", value: "Nubank" },
    //     { label: "Itaú", value: "Itaú" },
    //     { label: "Bradesco", value: "Bradesco" },
    // ]

    const formaPagamento = [
        { label: "Debito", value: "debito" },
        { label: "Credito", value: "credito" }
    ]

    const voltar = () => {
        navigation.pop();
    }

    const voltarHome = () => {
        navigation.popToTop();
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
                        <Text style={{ fontSize: 20, fontWeight: "900", marginBottom: 20, marginTop: 40, marginLeft: 25, marginRight: 25 }}>R$ {lstAgenciasDisponiveis[0]?.saldo}</Text>
                    </View>

                    <View style={{ marginBottom: 40, marginTop: 10, display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TextInput
                            onChangeText={(text) => {
                                // Remove caracteres não numéricos e substitui a vírgula por ponto
                                const numericValue = parseFloat(text.replace(/[^0-9.,]/g, '').replace(',', '.'));
                                // Atualiza o estado com o valor convertido ou com 0 se for NaN
                                setValorTransacao(isNaN(numericValue) ? 0 : numericValue);
                            }}
                            value={valorTransacao.toString()} // Converte o valor para string para exibição
                            style={{ fontWeight: "900", marginLeft: 25, fontSize: 40 }}
                            placeholder='R$ 0,00'
                        />
                        <Text style={{ fontWeight: "bold", marginTop: 20, }}>icon</Text>
                    </View>

                    <View style={{ paddingLeft: 25, paddingRight: 20, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ fontSize: 17, fontWeight: "semibold", color: '#656565' }}>Transferindo para:</Text>
                        <View style={{ marginBottom: 15, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', borderRadius: 5, height: 40 }}>
                            <Picker
                                selectedValue={selectedValueLocalTransferenciaModalidade}
                                onValueChange={(itemValue) => setSelectedValueLocalTransferencia(itemValue)}>

                                {lstModalidadesDisponiveis.map((item, index) => (
                                    <Picker.Item key={index} label={item.nomeModalidade} value={item.nomeModalidade} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    <View style={{ paddingLeft: 25, paddingRight: 20, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ fontSize: 17, fontWeight: "semibold", color: '#656565' }}>Agência utilizada:</Text>
                        <View style={{ marginBottom: 15, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', borderRadius: 5, height: 40 }}>
                            <Picker
                                selectedValue={selectedValueAgencia}
                                onValueChange={(itemValue) => setSelectedValueAgencia(itemValue)}>

                                <Picker.Item style={{ fontWeight: '900' }} label={"Escolha uma agencia"} value="" />

                                {lstAgenciasDisponiveis.map((item, index) => (
                                    <Picker.Item style={{ fontWeight: '900' }} key={index} label={item.agencia} value={item.codigo} />
                                ))}
                            </Picker>
                        </View>
                    </View>

                    <View style={{ paddingLeft: 25, paddingRight: 20, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%' }}>
                        <Text style={{ fontSize: 17, fontWeight: "semibold", color: '#656565' }}>Forma de pagamento:</Text>
                        <View style={{ marginBottom: 15, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', borderRadius: 5, height: 40 }}>
                            <Picker
                                selectedValue={selectedValueFormaPagamento}
                                onValueChange={(itemValue) => setSelectedValuePagamento(itemValue)}>

                                <Picker.Item label={"Escolha uma forma de pagamento"} value="" />

                                {formaPagamento.map((item, index) => (
                                    <Picker.Item key={index} label={item.label} value={item.value} />
                                ))}
                            </Picker>
                        </View>
                    </View>
                    
                    <View style={{ paddingLeft: 25, paddingRight: 20, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%' }}>
                        <Text style={{ fontSize: 17, fontWeight: "semibold", color: '#656565' }}>Cartões disponiveis:</Text>
                        <View style={{ marginBottom: 15, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', borderRadius: 5, height: 40 }}>
                            <Picker
                                selectedValue={selectedValueCartao}
                                onValueChange={(itemValue) => setSelectedValueCartao(itemValue)}>

                                <Picker.Item label={"Selecione um cartão"} value="" />

                                {lstCartoesDisponiveis.map((item, index) => (
                                    <Picker.Item key={index} label={`cvv: ${item.cvv} - limite: ${item.limite} - tipo: ${item.formaPagamento}`} value={item.cvv} />
                                ))}
                            </Picker>
                        </View>
                    </View>


                    <View style={{ paddingLeft: 25, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ fontSize: 17, fontWeight: "semibold", color: '#656565' }}>Data transferencia:</Text>
                        <Text style={{ fontSize: 17, fontWeight: "900", marginBottom: 15, marginLeft: 15, marginTop: 5 }}>Hoje</Text>
                    </View>

                    <View style={{ paddingLeft: 25, alignSelf: 'center', justifyContent: 'center', display: 'flex', width: '100%', }}>
                        <Text style={{ marginBottom: 15, fontSize: 17, fontWeight: "semibold", color: '#656565' }}>Titulo transação:</Text>
                        <TextInput onChangeText={setTitulo} value={titulo} style={{ marginBottom: 15, width: '90%', alignSelf: 'flex-start', borderRadius: 5, height: 40, paddingLeft: 10, borderWidth: 1, borderColor: '#716A9C', }} placeholder='Escreva aqui o titulo da transação...' />
                    </View>

                    <Text style={{ marginLeft: 25, fontSize: 17, fontWeight: "semibold", color: '#656565' }}>Descrição:</Text>
                    <View style={{ borderColor: '#716A9C', marginLeft: 25, alignSelf: 'flex-start', width: '85%', borderWidth: 1, borderRadius: 5, height: 250, marginTop: 15, display: 'flex', }}>
                        <TextInput onChangeText={setDescricao} value={descricao} style={{ color: 'gray', margin: 10 }} multiline placeholder='Escreva aqui a descrição da transação...' />
                    </View>

                    <View style={{ marginTop: 40, justifyContent: 'center', display: 'flex', width: '100%', alignItems: 'center' }}>
                        <TouchableOpacity onPress={realizarTransacao} style={{ display: "flex", alignItems: "center", justifyContent: "center", width: '50%', borderRadius: 8, height: 50, backgroundColor: '#7F79AB' }}>
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