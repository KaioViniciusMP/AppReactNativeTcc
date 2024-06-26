import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { AuthStackParamList } from '../../Routes/auth.routes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type NavigationProp = NativeStackNavigationProp<AuthStackParamList>;

export default function Cadastro() {
    const [txtSenha, setSenha] = useState('');
    const [txtUsuario, setUsuario] = useState('');

    const navigation = useNavigation<NavigationProp>();

    const login = () => {
        navigation.navigate('Login');
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerBox1}>
                <View style={styles.imageContainer}>

                </View>
            </View>
            <View style={styles.containerBox2}>
                <View style={styles.containerInput}>
                    <Text style={styles.Label}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite aqui seu nome de usuario"
                        value={txtUsuario}
                        onChangeText={setUsuario}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.Label}>Login:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite aqui seu nome de usuario"
                        value={txtUsuario}
                        onChangeText={setUsuario}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.Label}>Senha:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        value={txtSenha}
                        onChangeText={setSenha}
                    />
                </View>

                <View style={styles.containerInput}>
                    <TouchableOpacity onPress={login} style={styles.Button}>
                        <Text style={styles.LabelButton}>Cadastro</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#5D5C96',
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    imageContainer: {
        height: 150,
        width: 150,
        borderRadius: 75,
        backgroundColor: 'gray',
    },
    Label: {
        fontSize: 15,
        color: 'white',
        marginTop: 10,
        marginLeft: '6%',
        marginBottom: 5
    },
    Button: {
        width: '50%',
        alignSelf: "center",
        backgroundColor: '#9792BF',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 45,
        borderRadius: 20,
        marginBottom: 10,
        marginTop: 25
    },
    LabelButton: {
        color: 'white',
    },
    LabelBottom: {
        color: 'white',
        textAlign: "right",
        fontSize: 12,
        marginTop: 10
    },
    input: {
        width: '100%',
        alignSelf: "center",
        backgroundColor: '#ffff',
        height: 45,
        borderRadius: 20,
        marginBottom: 10,
        paddingLeft: 20
    },

    containerInput: {
        width: '85%',
    },
    containerBox1: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 100
    },
    containerBox2: {
        width: '100%',
        height: '50%',
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: 100
    },
})