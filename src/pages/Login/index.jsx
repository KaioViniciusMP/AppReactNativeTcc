import { useNavigation } from "@react-navigation/native";
import { useState, useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from "react-native";
import { AuthContext } from "../../context";

export default function Login() {
    const [txtSenha, setSenha] = useState('');
    const [txtUsuario, setUsuario] = useState('');
    const navigation = useNavigation();
    const { signIn } = useContext(AuthContext)

    const PageHome = () => {
        navigation.navigate('Home')
    }
    const PageCadastro = () => {
        navigation.navigate('Cadastro')
    }

    async function handleLogin() {
        // txtUsuario ? "" : AlertUsuarioInvalido
        // txtSenha ? "" : AlertSenhaInvalido
        if(txtUsuario == ""){
            AlertUsuarioInvalido()
        }
        if(txtSenha == ""){
            AlertSenhaInvalido()
        }
            
        await signIn({ txtUsuario, txtSenha })
    }

    const AlertUsuarioInvalido = () => {
        setTimeout(() => {
            Alert.alert('Error', 'Digite um usuário para realizar o login.', [
                { text: 'Fechar' },
            ]);
        }, 1000); // Atraso de 1 segundo
    };
    
    const AlertSenhaInvalido = () => {
        setTimeout(() => {
            Alert.alert('Error', 'Digite uma senha para realizar o login.', [
                { text: 'Fechar' },
            ]);
        }, 1000); // Atraso de 1 segundo
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerBox1}>
                <View style={styles.imageContainer}>

                </View>
            </View>
            <View style={styles.containerBox2}>

                <View style={styles.containerInput}>
                    <Text style={styles.Label}>Login</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite aqui seu nome de usuario"
                        value={txtUsuario}
                        onChangeText={setUsuario}
                    />
                </View>
                <View style={styles.containerInput}>
                    <Text style={styles.Label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite sua senha"
                        value={txtSenha}
                        onChangeText={setSenha}
                    />
                </View>



                <View style={styles.containerInput}>
                    <TouchableOpacity onPress={handleLogin} style={styles.Button}>
                        <Text style={styles.LabelButton}>Login</Text>
                    </TouchableOpacity>
                    <Text onPress={PageCadastro} style={styles.LabelBottom}>Não possui uma conta?</Text>
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