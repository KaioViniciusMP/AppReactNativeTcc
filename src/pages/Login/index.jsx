import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";

export default function Login() {
    const navigation = useNavigation();
    
    async function openHome() {
        navigation.navigate('Home');  // Passe o nome da tela registrada
    }

    return (
        <>
            <Text>tela de login</Text>
            <TouchableOpacity onPress={openHome}>
                <Text>Teste de navegação</Text>
            </TouchableOpacity>
        </>
    );
}