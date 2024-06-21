import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function PageEntrada() {
    const navigation = useNavigation();
    const PageLogin = () => {
        navigation.navigate('Login')
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerBox1}>
                <View style={styles.imageContainer}>

                </View>
                <Text style={styles.Label}>Olá, seja bem vindo!</Text>
            </View>
            <View style={styles.containerBox2}>
                <TouchableOpacity onPress={PageLogin} style={styles.Button}>
                    <Text style={styles.LabelButton}>Login</Text>
                </TouchableOpacity>
                <Text style={styles.LabelBottom}>Não possui uma conta?</Text>
            </View>
        </View>
    )
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
        fontSize: 20,
        color: 'white',
        marginTop: 10
    },
    Button: {
        width: '70%',
        alignSelf: "center",
        backgroundColor: '#9792BF',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height:45,
        borderRadius: 20,
        marginBottom: 10
    },
    LabelButton: {
        color: 'white',
    },
    LabelBottom: {
        color: 'white',
    },

    containerBox1: {
        height: '50%',
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