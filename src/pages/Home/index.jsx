import { useNavigation } from "@react-navigation/native";
import { Text,TouchableOpacity } from "react-native";

export default function Home(){
    const navigation = useNavigation();
    const historicoTransacoes = () => {
        navigation.navigate('HistoricoTransacoes')
    }

    return(
        <>
            <Text>tela Home</Text>
            <TouchableOpacity onPress={historicoTransacoes}>
                <Text>Teste de navegação</Text>
            </TouchableOpacity>
        </>
    )
}